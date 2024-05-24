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
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#f6f6f6']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{}}>
        <View
          style={{
            paddingVertical: 50,
            paddingTop:60,
            paddingHorizontal: 20,
            shadowColor: '#00dc00',
            elevation: 40,
            shadowOpacity: 100,
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
