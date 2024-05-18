import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const AttendanceFirstPage = () => {
  const [selectedBranch, setSelectedBranch] = useState('')
  const [selectedSemester, setSelectedSemester] = useState('')

  const [roll, setRoll] = useState('')

  const navigation = useNavigation();

  const check = () => {
    if (selectedBranch === 'Computer' && selectedSemester == 6) {
      navigation.navigate('Attendence Computer 6th')
    }
    else if (selectedBranch === 'Computer' && selectedSemester == 1){
      navigation.navigate("Attandence Computer 1st")
    }
    else if (selectedBranch === 'Computer' && selectedSemester == 2){
      navigation.navigate("Attandence Computer 2nd")
    }else if (selectedBranch === 'Computer' && selectedSemester == 3){
      navigation.navigate("Attandence Computer 3rd")
    }else if (selectedBranch === 'Computer' && selectedSemester == 4){
      navigation.navigate("Attandence Computer 4th")
     } else if (selectedBranch === 'Computer' && selectedSemester == 5){
        navigation.navigate("Attandence Computer 5th")
      }
    }

  
  return (
    <LinearGradient colors={['#FFFFFF', '#7c7c7c', '#000000']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   
      
      <View style={{}}>
        <View style={{ padding: 100, shadowColor: 'white', elevation: 7, shadowOpacity: 10, borderWidth: 0, borderColor: '#fff',borderRadius:0 }}>
          <View style={{ borderWidth: 2, borderRadius: 40, marginBottom: 20, borderColor: '#00dc00' }}>
            <Picker
              selectedValue={selectedBranch}
              style={{ width: 200, color: 'white' }}
              dropdownIconColor={'white'}
              onValueChange={(itemValue) => setSelectedBranch(itemValue)}
            >
              <Picker.Item label="Select a Branch" />
              <Picker.Item label="Computer" value="Computer" />
              <Picker.Item label="Electronics" value="Electronics" />
              <Picker.Item label="Electrical" value="Electrical" />
              <Picker.Item label="Mechanical" value="Mechanical" />
              <Picker.Item label="Plastic" value="Plastic" />
            </Picker>
          </View>
          <View style={{ borderWidth: 2, borderRadius: 40, marginBottom: 20, borderColor: '#00dc00' }}>
            <Picker
              selectedValue={selectedSemester}
              style={{ width: 200, color: 'white' }}
              onValueChange={(itemValue) => setSelectedSemester(itemValue)}
              dropdownIconColor={'white'}
              
            >
              <Picker.Item label="Select a Semester" />
              <Picker.Item label="1st" value="1" />
              <Picker.Item label="2nd" value="2" />
              <Picker.Item label="3rd" value="3" />
              <Picker.Item label="4th" value="4" />
              <Picker.Item label="5th" value="5" />
              <Picker.Item label="6th" value="6" />
            </Picker>
          </View>
          <View style={{ margin: 20 }}>
            <TouchableOpacity
              onPress={() => check()}
            >
              <View style={{ alignItems: "center", borderWidth: 2, borderColor: '#00dc00', borderRadius: 30, padding: 10 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>
                  Fetch
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      

    </LinearGradient>
  )

}
export default AttendanceFirstPage;