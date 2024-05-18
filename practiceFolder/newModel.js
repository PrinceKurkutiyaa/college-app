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
import LinearGradient from 'react-native-linear-gradient';

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
    <LinearGradient colors={['#3a4851', '#1f272d', '#000000']} style={{flex:1}}>
      <View style={{
        flex: 1.6,
        padding: 40,
        justifyContent:'center',
        alignContent: 'center'
      }}>
          <View>
            <Text style={{color:'#f4f6f7',fontSize:11,paddingBottom:3,fontFamily:'monospace',letterSpacing:1}}>
              EMAIL ADDRESS
            </Text>
          </View>
        <View style={{ flexDirection: 'row',borderBottomWidth:2, borderRadius:1,borderBottomColor:'#f4f6f7',backgroundColor:'#485156',opacity:0.5 }}>
          <View style={{ justifyContent: "center", alignItems: 'center', marginHorizontal: 10 }}>
            <Icon name='user' style={{ fontSize: 25,color:'#00ff66' }} />
          </View>
          <TextInput style={{flex:1,color:'white' }}
            placeholder='Email'
            value={email}
            onChangeText={(value) => setEmail(value)}
          />

        </View>
        {
          nameError ? <Text style={{ color: 'red' }}>Please enter valid Email</Text> : null
        }

        <View style={{ paddingTop: 10 }}>
          <View>
            <Text style={{color:'#f4f6f7',fontSize:11,paddingBottom:3,fontFamily:'monospace',letterSpacing:1}}>
              PASSWORD
            </Text>
          </View>
          
            <View style={{ flexDirection: 'row',borderBottomWidth:2, borderRadius:1,borderBottomColor:'#f4f6f7',backgroundColor:'#485156',opacity:0.5  }}>
              <View style={{ justifyContent: 'center', alignItems: "center", marginHorizontal: 10 }}>
                <Icons name="key" style={{ fontSize: 25 ,color:'#00ff66'}} />
              </View>
              <TextInput
                style={{flex:1,color:'white'}}
                placeholder='Password'
                secureTextEntry={!show}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />

              <TouchableOpacity
                style={{}}
                onPress={() => setShow(!show)}
              >
                {show ?
                  <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingRight:10}}>
                    <Icon name='eye' style={{ fontSize: 25,color:'#00ff66' }} />
                  </View>
                  :
                  <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingRight:10}}>
                    <Icon name='eye-slash' style={{ fontSize: 25,color:'#00ff66' }} />
                  </View>
                }
              </TouchableOpacity>
            </View>
          

          {/* Error message text */}
          {passError &&
            <Text style={{ color: 'red' }}>Please enter a valid password</Text>
          }
        </View>
      
      < View style={{ alignItems: 'center', margin: 5, padding:10 }}>
        <TouchableHighlight
          onPress={() => props.navigation.navigate('Forget Password')}
          underlayColor='rgba(800,500,255,0.5)'
        >
          <View>
            <Text style={{color:'#f4f6f7',fontSize:11,paddingBottom:3,fontFamily:'monospace',letterSpacing:1}}>FORGET YOUR PASSWORD?</Text>
          </View>
        </TouchableHighlight>
      </View>
      {/*  //for student   */}
      <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>
        <View style={{ margin:15}} >
          <TouchableOpacity
            onPress={() => setFill(1)}
            underlayColor='rgba(800,500,255,0.5)'
          >
            <View style={{ flexDirection: 'row' }}>
              {
                fill === 1 ?
                  <View style={{ paddingHorizontal:30,paddingVertical:10, borderRadius: 30 ,borderColor:'#00dc00',borderWidth:1}}>
                    <Text style={{ color: '#00ff66'}}>STUDENT</Text>
                  </View>
                  : 
                  <View style={{paddingHorizontal:30,paddingVertical:10, }}>
                  <Text style={{ color:'white'}}>STUDENT</Text>
                  </View>
              }
            </View>
          </TouchableOpacity>
        </View>
        <View style={{margin:15}}>
          <TouchableOpacity
            onPress={() => setFill(2)}
            underlayColor='rgba(800,500,255,0.5)'
          >
            {
              fill === 2 ?
                <View style={{paddingHorizontal:30,paddingVertical:10, borderRadius: 30 ,borderColor:'#00dc00',borderWidth:1 }}>
                  <Text style={{ color: '#00ff66' }}>ADMIN</Text>
                </View>
                : 
                <View style={{paddingHorizontal:30,paddingVertical:10, }}>
                <Text style={{ color:'white'}} >ADMIN</Text>
                </View>
            }
          </TouchableOpacity>
        </View>

      </View>

      <View style={{}}>
        <TouchableHighlight
          onPress={handlePress}
          underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
          style={{borderWidth:1,borderColor:'#00dc00',justifyContent:'center',alignItems:'center',borderRadius:30 }}>
          <View style={{padding:10}}>
            <Text style={{ color: '#00ff66', fontWeight: 'bold', fontSize: 17 }}>LOG IN</Text>
          </View>
        </TouchableHighlight>
        <View style={{ paddingTop: 20,justifyContent:'center',alignItems:'center' }}>
          <Text style={{ color:'white'}}  > Don't have account yet? </Text>
          <View style={{paddingTop:20}}>
          <TouchableHighlight
            onPress={() => props.navigation.navigate('Create an Account')}
            underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
            style={{borderWidth:1,borderColor:'white',justifyContent:'center',alignItems:'center',borderRadius:30}}>
            <View style={{padding:10,paddingHorizontal:80}}>
              <Text style={{ color:'white',letterSpacing:1}} >CREATE ACCOUNT</Text>
            </View>
          </TouchableHighlight>
          </View>
        </View>
      </View>

      </View>
    </LinearGradient>

  );
};

export default Login;