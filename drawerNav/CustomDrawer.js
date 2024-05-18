import React, { useState, useRoute } from 'react'
import { View, Text, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import styles from '../style/styles';
import AboutDrawer from './AboutDrawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from  "react-native-vector-icons/FontAwesome"


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth().signOut(); // Sign out the user using Firebase Authentication
      // Optionally, navigate to the login screen or any other screen after logout
      navigation.navigate('Login'); // Navigate to the login screen
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };
  return (
    <LinearGradient colors={['#FFFFFF', '#7c7c7c', '#000000']} style={{flex:1}}>
      <View style = {{justifyContent:'center',alignItems:'center',padding:20,paddingBottom:20}}>
      <Image
        source={require('../collegeData/collegeBackgroundPNG.png')}
        style={{height:160,width:160}}
      />
      </View>
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props}>
  
    </DrawerItemList>
   </DrawerContentScrollView>

   <View style={{justifyContent:'center',alignItems:'center',borderTopWidth:1,borderColor:'#CCC'}}>
        <TouchableHighlight
          onPress={handleLogout}
          underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
          style={{ borderRadius: 5 }}>
          <View style={{  padding: 15, margin: 30,backgroundColor:'red',borderRadius:30,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:17,fontWeight:'bold'}}>LOG OUT</Text>
            <Icon name="sign-out" style ={{fontSize:30,paddingHorizontal:10,color:'white'}}/>
          </View>
        </TouchableHighlight>
      </View>
   </LinearGradient>


  );
};


export default CustomDrawer;