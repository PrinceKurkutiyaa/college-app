import React, { useState } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';     //Have an external file in style folder 
import { NavigationContainer } from '@react-navigation/native';
import NewForm from './formPractice/Login';
import Form from './formPractice/Create';
import Forget from './formPractice/Forget';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
const App = () => {

  return (
    <View style={{ flex: 1 }}>
           


      <NavigationContainer>
      
       
        <stack.Navigator>
       
          <stack.Screen name='Login' component= {NewForm} options={{headerStyle:{backgroundColor:'lavender'}  }}/>         
          <stack.Screen name='Create an Account' component={Form}   options={{headerStyle:{backgroundColor:'lavender'}   }}/>                   
          <stack.Screen name='Forget Password'   component={Forget}  options={{headerStyle:{backgroundColor:'lavender'} }}/>      
          
                        
        </stack.Navigator>
      </NavigationContainer>



    </View>
  );
};



export default App;