import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Alert, Platform,TouchableOpacity } from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

const FirstSemSessionalStudent = () => {
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchDocuments();
    
  }, []);
  // Function to fetch documents from Firestore
  const fetchDocuments = async () => {
    try {
      const querySnapshot = await firestore().collection('Sessional Marks').doc("Computer Branch").collection('Computer 1st Sem Sessional').orderBy('timestamp', 'desc').get();
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
      const storageRef = storage().ref().child(`Sessional/Computer Branch/Computer 1st Sem/${fileName}`);
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

  return (
    <View style={{ flex: 1,alignItems:'center',justifyContent:'center' }}>
      <FlatList
        data={documents}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 ,alignItems:'center',borderWidth:1,paddingHorizontal:50,borderColor:'black',borderRadius:40,padding:10}}>
            <Text style={{fontSize:20,fontWeight:'700'}}>File Name: {item.name}</Text>
            <View>
              <TouchableOpacity 
              onPress={() => downloadDocument(item.name)}
              style={{
                borderWidth: 1,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                backgroundColor: '#232629',
              }}>
                <View style={{padding: 10, paddingHorizontal: 70}}>
                  <Text style={{color: 'white', letterSpacing: 1}}>
                    Download
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default FirstSemSessionalStudent;
