import React, { useEffect, useState } from 'react'
import { View, Text, Button, Image, ImageBackground,TextInput } from 'react-native';     //Have an external file in style folder 
import { NavigationContainer } from '@react-navigation/native';
import NewForm from './formPractice/Login';
import Form from './formPractice/Create';
import Forget from './formPractice/Forget';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();



const App = () => {
  const[name,setName]=useState('')
  const[age,setAge]=useState('')
  const[email,setEmail]=useState('')

  const [nameError,setNameError]= useState(false)
  const [ageError,setAgeError]= useState(false)
  const [emailError,setEmailError]= useState(false)


  const APIdata = async () =>{
    
      !name ? setNameError(true):setNameError(false)  
      !age ? setAgeError(true):setAgeError(false)
      !email ? setEmailError(true):setEmailError(false)
      
      if(!name || !email ||!age){
        return false
      }
    const url="http://10.0.2.2:3000/users";
    let result = await fetch(url,{
      method:'Post',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,age,email})
    });
    const API = await result.json();
      if(API){
        console.warn('Data added')
      }
  }
  
  return (
    <View style={{ flex: 1 }}>
     <TextInput
      value={name}
      placeholder="Enter name"
      onChangeText={(text)=>setName(text)}    
     /> 
     {
      nameError ?<Text style={{color:'red'}}>Please enter valid name</Text>:null
     }   
     <TextInput
      value={age}
      placeholder="Enter age"
      onChangeText={(text)=>setAge(text)}    
     /> 
     {
      ageError ?<Text style={{color:'red'}}>Please enter valid age</Text>:null
     }       
     <TextInput
      value={email}
      placeholder="Enter email"
      onChangeText={(text)=>setEmail(text)}    
     />
     {
      emailError ?<Text style={{color:'red'}}>Please enter valid email</Text>:null
     }          
     <Button title="save data" onPress={APIdata}/>
    </View>
  );
};



export default App;