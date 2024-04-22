import React, { useEffect, useState } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';     //Have an external file in style folder 
import { NavigationContainer } from '@react-navigation/native';
import NewForm from './formPractice/Login';
import Form from './formPractice/Create';
import Forget from './formPractice/Forget';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();



const App = () => {

  const [data,setData]=useState([])

  const APIdata = async () =>{
    const url="http://10.0.2.2:3000/users";
    let result = await fetch(url);
    const API = await result.json();
    setData(API);
    
  }
  useEffect(()=>{
    APIdata();
  },[])
  return (
    <View style={{ flex: 1 }}>
      {
          data.length ?
            data.map((item)=><View style={{borderColor:'orange',borderWidth:4}}><Text>name:{item.name}</Text>
                                  <Text>Email:{item.email}</Text></View>)
          :null
      }
    </View>
  );
};

export default App;