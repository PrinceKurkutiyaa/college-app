import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './HomeDrawer';
import AboutDrawer from './AboutDrawer';
import Login from '../stackNav/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from '../stackNav/MainNavigator';
import CustomDrawer from './CustomDrawer';
import Marksheet from './Marksheet';
import Course from './Course';
import Icon from 'react-native-vector-icons/FontAwesome'
import AttendanceFirstPage from './AttendenceFirstPage';
import QuestionPaper from './QuestionPaper';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainDrawer = () => {
  return (

    <Drawer.Navigator initialRouteName='Home'
      drawerContent={props => <CustomDrawer{...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'tansparent',
        drawerInactiveBackgroundColor: 'transparent',
        drawerActiveTintColor: '#00ff66',
        drawerInactiveTintColor:'white',
      }}
      >

      <Drawer.Screen name="Home" component={HomeDrawer}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home" size={20} color={color} />
          ),
          headerStyle: { backgroundColor: '#FFFFFF', },headerTintColor:'black', headerTitle:'C.R Polytechnic',
        }} />
        
      <Drawer.Screen name="Courses" component={Course} 
      options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="book" size={20} color={color} />
          ),
          headerStyle: { backgroundColor: '#c8b1ff' },headerTintColor:'white'
          
        }} />
      <Drawer.Screen name="Attendence" component={AttendanceFirstPage}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <Icon name="child" size={20} color={color} />
        ),
        headerStyle: { backgroundColor: '#FFFFFF' },headerTintColor:'black'
      }} />
      <Drawer.Screen name = "Question Papers" component={QuestionPaper}
     options={{
      drawerIcon:({focused,color,size})=>(
        <Icon name="book" size={20} color={color} />
      ),
      headerStyle: { backgroundColor: '#c8b1ff' },headerTintColor:'white'
    }}
     />
      <Drawer.Screen name="Marksheet" component={Marksheet} 
       options={{
        drawerIcon: ({ focused, color, size }) => (
          <Icon name="newspaper-o" size={20} color={color} />
        )    
      }} />
      <Drawer.Screen name="About" component={AboutDrawer}
      options={{
       drawerIcon: ({ focused, color, size }) => (
         <Icon name="gamepad" size={20} color={color} />
       ),
       headerStyle: { backgroundColor: '#c8b1ff' },headerTintColor:'white',
     }}
      />
    </Drawer.Navigator>


  );
}
export default MainDrawer;
