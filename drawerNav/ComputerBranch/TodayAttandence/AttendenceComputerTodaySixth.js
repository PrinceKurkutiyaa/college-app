import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const AttendenceComputerTodaySixth = () => {
  const navigation = useNavigation();
  const [peroid, setPeroid] = useState('1');

  const submit = () => {
    if (peroid == 1) {
      navigation.navigate('6th Sem Computer 1st Peroid');
      console.warn('1');
    } else if (peroid == 2) {
      navigation.navigate('6th Sem Computer 2nd Peroid');
      console.warn('2');
    } else if (peroid == 3) {
      navigation.navigate('6th Sem Computer 3rd Peroid');
      console.warn('3');
    } else if (peroid == 4) {
      navigation.navigate('6th Sem Computer 4th Peroid');
      console.warn('4');
    } else if (peroid == 5) {
      navigation.navigate('6th Sem Computer 5th Peroid');
    } else if (peroid == 6) {
      navigation.navigate('6th Sem Computer 6th Peroid');
      console.warn('6');
    } else if (peroid == 7) {
      navigation.navigate('First Period Attandence');
    } else {
      console.warn('Not Wokring MF');
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#f6f6f6']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          paddingVertical: 50,
          paddingTop: 60,
          paddingHorizontal: 20,
          shadowColor: '#00dc00', // Shadow color
          shadowOffset: { width: 0, height: 2 }, // Added for iOS
          shadowOpacity: 0.8, // Corrected for iOS, value between 0 and 1
          shadowRadius: 10, // Added for iOS
          elevation: 40, // For Android
          borderWidth: 1,
          borderColor: '#00dc00',
          borderRadius: 10,
          backgroundColor: '#383d41',
          opacity: 1,
        }}>
        <View style={{paddingTop: 15, paddingHorizontal: 10}}>
          <Text style={{fontSize: 17, color: 'white'}}> Select Period :</Text>
        </View>
        <View style={{borderWidth: 3, borderColor: '#00dc00', borderRadius: 20}}>
          <Picker
            selectedValue={peroid}
            style={{width: 200, color: 'white'}}
            onValueChange={itemValue => setPeroid(itemValue)}>
            <Picker.Item label="1st " value="1" />
            <Picker.Item label="2nd" value="2" />
            <Picker.Item label="3rd" value="3" />
            <Picker.Item label="4th" value="4" />
            <Picker.Item label="5th" value="5" />
            <Picker.Item label="6th" value="6" />
          </Picker>
        </View>
      </View>
      <View>
        <TouchableOpacity style={{padding: 20}} onPress={() => submit()}>
          <View
            style={{
                alignItems: 'center',
                borderColor: '#00dc00', borderWidth:3,
                borderRadius: 20,
                paddingHorizontal: 40,
                paddingVertical:20,
                backgroundColor:'#383d41', elevation: 40, shadowOpacity: 10,shadowColor: '#00dc00'
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Find</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default AttendenceComputerTodaySixth;
