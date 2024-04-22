import React from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Lib from './Lib';
import AdminHome from './AdminHome';
import StudentData from './StudentData'

import AttendenceMain from './AttendenceMain';
import logout from './logout';

const Drawer = createDrawerNavigator();

const AdminPage = () => {

  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name = "Home" component={AdminHome} />
      <Drawer.Screen name ="Library" component={Lib}/> 
      <Drawer.Screen name = 'Attendence'  component={AttendenceMain} />
      
    </Drawer.Navigator>
  );
};


export default AdminPage;