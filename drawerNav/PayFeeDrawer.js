import React, { useState } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import WebView from 'react-native-webview';

const Drawer = createDrawerNavigator();


const PayFeeDrawer = () =>{
    return(
    
        <LinearGradient colors={['#FFFFFF', '#f6f6f6']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'row' }}>
        <WebView
       source={{uri:'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm'}}
       style={{flex:1}}
        
        />
         </LinearGradient>
    
    )
}

export default PayFeeDrawer;