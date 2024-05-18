import React, { useState, useRoute } from 'react'
import { View, Text, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <View style = {{justifyContent:'center',alignItems:'center',padding:20,paddingBottom:20}}>
      <Image
        source={require('../collegeData/collegeBackground.jpg')}
        style={{height:160,width:160}}
      />
      </View>
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props}>
  
    </DrawerItemList>
   </DrawerContentScrollView>

   <View style={{alignItems:'center',borderTopWidth:1,borderColor:'#CCC'}}>
        <TouchableHighlight
          onPress={()=>navigation.navigate("Login")}
          underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
          style={{ borderRadius: 5 }}>
          <View style={{  padding: 15, margin: 30,backgroundColor:'#7420ff',borderRadius:30}}>
            <Text style={{color:'#fff',fontSize:15}}>Log out</Text>
          </View>
        </TouchableHighlight>
      </View>
   </View>


  );
};


export default CustomDrawer;