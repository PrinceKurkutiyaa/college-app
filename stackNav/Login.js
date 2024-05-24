import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  Modal,
} from 'react-native'; //Have an external file in style folder
import {NavigationContainer, useLinkProps} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {createDrawerNavigator} from '@react-navigation/drawer';
import styles from '../style/styles';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fill, setFill] = useState(1);

  const [nameError, setNameError] = useState(false);
  const [passError, setPassError] = useState(false);

  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);

  const [acitivity, setActivity] = useState(false);

  //Admin Details

  const adminLogin = 'princeadmin';
  const adminPass = '123456';

  //const[data,setData] = useState([])
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const handlePress = async () => {
    {
      !email ? setNameError(true) : setNameError(false);
    }
    {
      !password ? setPassError(true) : setPassError(false);
    }
    if (!email || !password) {
      return false;
    }
    if (fill === 2) {
      if (email === adminLogin && password == adminPass) {
        setActivity(true);
        setTimeout(() => {
          setActivity(false);
          navigation.navigate('Admin Page');
          Alert.alert('Welcome Admin!!', 'We would like to have you!');
        }, 5000);
      } else {
        Alert.alert(
          'Admin Not found',
          'Sorry admin not found please check again',
        );
      }
    }

    try {
      if (fill === 1) {
        const isUserLogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        console.log(isUserLogin);
        if (isUserLogin.user.emailVerified) {
          setActivity(true);
          setTimeout(() => {
            setActivity(false);
            Alert.alert('Welcome Student!!', 'We would like to have you!');
            navigation.navigate('MainDrawer');
          }, 5000);
        } else {
          Alert.alert('Warning', 'Some error occured try again later');
        }
      }
    } catch (error) {
      // Handling specific Firebase authentication errors
      switch (error.code) {
        case 'auth/invalid-email':
          Alert.alert('Login Failed', 'The email address is badly formatted.');
          break;
        case 'auth/user-disabled':
          Alert.alert(
            'Login Failed',
            'The user corresponding to the given email has been disabled.',
          );
          break;
        case 'auth/user-not-found':
          Alert.alert(
            'Login Failed',
            'There is no user corresponding to the given email.',
          );
          break;
        case 'auth/wrong-password':
          Alert.alert(
            'Login Failed',
            'The password is invalid or the user does not have a password.',
          );
          break;
        default:
          Alert.alert('Login Failed', 'Please check your Email and Password.');
      }
    }
  };
  return (
    <SafeAreaProvider>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
    <LinearGradient colors={['#FFFFFF', '#f6f6f6']} style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          padding: 40,
        }}>
        <Modal visible={acitivity} transparent={true}>
          {acitivity ? (
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <ActivityIndicator size={60} color={'black'} />
            </View>
          ) : null}
        </Modal>
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
        {nameError ? (
          <Text style={{color: 'red'}}>Please enter valid Email</Text>
        ) : null}

        <View style={{paddingTop: 10}}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 11,
                paddingBottom: 3,
                fontFamily: 'monospace',
                letterSpacing: 1,
              }}>
              PASSWORD
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
              <Icons name="key" style={{fontSize: 25, color: '#00ff66'}} />
            </View>
            <TextInput
              style={{flex: 1, color: 'white'}}
              placeholder="Password"
              secureTextEntry={!show}
              value={password}
              onChangeText={text => setPassword(text)}
            />

            <TouchableOpacity style={{}} onPress={() => setShow(!show)}>
              {show ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: 10,
                  }}>
                  <Icon name="eye" style={{fontSize: 25, color: '#00ff66'}} />
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: 10,
                  }}>
                  <Icon
                    name="eye-slash"
                    style={{fontSize: 25, color: '#00ff66'}}
                  />
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Error message text */}
          {passError && (
            <Text style={{color: 'red'}}>Please enter a valid password</Text>
          )}
        </View>

        <View style={{alignItems: 'center', margin: 5, padding: 5}}>
          <TouchableHighlight
            onPress={() => props.navigation.navigate('Forget Password')}
            underlayColor="rgba(800,500,255,0.5)">
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 11,
                  fontFamily: 'monospace',
                  letterSpacing: 1,
                }}>
                FORGET YOUR PASSWORD?
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        {/*  //for student   */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{margin: 15}}>
            <TouchableOpacity
              onPress={() => setFill(1)}
              underlayColor="rgba(800,500,255,0.5)">
              <View style={{flexDirection: 'row'}}>
                {fill === 1 ? (
                  <View
                    style={{
                      paddingHorizontal: 30,
                      paddingVertical: 10,
                      borderRadius: 30,
                      borderColor: '#00dc00',
                      borderWidth: 1,
                    }}>
                    <Text style={{color: '#00ff66'}}>STUDENT</Text>
                  </View>
                ) : (
                  <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
                    <Text style={{color: '#00ff66'}}>STUDENT</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>

          <View style={{margin: 15}}>
            <TouchableOpacity
              onPress={() => setFill(2)}
              underlayColor="rgba(800,500,255,0.5)">
              {fill === 2 ? (
                <View
                  style={{
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    borderRadius: 30,
                    borderColor: '#00dc00',
                    borderWidth: 1,
                  }}>
                  <Text style={{color: '#00ff66'}}>ADMIN</Text>
                </View>
              ) : (
                <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
                  <Text style={{color: '#00ff66'}}>ADMIN</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{}}>
          <TouchableHighlight
            onPress={handlePress}
            underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
            style={{
              borderWidth: 1,
              borderColor: '#00dc00',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
            }}>
            <View style={{padding: 10}}>
              <Text
                style={{color: '#00ff66', fontWeight: 'bold', fontSize: 17}}>
                LOG IN
              </Text>
            </View>
          </TouchableHighlight>
          <View
            style={{
              paddingTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                letterSpacing: 1,
                fontSize: 12,
                fontFamily: 'monospace',
              }}>
              {' '}
              Don't have account yet?{' '}
            </Text>
            <View style={{paddingTop: 8}}>
              <TouchableHighlight
                onPress={() => props.navigation.navigate('Create an Account')}
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
                    CREATE ACCOUNT
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        {/* <View style={{justifyContent:'center',alignItems:'center'}}>
      <View >
        <TouchableOpacity>
          <View style={{paddingBottom:50}}>
            <Text style={{color:'white',fontSize:11,fontFamily:'monospace',letterSpacing:1}}>
              SETUP INSTRUCTIONS
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:11,fontFamily:'monospace',letterSpacing:1}}>
              CAN'T LOG IN? EMAIL SUPPORT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      </View> */}
      </View>
    </LinearGradient>
    </ScrollView>
    </SafeAreaProvider>
  );
};

export default Login;
