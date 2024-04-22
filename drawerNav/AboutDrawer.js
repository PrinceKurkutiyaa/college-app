import React, { useState } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const AboutDrawer = () =>{
    return(
    < View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'row' }}>
         <Text >This app is currently developing by</Text>
         <Text style={{fontWeight:'bold',}}> PRINCE</Text>
    </View>
    )
}

export default AboutDrawer;