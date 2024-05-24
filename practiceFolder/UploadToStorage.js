import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import storage from '@react-native-firebase/storage';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

const App = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = async () => {
    try {
      if (!selectedFile) {
        Alert.alert('No file selected');
        return;
      }

      const filename = selectedFile.name || 'example.txt';
      const fileUri = selectedFile.uri;

      // Read the file as base64 encoded string
      const fileBase64 = await RNFS.readFile(fileUri, 'base64');

      // Create a reference in Firebase Storage
      const storageRef = storage().ref(`uploads/${filename}`);

      // Upload the base64 string
      const uploadTask = storageRef.putString(fileBase64, 'base64', { contentType: selectedFile.type });

      uploadTask.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      }, error => {
        console.error('Error uploading file:', error);
        Alert.alert('Upload Error', 'Failed to upload the file. Please try again.');
      }, () => {
        console.log('File uploaded successfully');
        setUploadProgress(0);
        Alert.alert('Upload Success', 'File uploaded successfully.');
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      Alert.alert('Upload Error', 'Failed to upload the file. Please try again.');
    }
  };

  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setSelectedFile(res[0]);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the picker');
      } else {
        console.error('Error picking file:', error);
        Alert.alert('File Selection Error', 'Failed to pick a file. Please try again.');
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick File" onPress={pickFile} />
      {selectedFile && (
        <Text>Selected File: {selectedFile.name}</Text>
      )}
      <Button title="Upload File" onPress={uploadFile} disabled={!selectedFile} />
      <Text>Upload Progress: {uploadProgress}%</Text>
    </View>
  );
};

export default App;
