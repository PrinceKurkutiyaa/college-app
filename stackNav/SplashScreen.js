// SplashScreen.js

import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  return (
    <LinearGradient colors={['#FFFFFF', '#f6f6f6']} style={styles.container}>
      <Image
        source={require('../collegeData/collegeBackgroundPNG.png')}
        style={styles.image}
      />
      <View>
        <Text style={{fontWeight:'900',paddingTop:50,fontSize:20,color:'#383d41'}}>
            Welcome to Chhotu Ram Polytechnic
        </Text>
      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
