import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Button,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const StudentData = () => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [update, setUpdate] = useState('')
  const [rollUpdate, setRollUpdate] = useState('')
  const [boolean,setBoolean] = useState(false)

  const [data, setData] = useState([])
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null)

  const [edit, setEdit] = useState(false)
  const [show, setShow] = useState(false)

  const navigation = useNavigation();

  useEffect(() => {
    
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const snapshot = await firestore().collection('Computer').get();
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //  console.log(items)
      setData(items)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const addData = async () => {
    //Adding Data in Database
    const data = await firestore().collection('Computer').doc(roll).set({ name, roll, boolean })
    console.warn("Data Added")
    fetchData()
  };
  const deleteData = async (item) => {
    try {
      await firestore().collection('Computer').doc(item.id).delete();
      console.log(item.id);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  const updates = async () => {
    try {
      await firestore().collection('Computer').doc(editItem.id).update({ name: update, roll: rollUpdate })
      console.warn(update)
      fetchData();
    } catch (error) {
      console.log(error)
    }
  }
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
                style={{backgroundColor:'blue',padding:10,borderRadius:20,marginRight:10}}
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

              <TouchableOpacity onPress={() => deleteData(item)} style={{backgroundColor:'blue',padding:10,borderRadius:20,alignItems:'flex-end'}}>
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
                      style={{ backgroundColor: "blue", borderRadius: 50 }}
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
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{ padding: 20, backgroundColor: 'blue', borderRadius: 50 }}
          onPress={() => setShow(true)}
        >
          <Text style={{ color: '#fff' }}>
            Add More Students
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
                style={{ backgroundColor: "blue", borderRadius: 50 }}
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

export default StudentData;
