import React from 'react';
import {Text,View} from "react-native"
import WebView from 'react-native-webview';

const ComputerQues = () => {
    return(
        <View style={{ flex:1}}>
          <WebView
           source={{ uri:'https://drive.google.com/drive/folders/1TaGFoUvRR4Lw0qW7ymRcA-0_w9gvzQ_z?usp=sharing' }}
           style={{ flex:1}}
         />
         
        </View>
    )
}

export default ComputerQues;