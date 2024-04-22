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
import ComputerBranch from './ComputerBranch';
import CoursesMainNavigation from './CousesMainNavigation';
import Attendence from './Attendence';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainDrawer = () => {
  return (

    <Drawer.Navigator initialRouteName='Home'
      drawerContent={props => <CustomDrawer{...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#7420ff',
        drawerInactiveBackgroundColor: '#fff',
        drawerActiveTintColor: '#fff'
      }}>
        
      <Drawer.Screen name="Home" component={HomeDrawer}/>
      <Drawer.Screen name="Courses" component={Course}/>
      <Drawer.Screen name = "Attendence" component={Attendence}/>
      <Drawer.Screen name="Marksheet" component={Marksheet}/>
      <Drawer.Screen name="About" component={AboutDrawer} />
      
      
      
    
    </Drawer.Navigator>


  );
}
export default MainDrawer;
