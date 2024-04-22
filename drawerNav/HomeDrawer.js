import React, { useState, useRoute } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';


const HomeDrawer = () => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 15, color: 'orange' }}>This is the first Page after Login Successfully</Text>
    </View>
  );
};


export default HomeDrawer;