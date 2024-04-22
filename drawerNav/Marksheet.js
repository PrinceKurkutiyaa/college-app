import React from 'react';
import { View,Text,Linking,TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';




const Marksheet = () =>{
    return(
        <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://accounts.digilocker.gov.in/signup/smart_v2' }}
          style={{ flex: 1, }}
        />
      </View>
    )

}


export default Marksheet;