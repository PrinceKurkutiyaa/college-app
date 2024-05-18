import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, ScrollView, TextInput, TouchableHighlight, ImageBackground, TouchableOpacity } from 'react-native';     //Have an external file in style folder 
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from '../style/styles';


const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [fill, setFill] = useState(1)

  const [nameError, setNameError] = useState(false)
  const [passError, setPassError] = useState(false)

  const [hide, setHide] = useState(false)
  const [show, setShow] = useState(false)

  //Admin Details

  const adminLogin = 'princeadmin';
  const adminPass = '123456'

  //const[data,setData] = useState([])
  const navigation = useNavigation();

  const handlePress = async () => {
    {
      !email ? setNameError(true) : setNameError(false)
    }
    {
      !password ? setPassError(true) : setPassError(false)
    }
    if (!email || !password) {
      return false
    }

    //Authentication   
    if (fill === 1) {
      const isUserLogin = await auth().signInWithEmailAndPassword(email, password)
      console.log(isUserLogin)
      if (isUserLogin.user.emailVerified) {

        console.warn('Student Login Successfully')
        navigation.navigate('MainDrawer');
      }
    } else if (fill === 2) {

      if (email === adminLogin && password == adminPass) {
        console.warn("Admin check")
        navigation.navigate('Admin Page')
      } else {
        console.warn("Admin Not FOUND")
      }
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'lavender', }}>
      <View style={{
        flex: 1.6,
        padding: 60,
        backgroundColor: 'Lavender',
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
      }}>

        <ImageBackground source={require('../collegeData/collegeBackgroundPNG.png')} style={{ height: 230, width: 230, opacity: 0.4, left: 20, top: 120, flex: 1 }} />
        <View style={{ flexDirection: 'row', borderColor: 'black', borderWidth: 2, borderRadius: 10 }}>
          <View style={{ justifyContent: "center", alignItems: 'center', marginHorizontal: 5 }}>
            <Icon name='user' style={{ fontSize: 20, }} />
          </View>
          <TextInput style={{ paddingRight:120 }}
            placeholder='Email'
            value={email}
            onChangeText={(value) => setEmail(value)}
          />

        </View>
        {
          nameError ? <Text style={{ color: 'red' }}>Please enter valid Email</Text> : null
        }

        <View style={{ paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ flex: 1, borderColor: 'black', borderWidth: 2, borderRadius: 10, flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', alignItems: "center", marginHorizontal: 5 }}>
                <Icons name="key" style={{ fontSize: 20 }} />
              </View>
              <TextInput
                style={{paddingRight:120}}
                placeholder='Password'
                secureTextEntry={!show}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />

              <TouchableOpacity
                style={{marginHorizontal:10,}}
                onPress={() => setShow(!show)}
              >
                {show ?
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon name='eye' style={{ fontSize: 20 }} />
                  </View>
                  :
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon name='eye-slash' style={{ fontSize: 20 }} />
                  </View>
                }
              </TouchableOpacity>
            </View>
          </View>

          {/* Error message text */}
          {passError &&
            <Text style={{ color: 'red' }}>Please enter a valid password</Text>
          }
        </View>
      </View>
      < View style={{ alignItems: 'center', margin: 5, paddingBottom: 20 }}>
        <TouchableHighlight
          onPress={() => props.navigation.navigate('Forget Password')}
          underlayColor='rgba(800,500,255,0.5)'
        >
          <View>
            <Text>Forget Password?</Text>
          </View>
        </TouchableHighlight>
      </View>
      {/*  //for student   */}
      <View style={{ flexDirection: 'row', paddingBottom: 20, alignItems: 'center', paddingBottom: 40 }}>
        <View style={{ paddingHorizontal: 50 }} >
          <TouchableOpacity
            onPress={() => setFill(1)}
            underlayColor='rgba(800,500,255,0.5)'
          >
            <View style={{ flexDirection: 'row' }}>
              {
                fill === 1 ?
                  <View style={{ backgroundColor: '#7420ff', alignItems: 'center', justifyContent: 'center', height: 30, width: 130, borderRadius: 30 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Login as Student</Text>
                  </View>
                  : <Text style={{ fontWeight: 'bold' }}>Login as Student</Text>
              }
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setFill(2)}
            underlayColor='rgba(800,500,255,0.5)'
          >
            {
              fill === 2 ?
                <View style={{ backgroundColor: '#7420ff', alignItems: 'center', justifyContent: 'center', height: 30, width: 130, borderRadius: 30 }}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Login as Admin</Text>
                </View>
                : <Text style={{ fontWeight: 'bold' }} >Login as Admin</Text>
            }
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.flex}>
        <TouchableHighlight
          onPress={handlePress}
          underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
          style={{ borderRadius: 5 }}>
          <View style={styles.button}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 17 }}>Login</Text>
          </View>
        </TouchableHighlight>
        <View style={{ flexDirection: 'row', paddingTop: 50 }}>
          <Text > Don't have account? </Text>
          <TouchableHighlight
            onPress={() => props.navigation.navigate('Create an Account')}
            underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
            style={{ borderRadius: 5 }}>
            <View>
              <Text style={{ color: 'black' }}>Signup</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>

  );
};

export default Login;