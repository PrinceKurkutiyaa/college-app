import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';

const AttendenceComputer = () => {
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
            const data = await firestore().collection('Computer').get()
            const items = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setData(items)

        }
        catch (error) {
            console.log(error)
        }
    }

    const updating = async (itemId) => {
        try {
            const docRef = firestore().collection('Computer').doc(itemId);
            await docRef.update({ boolean: bool })
            // console.warn(text)
            fetchData()

        } catch (error) {
            console.error(error);
        }
    };
    
    const adding = () =>{
        try{
            const data = firestore().collection('Computer Attandence').doc(dateString).set({present:'1',absent:'0'})
             console.warn('Called')
        }
        catch(error){
            console.warn(error)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', margin: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: '900' }}>
                    Computer Attendence
                </Text>
            </View>
            <View style={{ alignItems: 'center', margin: 10, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ paddingHorizontal: 20 }}>
                    Semester: 6th
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
            <View style={{justifyContent:"center",alignItems:'center',flexDirection:'row'}}>
                <TouchableOpacity
                    style={{ padding:20 , backgroundColor:"blue",marginBottom:20,borderRadius:40,marginHorizontal:20}}
                    onPress={()=>adding()}
                >
                    <Text style={{color:'#fff'}}>
                        Submit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ padding:20 , backgroundColor:"blue",marginBottom:20,borderRadius:40,marginHorizontal:20}}
                >
                    <Text style={{color:'#fff'}}>
                        Reset
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AttendenceComputer;