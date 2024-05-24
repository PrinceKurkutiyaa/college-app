// App.js

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './stackNav/MainNavigator';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  // Request permissions for iOS
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  // Get the FCM token
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('Token =>', token);
  };

  useEffect(() => {
    requestUserPermission();
    getToken();

    // Handle foreground messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.warn('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;