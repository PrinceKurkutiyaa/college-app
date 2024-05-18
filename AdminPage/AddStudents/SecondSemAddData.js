import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Button,TextInput,ScrollView,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import DocumentPicker from 'react-native-document-picker';
import * as RNFS from 'react-native-fs';
import XLSX from 'xlsx';
const SecondSemAddData = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [update, setUpdate] = useState('')
  const [rollUpdate, setRollUpdate] = useState('')
  const [boolean,setBoolean] = useState(false)

  const [DData, setDData] = useState([]);
  const [data, setData] = useState([])
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null)

  const [edit, setEdit] = useState(false)
  const [show, setShow] = useState(false)
  const [showExcel, setShowExcel] = useState(false)

  const navigation = useNavigation();

  useEffect(() => {
    
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const snapshot = await firestore().collection('Student Data').doc('Computer Branch').collection('Computer 2nd sem').get();
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //  console.log(items)
      setData(items)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const addData = async () => {
    //Adding Data in Database
    const data = await firestore().collection('Student Data').doc('Computer Branch').collection('Computer 2nd sem').doc(roll).set({ name, roll, boolean })
    console.warn("Data Added")
    fetchData()
  };
  const deleteData = async (item) => {
    try {
      await firestore().collection('Student Data').doc('Computer Branch').collection('Computer 2nd sem').doc(item.id).delete();
      console.log(item.id);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  const updates = async () => {
    try {
      await firestore().collection('Student Data').doc('Computer Branch').collection('Computer 2nd sem').doc(editItem.id).update({ name: update, roll: rollUpdate })
      console.warn(update)
      fetchData();
    } catch (error) {
      console.log(error)
    }
  }

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

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error('Error reading file:', err);
      }
    }
  };

  const uploadToFirestore = async () => {
    try {
      const collectionRef = firestore().collection('Student Data').doc('Computer Branch').collection('Computer 2nd sem'); // Replace 'your_collection_name' with your collection name

      DData.forEach((item) => {
        const rollNo = item.roll.toString(); // Assuming Roll_No is a string
        collectionRef.doc(rollNo).set({ ...item, roll: rollNo }); // Set Roll_No both as document ID and a field
      });
      fetchData();
      Alert.alert('Data Added !', 'Your Data has been successfully added to Database(2nd SEM)');
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "600", color: 'black' }}>Computer Branch</Text>
      </View>
      < FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <View style={{ justifyContent: 'center' }}>
              <Text>{index + 1}.</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <Text>Name: {item.name}</Text>
              <Text>Roll: {item.roll}</Text>
              

            </View>
            
            <View style={{ flexDirection: 'row',justifyContent:'flex-end',flex:1 }}>
              <TouchableOpacity 
                style={{backgroundColor:'#7420ff',padding:10,borderRadius:20,marginRight:10}}
              onPress={() => {
                setEditItem(item);
                setUpdate(item.name);
                setRollUpdate(item.roll);
                setEdit(true);
              }}>
              <Text style={{color:'#fff'}}>
                Update
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteData(item)} style={{backgroundColor:'#7420ff',padding:10,borderRadius:20,alignItems:'flex-end'}}>
              <Text style={{color:'#fff'}}>Delete</Text>
              </TouchableOpacity>
            </View>

            <Modal transparent={true} visible={edit}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

                <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 18, shadowColor: 'black', elevation: 50 }}>
                  <TouchableOpacity
                    style={{ alignItems: 'flex-end', paddingBottom: 30 }}
                    onPress={() => setEdit(false)}
                  >
                    <View style={{ borderWidth: 1, padding: 7, borderRadius: 10, backgroundColor: 'white', }}>
                      <Text style={{ fontSize: 15, fontWeight: '900' }}>X</Text>
                    </View>
                  </TouchableOpacity>

                  <View style={{ borderWidth: 2, borderRadius: 20, marginBottom: 10, paddingRight: 100 }}>
                    <TextInput
                      placeholder="Name"
                      value={update}
                      onChangeText={setUpdate}
                    />
                  </View>
                  <View style={{ borderWidth: 2, borderRadius: 20, marginBottom: 10, paddingRight: 100 }}>
                    <TextInput
                      placeholder="roll"
                      value={rollUpdate}
                      onChangeText={setRollUpdate}

                    />
                  </View>
                  <View style={{ padding: 20, alignItems: 'center' }}>
                    <TouchableOpacity
                      style={{ backgroundColor: "#7420ff", borderRadius: 50 }}
                      onPress={updates}

                    >
                      <View style={{ padding: 20 }}>
                        <Text style={{ color: '#fff' }}>Update Details</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                </View>

              </View>
            </Modal>
          </View>

        )}
        

      />
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ padding: 20, backgroundColor: '#7420ff', borderRadius: 50, paddingHorizontal: 20 }}
          onPress={() => setShow(true)}
        >
          <Text style={{ color: '#fff' }}>
            Add More Students
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20, backgroundColor: '#7420ff', borderRadius: 50 }}
          onPress={() => setShowExcel(true)}
        >
          <Text style={{ color: '#fff' }}>
            Add Students using Excel
          </Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} visible={show}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

          <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 18, shadowColor: 'black', elevation: 50 }}>
            <TouchableOpacity
              style={{ alignItems: 'flex-end', paddingBottom: 30 }}
              onPress={() => setShow(false)}
            >
              <View style={{ borderWidth: 1, padding: 7, borderRadius: 10, backgroundColor: 'white', }}>
                <Text style={{ fontSize: 15, fontWeight: '900' }}>X</Text>
              </View>
            </TouchableOpacity>


            <View style={{ borderWidth: 2, borderRadius: 20, marginBottom: 10, paddingRight: 100 }}>
              <TextInput placeholder="Enter student name" onChangeText={(text) => setName(text)} />
            </View>
            <View style={{ borderWidth: 2, borderRadius: 20, marginBottom: 10, paddingRight: 100 }}>
              <TextInput placeholder="Enter student Roll" onChangeText={(text) => setRoll(text)} keyboardType='numeric' />
            </View>

            <View style={{ padding: 20, alignItems: 'center' }}>
              <TouchableOpacity
                style={{ backgroundColor: "#7420ff", borderRadius: 50 }}
                onPress={addData}
              >
                <View style={{ padding: 20 }}>
                  <Text style={{ color: '#fff' }}>ADD Students</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal transparent={true} visible={showExcel}>

