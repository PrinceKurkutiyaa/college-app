import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './stackNav/MainNavigator';
import MainDrawer from './drawerNav/MainDrawer';
import { NavigationContainer } from '@react-navigation/native';
import CoursesMainNavigation from './drawerNav/CousesMainNavigation';
import AdminNav from './AdminPage/AdminNav';
import CalenderTry from './AdminPage/CalenderTry/CalenderTry';


const App = () => {
  return (
   
      <NavigationContainer independent={true}>     
          <MainNavigator/>  
      </NavigationContainer>
    
  )
}
export default App;