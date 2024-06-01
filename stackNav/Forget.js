import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  Alert,Image
} from 'react-native';
import styles from '../style/styles'; //Have an external file in style folder
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const Forget = props => {
  const [email, setEmail] = useState('');

  const forget = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Password Reset',
        'A password reset link has been sent to your email.',
      );
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#f6f6f6']}
      style={{flex:1,justifyContent:'center',alignItems:'center'}}
      >
      <View style={{padding:10}}>
      <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 20,
          }}>
          <Image
            source={require('../collegeData/collegeBackgroundPNG.png')}
            style={{height: 200, width: 200}}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 11,
              paddingBottom: 3,
              fontFamily: 'monospace',
              letterSpacing: 1,
            }}>
            EMAIL ADDRESS
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderRadius: 1,
            borderBottomColor: '#f4f6f7',
            backgroundColor: '#383d41',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Icon name="user" style={{fontSize: 25, color: '#00ff66'}} />
          </View>
          <TextInput
            style={{flex: 1, color: 'white'}}
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={{paddingTop: 8}}>
          <TouchableHighlight
            onPress={forget}
            underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
            style={{
              borderWidth: 1,
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              backgroundColor: '#232629',
            }}>
            <View style={{padding: 10, paddingHorizontal: 70}}>
              <Text style={{color: 'white', letterSpacing: 1}}>
                RESET PASSWORD
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </LinearGradient>
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
  },
});
export default Forget; // change accoding to your file name
