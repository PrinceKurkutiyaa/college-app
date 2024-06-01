import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Alert, Platform,TouchableOpacity } from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';


const FifthSemSessionalPlastic = () => {
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchDocuments();
    if (Platform.OS === 'android') {
      requestStoragePermission();
    }
  }, []);

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'This app needs access to your storage to download documents',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission granted');
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Function to upload document
  const uploadDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      console.log('Document Picker Result:', res);

      if (!res[0].uri || !res[0].name) {
        throw new Error('Invalid document picked');
      }

      let filePath = res[0].uri;
      const fileName = res[0].name.replace(/\s/g, '_'); // Replace spaces with underscores

      setUploading(true);

      // Handle content URIs for Android
      if (filePath.startsWith('content://')) {
        const destPath = `${RNFS.TemporaryDirectoryPath}/${fileName}`;
        await RNFS.copyFile(filePath, destPath);
        filePath = destPath;
      } else if (Platform.OS === 'ios') {
        // Handle different file URI formats for iOS
        filePath = decodeURIComponent(filePath.replace('file://', ''));
      }

      console.log('File Path:', filePath);

      // Create storage reference using child method
      const storageRef = storage().ref().child(`Sessional/Plastic Branch/Plastic 5th Sem/${fileName}`);

      // Check if the file exists before uploading
      const fileExists = await RNFS.exists(filePath);
      console.log('File exists:', fileExists);

      if (!fileExists) {
        throw new Error(`File does not exist at path: ${filePath}`);
      }

      console.log('Uploading file to Firebase Storage:', filePath);
      await storageRef.putFile(filePath);

      // Save document metadata to Firestore
      const docRef = await firestore().collection('Sessional Marks').doc("Plastic Branch").collection('Plastic 5th Sem Sessional').add({
        name: fileName,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      setUploading(false);
      Alert.alert('Success', 'Document uploaded successfully!');
      fetchDocuments(); // Refresh the document list
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled document picker');
      } else {
        console.error('Error uploading document: ', error);
        Alert.alert('Error', 'Error uploading document: ' + error.message);
      }
      setUploading(false);
    }
  };

  // Function to fetch documents from Firestore
  const fetchDocuments = async () => {
    try {
      const querySnapshot = await firestore().collection('Sessional Marks').doc("Plastic Branch").collection('Plastic 5th Sem Sessional').orderBy('timestamp', 'desc').get();
      const documentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDocuments(documentsData);
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  };

  // Function to download document
  const downloadDocument = async (documentName) => {
    try {
      const fileName = documentName.replace(/\s/g, '_'); // Replace spaces with underscores
      const storageRef = storage().ref().child(`Sessional/Plastic Branch/Plastic 5th Sem/${fileName}`);
      const url = await storageRef.getDownloadURL();
      console.log('Document download URL:', url);

      // Define the local path to save the downloaded file
      const localFilePath = `${RNFS.DownloadDirectoryPath}/${fileName}`;

      // Ensure the Download directory exists
      const downloadDirExists = await RNFS.exists(RNFS.DownloadDirectoryPath);
      if (!downloadDirExists) {
        await RNFS.mkdir(RNFS.DownloadDirectoryPath);
      }

      // Download the file and save it locally
      const downloadOptions = {
        fromUrl: url,
        toFile: localFilePath,
      };

      const result = await RNFS.downloadFile(downloadOptions).promise;
      if (result.statusCode === 200) {
        Alert.alert('Success', 'Document downloaded successfully!');
      } else {
        throw new Error('Failed to download document');
      }
    } catch (error) {
      console.error('Error downloading document: ', error);
      Alert.alert('Error', 'Error downloading document: ' + error.message);
    }
  };

  // Function to delete document
  const deleteDocument = async (document) => {
    try {
      const fileName = document.name.replace(/\s/g, '_'); // Replace spaces with underscores
      const storageRef = storage().ref().child(`Sessional/Plastic Branch/Plastic 5th Sem/${fileName}`);

      // Delete the file from Firebase Storage
      await storageRef.delete();

      // Remove the document metadata from Firestore
      await firestore().collection('Sessional Marks').doc("Plastic Branch").collection('Plastic 5th Sem Sessional').doc(document.id).delete();

      Alert.alert('Success', 'Document deleted successfully!');
      fetchDocuments(); // Refresh the document list
    } catch (error) {
      console.error('Error deleting document: ', error);
      Alert.alert('Error', 'Error deleting document: ' + error.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      
      <FlatList
        data={documents}
        renderItem={({ item ,index}) => (
          <View style={{ marginVertical: 8 ,flexDirection:'row',borderWidth:1,padding:20,borderRadius:20}}>
            <Text style={{fontSize:20}}>{index+1}.</Text>
            <Text style={{paddingHorizontal:40,fontSize:20}}>{item.name}</Text>
            <Button title="Download" onPress={() => downloadDocument(item.name)} />
            <Button title="Delete" onPress={() => deleteDocument(item)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Upload Document" onPress={uploadDocument} disabled={uploading} />
    </View>
  );
};


export default FifthSemSessionalPlastic;
