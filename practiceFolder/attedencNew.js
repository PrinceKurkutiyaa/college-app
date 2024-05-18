import { Button, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';


const Attendence = () => {
    const [color, setColor] = useState('')
    const [data, setData] = useState([]);

    const [text, setText] = useState([])

    const [bool, setBool] = useState(false)
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // January is 0!
    const year = today.getFullYear();
    const dateString = `${day}-${month}-${year}`;

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        //fetching Data
        try {

            const computerData = await firestore().collection('Computer').get();

            // Iterate through each document in the "Computer" collection
            computerData.forEach(async (doc) => {
                try {
                    // Get the ID and other data of the current document
                    const computerDocId = doc.id;
                    // it will always be used in obects cause you are callinig data of docs
                    const { name, boolean, roll } = doc.data();

                    // Addind data according to the date  attandence -> computer Branch -> computer 6th sem -> date 
                    //(date will be todays cause we used todays date) -> computer 6th sem 2nd -> Roll number
                    const docRef = firestore().collection('Attandence').doc('Computer Branch')
                        .collection('Computer 6th sem').doc(dateString)
                        .collection(computerDocId)

                     
                    const attendanceRef = firestore().collection('Attandence').doc('Computer Branch')
                        .collection('Computer 6th sem').doc(dateString).collection(computerDocId).doc('Peroid 1');
                    // Get the data of the document under "Attendance" collection
                    const attendanceSnapshot = await attendanceRef.get();
                    const items = attendanceSnapshot.data();
                    setData(items)

                    // Check if the document exists
                    if (attendanceSnapshot.exists) {
                        // Log the data of the document
                        console.log('Attendance data:', attendanceSnapshot.data().roll);
                    } else {
                        console.log('Attendance data for the specified date not found');
                    }
                }
                catch (error) {
                    console.error('Error adding attendance:', error);
                }

            })
            // Reference to the document under "Attendance" collection

        } catch (error) {
            console.error('Error retrieving attendance data:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                <Text style={{ fontSize: 40, fontWeight: '900' }}>Attendence!!</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 40, fontWeight: '300' }}>
                    Computer Branch
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 20, paddingTop: 40 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'lightgreen', padding: 10, borderRadius: 60 }}>

                    </View>
                    <Text>
                        Present
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'red', padding: 10, borderRadius: 60 }}>
                        </View>
                        <Text>
                            Absent
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{ borderWidth: 1, margin: 5 }}>
                    P1
                </Text>
                <Text style={{ borderWidth: 1, margin: 5 }} >
                    P2
                </Text>
                <Text style={{ borderWidth: 1, margin: 5 }}>
                    P3
                </Text>
                <Text style={{ borderWidth: 1, margin: 5 }}>
                    P4
                </Text>

            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.roll}
                renderItem={({ item, index }) => (

                    <View style={{

                        marginHorizontal: 20,
                        borderBottomWidth: 1,
                        borderBottomColor: '#ccc',
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: item.boolean ? 'lightgreen' : 'red',
                        padding: 10
                    }}>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontSize: 17, color: '#fff' }}>{index + 1}.</Text>
                            </View>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 15, color: '#fff' }}>Name: {item.name}</Text>
                                <Text style={{ fontSize: 15, color: '#fff' }}>Roll: {item.roll}</Text>
                            </View>


                        </View>
                    </View>
                )} />
        </View>
    )
}
export default Attendence;