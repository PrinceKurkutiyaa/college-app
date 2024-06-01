//CreateAccount.js

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
  Alert,
  ActivityIndicator,
  Image,TouchableOpacity
} from 'react-native';
import styles from '../style/styles'; //Have an external file in style folder
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Picker} from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Create = props => {
  const [name, setName] = useState('');
  const [password, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [roll, setRoll] = useState('');
  const [no, setNo] = useState('');
  const [show, setShow] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState('');

  const [rollError, setRollError] = useState(false);
  const [textInput, setTextInput] = useState(false);

  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);

  const [nameError, setNameError] = useState(false);
  const [passwordError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [noError, setNoError] = useState(false);

  //function for auth using phnnumber
  const VerifyNo = async () => {
    {
      !name ? setNameError(true) : setNameError(false);
    }
    {
      !password ? setPassError(true) : setPassError(false);
    }
    {
      !email ? setEmailError(true) : setEmailError(false);
    }
    {
      !roll ? setRollError(true) : setRollError(false);
    }
    if (no.length !== 10) {
      setNoError(true);
    } else {
      setEmailError(false);
    }

    if (!name || !password || !email || !no || !roll) {
      return false;
    }

    const number = '+91' + no;

    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      setConfirm(response);
      console.log(response);
      const id = response.user.uid;
      console.log('User UID:', id);

      if (response) {
        await firestore()
          .collection('Users Login data')
          .doc(id)
          .set({name, password, email, no, roll, Branch: selectedBranch});
        console.log('Data Added');
        //sending verification link
        await auth().currentUser.sendEmailVerification();
        Alert.alert(
          'Link Sended',
          'Please verify your account a link sended on your gmail!!',
        );
        // const response = await auth().signInWithPhoneNumber(number)
      }
    } catch (error) {
      console.warn(error);
    }
  };
  //for verify buttn
  function button() {
    if (no.length === 10) {
      setTextInput(true);
      setButton(true);
    } else {
      setButton(false);
    }

    //Confirmation of OTP
  }
  // async function confirmOTP() {
  //   try {
  //     const userCredential= await confirm.confirm(code);
  //     const { user } = userCredential;
  //     const uid = user.uid;
  //     setUID(uid)
  //     console.log('User UID:', uid);
  //     if(userCredential){
  //       console.warn('Account created Successfully')
  //       CreateAccount();
  //     }
  //   } catch (error) {
  //     console.warn(error)
  //   }
  // }
  return (
    <ScrollView>
    <LinearGradient colors={['#FFFFFF', '#f6f6f6']} style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          padding: 40,
          
        }}>
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
            Username:
          </Text>
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
              placeholder=" Username"
              onChangeText={text => setName(text)}
            />
          </View>
          {nameError ? (
            <Text style={{color: 'red'}}>Please enter vaild username</Text>
          ) : null}

          <View style={{}}>
            <Text
              style={{
                color: 'black',
                fontSize: 11,
                paddingBottom: 3,
                fontFamily: 'monospace',
                letterSpacing: 1,
              }}>
              {' '}
              Password:
            </Text>
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
                style={{
                  flex: 1,
                  color: 'white',
                }}
                placeholder="Password"
                secureTextEntry={!show}
                onChangeText={text => setPass(text)}
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
          </View>
          {passwordError ? (
            <Text style={{color: 'red'}}>Please enter valid password</Text>
          ) : null}
        </View>
        <View style={{}}>
          <Text
            style={{
              color: 'black',
              fontSize: 11,
              paddingBottom: 3,
              fontFamily: 'monospace',
              letterSpacing: 1,
            }}>
            {' '}
            Roll no:
          </Text>
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
              <Icon name="id-card" style={{fontSize: 20, color: '#00ff66'}} />
            </View>
            <TextInput
              style={{flex: 1, color: 'white'}}
              placeholder="Roll number"
              onChangeText={text => setRoll(text)}
              keyboardType="numeric"
            />
            <View style={{}}>
              <Picker
                selectedValue={selectedBranch}
                style={{width: 180, color: 'white'}}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedBranch(itemValue)
                }>
                <Picker.Item label="Select a Branch" />
                <Picker.Item label="Computer" value="Computer" />
                <Picker.Item label="Electronics" value="Electronics" />
                <Picker.Item label="Electrical" value="Electrical" />
                <Picker.Item label="Mechanical" value="Mechanical" />
                <Picker.Item label="Plastic" value="Plastic" />
              </Picker>
            </View>
          </View>
        </View>

        {rollError ? (
          <Text style={{color: 'red'}}>Please enter valid Roll number</Text>
        ) : null}

        <View style={{}}>
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
              <Icons name="email" style={{fontSize: 24, color: '#00ff66'}} />
            </View>
            <TextInput
              style={{
                flex: 1,
                color: 'white',
              }}
              placeholder=" Enter Email"
              onChangeText={text => setEmail(text)}
            />
            </View>
            {emailError ? (
              <Text style={{color: 'red'}}>Please enter valid email</Text>
            ) : null}
          
          <Text
            style={{
              color: 'black',
              fontSize: 11,
              paddingBottom: 3,
              fontFamily: 'monospace',
              letterSpacing: 1,
            }}>
            {' '}
            Enter Mobile no:
          </Text>
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
              <Icon name="phone" style={{fontSize: 25, color: '#00ff66'}} />
            </View>
            <TextInput
              style={{
                flex: 1,
                color: 'white',
              }}
              placeholder=" Enter Mobile No."
              onChangeText={text => setNo(text)}
            />
          </View>
          {noError ? (
            <Text style={{color: 'red'}}>Please enter valid mobile number</Text>
          ) : null}
          {/* {       //used for textinput for confirmation
            textInput ? <View>       
              <TextInput style={{
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 10,
                marginTop:20,
                padding:15,
                marginHorizontal:130
                 }}
                placeholder=' Enter OTP'
                onChangeText={(text) => setCode(text)}
              />
            </View> : null
          }
          {     // used for verify button
            Button ? <View style={styles.mainLogin}>
              <TouchableHighlight
                onPress={confirmOTP}
                underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
                style={{ borderRadius: 5, margin: 20 }}>
                <View style={style.button}>
                  <Text style={{ color: '#fff' }}>Verify OTP</Text>
                </View>
              </TouchableHighlight>
              </View> : null
          } */}
        </View>
        <View style={{paddingTop:20,}}>
          <TouchableHighlight
            onPress={() => VerifyNo()}
            underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
            style={{borderWidth:1,borderColor:'#00ff66',justifyContent:'center',alignItems:'center',borderRadius:30}}>
            <View style={{padding:20}}>
              <Text style={{ color:'#00ff66',letterSpacing:1}} >CREATE ACCOUNT</Text>
            </View>
          </TouchableHighlight>
          </View>
      </View>
    </LinearGradient>
    </ScrollView>
  );
};
export default Create; // change accoding to your file name
