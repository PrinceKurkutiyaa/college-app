import React, { useState, useRoute } from 'react'
import { View, Text, Button, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from '../style/styles';
import AboutDrawer from './AboutDrawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



const HomeDrawer = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Home')}
          underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
          style={{ borderRadius: 5 }}>
          <View style={styles.customDrawer}>
            <Text style={{ color: '#000' }}>Home</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View>
        <TouchableOpacity
          onPress={() =>navigation.navigate('Edit Profile')}
        >
          <View style={{ backgroundColor: '#d7d1de', padding: 10, marginHorizontal:10,marginVertical:8, borderRadius: 10, borderWidth: 2 }}>
            <Text style={{ color: '#000', alignItems: 'center', fontSize: 15 }}>Courses</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('About')}
          underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
          style={{ borderRadius: 5 }}>
          <View style={{
            backgroundColor: '#d7d1de',
            padding: 10,
            marginHorizontal: 10,
            marginVertical: 5,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'black'
          }}>
            <Text style={{ color: '#000' }}>About</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View>
        <TouchableOpacity
          onPress={() =>navigation.navigate('Edit Profile')}
        >
          <View style={{ backgroundColor: '#d7d1de', padding: 10, marginHorizontal:10,marginVertical:8, borderRadius: 10, borderWidth: 2 }}>
            <Text style={{ color: '#000', alignItems: 'center', fontSize: 15 }}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Login')}
          underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
          style={{ borderRadius: 5 }}>
          <View style={{ backgroundColor: '#d7d1de', padding: 15, margin: 60, borderRadius: 10, borderWidth: 2 }}>
            <Text style={{ color: '#000', alignItems: 'center', fontSize: 15 }}>Log out</Text>
          </View>
        </TouchableHighlight>
      </View>
      

    </View>
  );
};


export default HomeDrawer;