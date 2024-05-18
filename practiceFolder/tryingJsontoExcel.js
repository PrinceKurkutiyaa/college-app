import React, { useState } from 'react';
import { Button, View, StyleSheet, PermissionsAndroid, Platform, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';

const requestStoragePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'This app needs access to your storage to save Excel files',
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true; // iOS permissions are handled differently
};

const fetchData = async () => {
  try {
    const snapshot = await firestore().collection('Computer').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('Data fetched:', data);
    return data;
  } catch (error) {
    console.error("Error fetching Firestore data: ", error);
    return [];
  }
};

const convertToExcel = (data) => {
  try {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    console.log(wb)
    const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });

    const buffer = new ArrayBuffer(wbout.length);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < wbout.length; ++i) {
      view[i] = wbout.charCodeAt(i) & 0xFF;
    }
    console.log(buffer)
    return buffer;
  } catch (error) {
    console.error("Error converting data to Excel: ", error);
    return null;
  }
};

const saveExcelFile = async (buffer) => {
  const path = `${RNFS.DownloadDirectoryPath}/data.xlsx`;

  try {
    await RNFS.writeFile(path, buffer, 'ascii');
    console.log(`File saved at ${path}`);
    Alert.alert('Success', `File saved at ${path}`);
    console.log(buffer)
  } catch (error) {
    console.error("Error saving file: ", error);
    Alert.alert('Error', 'Failed to save the file');
  }
};

const App = () => {
  const [loading, setLoading] = useState(false);

  const exportDataToExcel = async () => {
    setLoading(true);
    const permissionGranted = await requestStoragePermission();
    // if (!permissionGranted) {
    //   Alert.alert('Permission Denied', 'Storage permission is required to save the file');
    //   setLoading(false);
    //   return;
    // }

    const data = await fetchData();
    if (data.length === 0) {
      Alert.alert('No Data', 'No data found to export');
      setLoading(false);
      return;
    }

    const buffer = convertToExcel(data);
    if (buffer) {
      await saveExcelFile(buffer);
    } else {
      Alert.alert('Error', 'Failed to convert data to Excel');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Button
        title={loading ? 'Exporting...' : 'Export Data to Excel'}
        onPress={exportDataToExcel}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
