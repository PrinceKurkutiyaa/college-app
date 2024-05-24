import React, { useState } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';

const Drawer = createDrawerNavigator();


const AboutDrawer = () =>{
    return(
    
        <LinearGradient colors={['#FFFFFF', '#f6f6f6']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'row' }}>
         <Text style={{color:'black',fontSize:11,paddingBottom:3,fontFamily:'monospace',letterSpacing:1,}}>This app is currently developing by</Text>
         <Text style={{color:'black',fontSize:12,paddingBottom:3,fontFamily:'monospace',letterSpacing:1,fontWeight:'900'}}> PRINCE</Text>
         </LinearGradient>
    
    )
}

export default AboutDrawer;