import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import * as RNFS from 'react-native-fs';
import XLSX from 'xlsx';
import firestore from '@react-native-firebase/firestore'; // Import Firestore from '@react-native-firebase/firestore'

const ReadExcel = () => {
  const [DData, setDData] = useState([]);

  const pickExcelFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // Access the file URI from the response
      const fileUri = res[0].uri; // Assuming you're picking a single file

      // Ensure fileUri is defined before using it
      if (!fileUri) {
        throw new Error('File URI is undefined');
      }

      // Read file
      const fileContent = await RNFS.readFile(fileUri, 'base64');

      // Parse file
      const workbook = XLSX.read(fileContent, { type: 'base64' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonDData = XLSX.utils.sheet_to_json(sheet);

      setDData(jsonDData);

      // Upload to Firestore
      uploadToFirestore(jsonDData);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error('Error reading file:', err);
      }
    }
  };

  const uploadToFirestore = async (DData) => {
    try {
      const collectionRef = firestore().collection('try2'); // Replace 'your_collection_name' with your collection name

      DData.forEach((item) => {
        const rollNo = item.Roll_No.toString(); // Assuming Roll_No is a string
        collectionRef.doc(rollNo).set({ ...item, Roll_No: rollNo }); // Set Roll_No both as document ID and a field
      });

      console.log('DData successfully written to Firestore!');
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Pick Excel File" onPress={pickExcelFile} />
      <ScrollView style={{ marginTop: 20 }}>
        {DData.length > 0 && (
          DData.map((item, index) => (
            <Text key={index}>{JSON.stringify(item, null, 2)}</Text>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default ReadExcel;
