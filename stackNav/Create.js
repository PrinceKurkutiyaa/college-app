import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, ScrollView, TextInput, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import styles from '../style/styles';     //Have an external file in style folder 
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Create = (props) => {
  const [name, setName] = useState("")
  const [password, setPass] = useState("")
  const [email, setEmail] = useState("")
  const [roll, setRoll] = useState("")
  const [no, setNo] = useState('')


  const [rollError, setRollError] = useState(false)
  const [textInput, setTextInput] = useState(false)

  const [code, setCode] = useState('')
  const [confirm, setConfirm] = useState(null)

  const [nameError, setNameError] = useState(false)
  const [passwordError, setPassError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [noError, setNoError] = useState(false)


  //function for auth using phnnumber
  const VerifyNo = async () => {

    {
      !name ? setNameError(true) : setNameError(false)
    } {
      !password ? setPassError(true) : setPassError(false)
    } {
      !email ? setEmailError(true) : setEmailError(false)
    }
    {
      !roll ? setRollError(true) : setRollError(false)
    }
    if (no.length !== 10) {
      setNoError(true)
    } else {
      setEmailError(false)
    }

    if (!name || !password || !email || !no || !roll) {
      return false
    }

    const number = '+91' + no;

    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);
      setConfirm(response)
      console.log(response)
      const id = response.user.uid;

      console.log('User UID:', id);

      if (response) {
        await firestore().collection('collegedata').doc(id).set({ name, password, email, no, roll })
        console.log('Data Added')
        //sending verification link
        await auth().currentUser.sendEmailVerification();
        console.warn("Verification link sent please check you INBOX")
        // const response = await auth().signInWithPhoneNumber(number)     
      }

    } catch (error) {
      console.warn(error)
    }

  }
  //for verify buttn
  function button() {
    if (no.length === 10) {
      setTextInput(true)
      setButton(true)
    }
    else {
      setButton(false)
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

  <ScrollView style={{ backgroundColor: 'lavender' }}>

    <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: 'lavender', bottom: 150, padding: 10 }} >
        <ImageBackground source={require('../collegeData/collegeBackgroundPNG.png')} style={{ height: 230, width: 230, opacity: 0.4, left: 60, top: 330, flex: 1 }} />
        <Text style={{ fontSize: 20, }}> Username:</Text>
        <TextInput style={{ justifyContent: 'center', alignContent: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10 }}
          placeholder=' Username'
          onChangeText={(text) => setName(text)} />

        {
          nameError ? <Text style={{ color: 'red' }}>Please enter vaild username</Text> : null
        }

        <View style={{}} >
          <Text style={{ fontSize: 20, }}> Password:</Text>
          <TextInput style={{ justifyContent: 'flex-end', alignContent: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10, }}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={(text) => setPass(text)} />
        </View>

        {
          passwordError ? <Text style={{ color: 'red' }}>Please enter valid password</Text> : null
        }

        <View style={{}} >
          <Text style={{ fontSize: 20, }}> Roll no:</Text>
          <TextInput style={{ justifyContent: 'flex-end', alignContent: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10, }}
            placeholder='Roll number'
            onChangeText={(text) => setRoll(text)} 
            keyboardType='numeric'
            />
        </View>

        {
          rollError ? <Text style={{ color: 'red' }}>Please enter valid Roll number</Text> : null
        }

        <View style={{}}>
          <Text style={{ fontSize: 20, }}> Enter Email:</Text>
          <TextInput style={{ justifyContent: 'center', alignContent: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10, }}
            placeholder=' Enter Email'
            onChangeText={(text) => setEmail(text)}
          />
          {
            emailError ? <Text style={{ color: 'red' }}>Please enter valid email</Text> : null
          }

          <Text style={{ fontSize: 20, }}> Enter Mobile no:</Text>

          <TextInput style={{ justifyContent: 'center', alignContent: 'center', borderColor: 'black', borderWidth: 2, borderRadius: 10 }}
            placeholder=' Enter Mobile No.'
            onChangeText={(text) => setNo(text)}
          />
          {
            noError ? <Text style={{ color: 'red' }}>Please enter valid mobile number</Text>
              : null
          }
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
        <View style={styles.mainLogin}>
          <TouchableHighlight
            onPress={() => { VerifyNo(); }}
            underlayColor="rgba(800, 500, 255, 0.5)" // Set the color when the button is pressed
            style={{ borderRadius: 5, }}>
            <View style={styles.button}>
              <Text style={{ color: '#fff' }}>Create Account</Text>
            </View>
          </TouchableHighlight>
        </View>

    </View>
  </ScrollView>

  );
};
export default Create;    // change accoding to your file name