<View style={{ flex: 1 }}>

  <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 18, shadowColor: 'black', elevation: 50 }}>
    <TouchableOpacity
      style={{ alignItems: 'flex-end', paddingBottom: 30 }}
      onPress={() => setShowExcel(false)}
    >
      <View style={{ borderWidth: 1, padding: 7, borderRadius: 10, backgroundColor: 'white', }}>
        <Text style={{ fontSize: 15, fontWeight: '900' }}>X</Text>
      </View>
    </TouchableOpacity>
    <View style={{ padding: 16 }}>
      <ScrollView style={{ marginTop: 20 }}>
        {DData.length > 0 && (
          DData.map((item, index) => (
            <View style={{ flexDirection: 'row', borderWidth: 1, paddingBottom: 10 }}>
              <View style={{ justifyContent: 'center' }}>
                <Text>{index + 1}.</Text>
              </View>
              <View style={{ paddingHorizontal: 5 }}>
                <Text>Name: {JSON.stringify(item.name)}</Text>
                <Text>Roll: {JSON.stringify(item.roll)}</Text>
              </View>
            </View>
          ))
        )}
        <Button title="Pick Excel File" onPress={pickExcelFile} />
        <Button title="Upload to Firestore" onPress={uploadToFirestore} disabled={DData.length === 0} />
      </ScrollView>
    </View>

  </View>
</View>
</Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
    flexDirection: 'row'
  },
});

export default SecondSemAddData;
