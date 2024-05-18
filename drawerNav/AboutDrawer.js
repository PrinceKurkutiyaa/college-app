import React, { useState } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';

const Drawer = createDrawerNavigator();


const AboutDrawer = () =>{
    return(
    
        <LinearGradient colors={['#c8b1ff', '#8e49ff', '#6518bf']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'row' }}>
         <Text style={{color:'white'}}>This app is currently developing by</Text>
         <Text style={{fontWeight:'bold',color:'white'}}> PRINCE</Text>
         </LinearGradient>
    
    )
}

export default AboutDrawer;