import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const AttendanceFirstPage = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  const [roll, setRoll] = useState('');

  const navigation = useNavigation();

  const check = () => {
    if (selectedBranch === 'Computer' && selectedSemester == 6) {
      navigation.navigate('Attendence Computer 6th');
    } else if (selectedBranch === 'Computer' && selectedSemester == 1) {
      navigation.navigate('Attandence Computer 1st');
    } else if (selectedBranch === 'Computer' && selectedSemester == 2) {
      navigation.navigate('Attandence Computer 2nd');
    } else if (selectedBranch === 'Computer' && selectedSemester == 3) {
      navigation.navigate('Attandence Computer 3rd');
    } else if (selectedBranch === 'Computer' && selectedSemester == 4) {
      navigation.navigate('Attandence Computer 4th');
    } else if (selectedBranch === 'Computer' && selectedSemester == 5) {
      navigation.navigate('Attandence Computer 5th');
    }
    else if (selectedBranch === 'Civil' && selectedSemester == 6) {
      navigation.navigate('Attendence Civil 6th');
    } else if (selectedBranch === 'Civil' && selectedSemester == 1) {
      navigation.navigate('Attandence Civil 1st');
    } else if (selectedBranch === 'Civil' && selectedSemester == 2) {
      navigation.navigate('Attandence Civil 2nd');
    } else if (selectedBranch === 'Civil' && selectedSemester == 3) {
      navigation.navigate('Attandence Civil 3rd');
    } else if (selectedBranch === 'Civil' && selectedSemester == 4) {
      navigation.navigate('Attandence Civil 4th');
    } else if (selectedBranch === 'Civil' && selectedSemester == 5) {
      navigation.navigate('Attandence Civil 5th');
    }
    else if (selectedBranch === 'Mechanical' && selectedSemester == 6) {
      navigation.navigate('Attendence Mechanical 6th');
    } else if (selectedBranch === 'Mechanical' && selectedSemester == 1) {
      navigation.navigate('Attandence Mechanical 1st');
    } else if (selectedBranch === 'Mechanical' && selectedSemester == 2) {
      navigation.navigate('Attandence Mechanical 2nd');
    } else if (selectedBranch === 'Mechanical' && selectedSemester == 3) {
      navigation.navigate('Attandence Mechanical 3rd');
    } else if (selectedBranch === 'Mechanical' && selectedSemester == 4) {
      navigation.navigate('Attandence Mechanical 4th');
    } else if (selectedBranch === 'Mechanical' && selectedSemester == 5) {
      navigation.navigate('Attandence Mechanical 5th');
    }
    else if (selectedBranch === 'Plastic' && selectedSemester == 6) {
      navigation.navigate('Attendence Plastic 6th');
    } else if (selectedBranch === 'Plastic' && selectedSemester == 1) {
      navigation.navigate('Attandence Plastic 1st');
    } else if (selectedBranch === 'Plastic' && selectedSemester == 2) {
      navigation.navigate('Attandence Plastic 2nd');
    } else if (selectedBranch === 'Plastic' && selectedSemester == 3) {
      navigation.navigate('Attandence Plastic 3rd');
    } else if (selectedBranch === 'Plastic' && selectedSemester == 4) {
      navigation.navigate('Attandence Plastic 4th');
    } else if (selectedBranch === 'Plastic' && selectedSemester == 5) {
      navigation.navigate('Attandence Plastic 5th');
    }
    else if (selectedBranch === 'Electrical' && selectedSemester == 6) {
      navigation.navigate('Attendence Electrical 6th');
    } else if (selectedBranch === 'Electrical' && selectedSemester == 1) {
      navigation.navigate('Attandence Electrical 1st');
    } else if (selectedBranch === 'Electrical' && selectedSemester == 2) {
      navigation.navigate('Attandence Electrical 2nd');
    } else if (selectedBranch === 'Electrical' && selectedSemester == 3) {
      navigation.navigate('Attandence Electrical 3rd');
    } else if (selectedBranch === 'Electrical' && selectedSemester == 4) {
      navigation.navigate('Attandence Electrical 4th');
    } else if (selectedBranch === 'Electrical' && selectedSemester == 5) {
      navigation.navigate('Attandence Electrical 5th');
    }
    else if (selectedBranch === 'Electronics' && selectedSemester == 6) {
      navigation.navigate('Attendence Electronics 6th');
    } else if (selectedBranch === 'Electronics' && selectedSemester == 1) {
      navigation.navigate('Attandence Electronics 1st');
    } else if (selectedBranch === 'Electronics' && selectedSemester == 2) {
      navigation.navigate('Attandence Electronics 2nd');
    } else if (selectedBranch === 'Electronics' && selectedSemester == 3) {
      navigation.navigate('Attandence Electronics 3rd');
    } else if (selectedBranch === 'Electronics' && selectedSemester == 4) {
      navigation.navigate('Attandence Electronics 4th');
    } else if (selectedBranch === 'Electronics' && selectedSemester == 5) {
      navigation.navigate('Attandence Electronics 5th');
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#f6f6f6']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{}}>
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
          <View
            style={{
              borderWidth: 3,
              borderRadius: 40,
              marginBottom: 20,
              borderColor:'#00dc00',
              backgroundColor:'white'
            }}>
            <Picker
              selectedValue={selectedBranch}
              style={{width: 300, color: 'black'}}
              dropdownIconColor={'black'}
              onValueChange={itemValue => setSelectedBranch(itemValue)}>
              <Picker.Item label="Select a Branch" />
              <Picker.Item label="Computer" value="Computer" />
              <Picker.Item label="Electronics" value="Electronics" />
              <Picker.Item label="Electrical" value="Electrical" />
              <Picker.Item label="Mechanical" value="Mechanical" />
              <Picker.Item label="Plastic" value="Plastic" />
              <Picker.Item label="Civil" value="Civil" />
            </Picker>
          </View>
          <View
            style={{
              borderWidth: 3,
              borderRadius: 40,
              marginBottom: 20,
              borderColor:'#00dc00',
              backgroundColor:'white'
            }}>
            <Picker
              selectedValue={selectedSemester}
              style={{width: 300, color: 'black'}}
              onValueChange={itemValue => setSelectedSemester(itemValue)}
              dropdownIconColor={'black'}>
              <Picker.Item label="Select a Semester" />
              <Picker.Item label="1st" value="1" />
              <Picker.Item label="2nd" value="2" />
              <Picker.Item label="3rd" value="3" />
              <Picker.Item label="4th" value="4" />
              <Picker.Item label="5th" value="5" />
              <Picker.Item label="6th" value="6" />
            </Picker>
          </View>
          <View style={{margin: 20}}>
            <TouchableOpacity onPress={() => check()}>
              <View
                style={{
                  alignItems: 'center',
                  borderWidth:3,
                  borderColor: '#00dc00',
                  borderRadius: 30,
                  padding: 10,
                  backgroundColor:'white'
                }}>
                <Text style={{color: 'black', fontSize: 20}}>Fetch</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
export default AttendanceFirstPage;
