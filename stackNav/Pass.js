import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, ScrollView, TextInput, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import styles from '../style/styles';     //Have an external file in style folder 




const Pass = (props) => {
  
  const [no, setNo] = useState('')
  const [display, setDisplay] = useState(false)

  const clear = () => {
    return (
      
      setNo(''),
      setDisplay(false)
    );
  };

  return (
   
    <View style={{ flex: 1, backgroundColor: 'lavender' }}>
      
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'lavender',padding:10 }} >
      <ImageBackground source={require('../collegeData/collegeBackgroundPNG.png')} style={{height:230,width:230,opacity:0.4,left:60,top:140,flex:1}}/>
        
     
        <Text style={{ fontSize: 20 }}> Enter Mobile no:</Text>
        <TextInput style={{ justifyContent: 'flex-start', alignContent: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10 }}
          placeholder=' Enter Mobile Number'
          onChangeText={(text) => setNo(text)}
        />
      </View>

      
      <View style={styles.mainLogin}>
        <View style={{}}>
        <TouchableHighlight
          onPress={() => setDisplay(true)}
          underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
          style={{ borderRadius: 5, margin:10}}>
          <View style={style.button}>
            <Text style={{ color: 'white' }}>Send OTP</Text>
          </View>
        </TouchableHighlight>
        </View>

        <View style={{}}>
          <TouchableHighlight
            onPress={clear}
            underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
            style={{ borderRadius: 5,margin:10}}>
            <View style={style.button}>
              <Text style={{ color: '#fff' }}></Text>
            </View>
          </TouchableHighlight>
        </View>
       
      </View>
      
      <View>
        {
          display ? <View>
            <Text style={{fontSize:20}}>Your number is :{no}</Text>
          </View> : null
        }
      </View>

      
    </View>
    
  );
};
const style = StyleSheet.create({

  button: {
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  flex: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lavender',
    flex: 1,
    //  flexDirection: 'row'
  }


})
export default Pass;    // change accoding to your file name

