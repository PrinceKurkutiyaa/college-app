import {
  Button,
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const PastAttandenceFifthSemMechanical = () => {
  const [selected, setSelected] = useState('');
  const [show, setShow] = useState(false);
  const today = new Date();
  const day = today.getDate();

  const navigation = useNavigation();
  const fetch = () => {
    if (selected) {
      navigation.navigate('5th Sem Find Attandence', {selectedDate: selected});
    } else {
      Alert.alert(
        'Please select a date',
        'Kindly press on the date which you want data from!',
      );
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#f6f6f6']}
      style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <View
        style={{
            margin:10,
            borderWidth: 1,
            borderColor: '#00ff66',
            shadowColor: '#00dc00',
            elevation: 40,
            shadowOpacity: 10,
            borderRadius: 60,
            backgroundColor: '#383d41',
        }}>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true},
          }}
          theme={{
            arrowColor: '#00ff66',
            selectedDayBackgroundColor: '#00ff66',
            todayButtonTextColor: '#00ff66',
            calendarBackground:'#383d41',
            monthTextColor: '#00ff66',
            dayTextColor: 'white',
            todayTextColor: '#00ff66',
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <TouchableOpacity style={{}} onPress={() => fetch()}>
          <View
            style={{
              alignItems: 'center',
              borderWidth: 3,
              borderColor: '#00ff66',
              shadowColor: '#00dc00',
              elevation: 40,
              shadowOpacity: 10,
              borderRadius: 30,
              padding: 20,
              backgroundColor: '#383d41',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Find Data</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default PastAttandenceFifthSemMechanical;
