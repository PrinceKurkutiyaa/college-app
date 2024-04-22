import React, { useState } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';     //Have an external file in style folder 
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Create from './Create';
import Forget from './Forget';
import AdminNav from '../AdminPage/AdminNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainDrawer from '../drawerNav/MainDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Computer from '../CousesStackNav/Computer';
import Civil from '../CousesStackNav/Civil';
import Electrical from '../CousesStackNav/Electrical';
import Elecronics from '../CousesStackNav/Electronics';
import Mechanical from '../CousesStackNav/Mechanical';
import Plastic from '../CousesStackNav/Plastic';
import AttendenceMain from '../AdminPage/TakeAttendence';
import AttendenceComputer from '../AdminPage/AttendenceComputer';
import AddStudent from '../AdminPage/AddStudent';
import StudentData from '../AdminPage/StudentData';
import TakeAttendence from '../AdminPage/TakeAttendence';
import CalenderTry from '../AdminPage/CalenderTry/CalenderTry';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => {

  return (
    <View style={{ flex: 1 }}>          
        <Stack.Navigator>    
                                          {/*These are used for LOGIN */}
          <Stack.Screen name='Login' component= {Login} options={{headerStyle:{backgroundColor:'lavender'}  }}/>         
          <Stack.Screen name='Create an Account' component={Create}   options={{headerStyle:{backgroundColor:'lavender'}   }}/>                   
          <Stack.Screen name='Forget Password'   component={Forget}  options={{headerStyle:{backgroundColor:'lavender'} }}/>
          <Stack.Screen name='MainDrawer'        component={MainDrawer}  options={{headerShown:false,headerStyle:{backgroundColor:'lavender'} }}/>  
          <Stack.Screen name="Admin Page"        component={AdminNav} options={{headerShown:false}} />    
          
                                          {/*These are used for COURSES*/}

                <Stack.Screen name='Computer Branch' component={Computer} options={{ headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name='Civil Branch' component={Civil} options={{ headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name='Electrical Branch' component={Electrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name='Electronics Branch' component={Elecronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name='Mechanical Branch' component={Mechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name='Plastic Branch' component={Plastic} options={{ headerStyle: { backgroundColor: 'white' } }} />      

                                         {/*These are used for Attendence */}
                <Stack.Screen name='Attendence Computer' component={AttendenceComputer} options={{ headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name='Add Student' component={AddStudent} options={{ headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name='Student Data' component={StudentData} options={{ headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name='Take Attendence' component={TakeAttendence} options={{ headerStyle: { backgroundColor: 'white' } }} />
                <Stack.Screen name='Calender' component={CalenderTry} options={{ headerStyle: { backgroundColor: 'white' } }} />
                
        </Stack.Navigator>     
    </View>
  );
};



export default MainNavigator;