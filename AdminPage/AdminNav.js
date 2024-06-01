import React from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AdminHome from './AdminHome';

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import AttendenceMain from './AttendenceMain';
import CustomDrawer from './CustomDrawer';
import Sessional from './Sessional';

const Drawer = createDrawerNavigator();

const AdminPage = () => {

  return (
    <Drawer.Navigator initialRouteName='Home'
      drawerContent={props => <CustomDrawer{...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#7420ff',
        drawerInactiveBackgroundColor: '#fff',
        drawerActiveTintColor: '#fff',
      
      }}>
      <Drawer.Screen name = "Home" component={AdminHome} />
      <Drawer.Screen name ="Sessional" component={Sessional}/> 
      <Drawer.Screen name = 'Attendence'  component={AttendenceMain} />
      
    </Drawer.Navigator>
  );
};


export default AdminPage;