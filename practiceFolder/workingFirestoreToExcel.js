import React from 'react';
import { Button, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { Buffer } from 'buffer'; // Ensure to import Buffer if not already available

const fetchData = async () => {
  const snapshot = await firestore().collection('Computer').get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));    //fetching the data
  
  return data;
};

const processDataForExcel = (data) => {
  return data.map(item => ({
    Name: item.name,
    Roll_No: item.roll,       //we will use where and which column we want to add the data
  }));
  
};

const createExcel = async (data) => {
 // Log the input data to the console
 console.log(data);

 // Step 1: Create a new workbook
 const wb = XLSX.utils.book_new();

 // Step 2: Convert the data into a worksheet
 const ws = XLSX.utils.json_to_sheet(data);

 // Step 3: Append the worksheet to the workbook with the name 'Sheet1'
 XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

 // Log the workbook object to the console
 console.log(wb);

 // Step 4: Write the workbook to a binary string
 const wbout = XLSX.write(wb, { type: 'binary', bookType:'xlsx' });

 // Step 5: Convert the binary string to a base64 string
 // Create an ArrayBuffer with the same length as the binary string
 const buffer = new ArrayBuffer(wbout.length);

 // Create a view for the ArrayBuffer
 const view = new Uint8Array(buffer);

 // Populate the ArrayBuffer with the binary string's character codes
 for (let i = 0; i < wbout.length; ++i) {
   view[i] = wbout.charCodeAt(i) & 0xFF;
 }

 // Convert the Uint8Array to a base64 string
 const base64String = Buffer.from(view).toString('base64');

 // Step 6: Define the path where the file will be saved
 const path = `${RNFS.DocumentDirectoryPath}/god.xlsx`;

 // Step 7: Write the base64 string to the file system
 await RNFS.writeFile(path, base64String, 'base64');

 // Return the file path
 return path;
};

const shareExcelFile = async (filePath) => {
  try {
    await Share.open({
      url: `file://${filePath}`,
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  } catch (error) {
    console.error('Error sharing file: ', error);
  }
};

const App = () => {
  const handleExport = async () => {
    const data = await fetchData();
    const processedData = processDataForExcel(data);
    const filePath = await createExcel(processedData);
    await shareExcelFile(filePath);
  };

  return (
    <View>
      <Button title="Export to Excel" onPress={handleExport} />
    </View>
  );
};

export default App;
