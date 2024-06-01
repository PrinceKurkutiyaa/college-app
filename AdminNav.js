import React from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AdminHome from './AdminPage/AdminHome';

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import AttendenceMain from './AdminPage/AttendenceMain';
import CustomDrawer from './AdminPage/CustomDrawer';
import Sessional from './AdminPage/Sessional';

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