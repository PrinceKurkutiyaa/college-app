import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Computer from '../CousesStackNav/Computer';
import Civil from '../CousesStackNav/Civil';
import Electrical from '../CousesStackNav/Electrical';
import Elecronics from '../CousesStackNav/Electronics';
import Mechanical from '../CousesStackNav/Mechanical';
import Plastic from '../CousesStackNav/Plastic';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CoursesMainNavigation = () => {


    return (
       
            <Stack.Navigator>
                
            </Stack.Navigator>
        


    )
}
export default CoursesMainNavigation;