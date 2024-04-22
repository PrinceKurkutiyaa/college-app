import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { FlatList } from "react-native-gesture-handler";

const StudentData = () => {

    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const data = firestore().collection('Computer');

    const addData = async () => {
                    //Adding Data in Database
        const data = await firestore().collection('Computer').doc(roll).set({ name, roll })
        //Retrieveing Data from database
        
    };

    const showData =() =>{
        console.warn('Fetched')
        const usersCollection = firestore().collection('Computer')     
        const users=usersCollection.get().then(querySnapshot => {
                querySnapshot.forEach(Roll => {
                    // Access each document's ID and data
                    console.log('Roll no : ', Roll.id, 'User data: ', Roll.data());
                });
            })
            .catch(error => {
                console.error('Error fetching users: ', error);
            });
    }
    const partiularfield = () =>{
        const usersCollection = firestore().collection('Computer')
              usersCollection.get().then(querySnapshot => {
            querySnapshot.forEach(Roll => {           
                // Access the data of each document
                 const data = Roll.data();
                 // Access a particular field within the data object
                const fieldValue = data.name; //change .name according to your needs
                console.log('Field Value:', fieldValue);
            });
        })
        .catch(error => {
            console.error('Error fetching users: ', error);
        });
    }
    return (
        <View>
            <TextInput style={{ borderWidth: 2, padding: 20, margin: 20 }}
                placeholder="Enter student name"
                onChangeText={(text) => setName(text)} />


            <TextInput style={{ borderWidth: 2, padding: 20, margin: 20 }}
                placeholder="Enter student roll number"
                onChangeText={(text) => setRoll(text)} />
            <Button title='Add data' onPress={addData} />
            <Button title='SHow data' onPress={showData} />
            <Button title= 'particular field' onPress={partiularfield}/>
           

        </View>
    )
}
export default StudentData;