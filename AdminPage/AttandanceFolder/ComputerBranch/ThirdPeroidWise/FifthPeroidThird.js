import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';

const FifthPeroidThird = () => {
    const [color, setColor] = useState('')
    const [data, setData] = useState([]);
    const [dataAttendence, setDataAttendance] = useState([])

    const [text, setText] = useState([])

    const [bool, setBool] = useState(false)

    const today = new Date();
    const day = (today.getDay()-2).toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    const dateString = `${year}-${month}-${day}`;

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        //fetching Data
        try {
            const data = await firestore().collection('Student Data').doc('Computer Branch').collection('Computer 3rd sem').get()
            const items = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(items)

            // const string = JSON.stringify(items)

        }
        catch (error) {
            console.log(error)
        }
    }

    const updating = async (itemId) => {
        try {
            const docRef = firestore().collection('Student Data').doc('Computer Branch').collection('Computer 3rd sem').doc(itemId);
            await docRef.update({ boolean: bool })
            // console.warn(text)
            fetchData()

        } catch (error) {
            console.error(error);
        }
    };

    const adding = async () => {
        try {
            try {
                // Retrieve data from the "Computer" collection
                const computerData = await firestore().collection('Student Data').doc('Computer Branch').collection('Computer 3rd sem').get();
            
                // Iterate through each document in the "Computer" collection
                computerData.forEach(async (doc) => {
                  try {
                    // Get the ID and other data of the current document
                    const computerDocId = doc.id;
                    // it will always be used in obects cause you are callinig data of docs
                    const { name, boolean,roll } = doc.data();
            
                    // Addind data according to the date  attandence -> computer Branch -> computer 6th sem -> date 
                    //(date will be todays cause we used todays date) -> computer 6th sem 2nd -> Roll number
                    const docRef = firestore().collection('Attandence').doc('Computer Branch')
                      .collection('Computer 3rd sem').doc(dateString)
                      .collection('Peroid 5').doc(computerDocId);
            
                    // Set data under the document in "computer 6th sem 2nd" subcollection
                    await docRef.set({
                      name: name,
                      boolean: boolean,
                      roll: roll
                    });
                    console.log(`Attendance added successfully for document with ID: ${computerDocId}`);
                  } catch (error) {
                    console.error('Error adding attendance:', error);
                  }
                });
                console.warn('Data Added in DB')
        
              } catch (error) {
                console.warn(error);
              }
        }
        catch (error) {
            console.warn(error);
          }}

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', margin: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: '900' }}>
                    Computer Attendence
                </Text>
            </View>
            <View style={{ alignItems: 'center', margin: 10, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ paddingHorizontal: 20 }}>
                    Semester: 6th (Peroid :5)
                </Text>
                <Text style={{ paddingHorizontal: 20 }}>
                    Date: {dateString}
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (

                    <View style={{
                        padding: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ccc',
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: item.boolean ? 'lightgreen' : 'red'
                    }}>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ justifyContent: 'center' }}>
                                <Text>{index + 1}.</Text>
                            </View>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text>Name: {item.name}</Text>
                                <Text>Roll: {item.roll}</Text>
                            </View>

                            <Button title='Present' onPress={() => { setBool(true); updating(item.id); setText(item.id) }} />

                            <Button title='Absent' onPress={() => { setBool(false); updating(item.id); }} />
                        </View>
                    </View>
                )}

            />
            <View style={{ justifyContent: "center", alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ padding: 20, backgroundColor: "blue", marginBottom: 20, borderRadius: 40, marginHorizontal: 20 }}
                    onPress={() => adding()}
                >
                    <Text style={{ color: '#fff' }}>
                        Submit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ padding: 20, backgroundColor: "blue", marginBottom: 20, borderRadius: 40, marginHorizontal: 20 }}
                >
                    <Text style={{ color: '#fff' }}>
                        Reset
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default FifthPeroidThird;