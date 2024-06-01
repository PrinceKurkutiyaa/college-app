import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const SessionalMarks = () =>{ 
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('');

const navigation = useNavigation();

const check = () => {

    if (selectedBranch === "Computer") {
        if (selectedSemester == 1) {
            console.warn("1st sem")
            navigation.navigate('1st Sem Computer Sessional Student')
        }
        else if (selectedSemester == 2) {
            console.warn("2nd sem")
            navigation.navigate('2nd Sem Computer Sessional Student')
        }
        else if (selectedSemester == 3) {
            console.warn("3rd sem")
            navigation.navigate('3rd Sem Computer Sessional Student')
        }
        else if (selectedSemester == 4) {
            console.warn("4th sem")
            navigation.navigate('4th Sem Computer Sessional Student')
        }
        else if (selectedSemester == 5) {
            console.warn("5th sem")
            navigation.navigate('5th Sem Computer Sessional Student')
        }
        else if (selectedSemester == 6) {
            console.warn("workin")
            navigation.navigate('6th Sem Computer Sessional Student')
        }
    }
   else if(selectedBranch === "Electronics"){
    if (selectedSemester == 1) {
        console.warn("1st sem")
        navigation.navigate('1st Sem Electronics Sessional')
    }
    else if (selectedSemester == 2) {
        console.warn("2nd sem")
        navigation.navigate('2nd Sem Electronics Sessional')
    }
    else if (selectedSemester == 3) {
        console.warn("3rd sem")
        navigation.navigate('3rd Sem Electronics Sessional')
    }
    else if (selectedSemester == 4) {
        console.warn("4th sem")
        navigation.navigate('4th Sem Electronics Sessional')
    }
    else if (selectedSemester == 5) {
        console.warn("5th sem")
        navigation.navigate('5th Sem Electronics Sessional')
    }
    else if (selectedSemester == 6) {
        console.warn("workin")
        navigation.navigate('6th Sem Electronics Sessional')
    }

   } 
   else if(selectedBranch === "Plastic"){
    if (selectedSemester == 1) {
        console.warn("1st sem")
        navigation.navigate('1st Sem Plastic Sessional')
    }
    else if (selectedSemester == 2) {
        console.warn("2nd sem")
        navigation.navigate('2nd Sem Plastic Sessional')
    }
    else if (selectedSemester == 3) {
        console.warn("3rd sem")
        navigation.navigate('3rd Sem Plastic Sessional')
    }
    else if (selectedSemester == 4) {
        console.warn("4th sem")
        navigation.navigate('4th Sem Plastic Sessional')
    }
    else if (selectedSemester == 5) {
        console.warn("5th sem")
        navigation.navigate('5th Sem Plastic Sessional')
    }
    else if (selectedSemester == 6) {
        console.warn("workin")
        navigation.navigate('6th Sem Plastic Sessional')
    }

   } 
   else if(selectedBranch === "Mechanical"){
    if (selectedSemester == 1) {
        console.warn("1st sem")
        navigation.navigate('1st Sem Mechanical Sessional')
    }
    else if (selectedSemester == 2) {
        console.warn("2nd sem")
        navigation.navigate('2nd Sem Mechanical Sessional')
    }
    else if (selectedSemester == 3) {
        console.warn("3rd sem")
        navigation.navigate('3rd Sem Mechanical Sessional')
    }
    else if (selectedSemester == 4) {
        console.warn("4th sem")
        navigation.navigate('4th Sem Mechanical Sessional')
    }
    else if (selectedSemester == 5) {
        console.warn("5th sem")
        navigation.navigate('5th Sem Mechanical Sessional')
    }
    else if (selectedSemester == 6) {
        console.warn("workin")
        navigation.navigate('6th Sem Mechanical Sessional')
    }

   } 
   else if(selectedBranch === "Electrical"){
    if (selectedSemester == 1) {
        console.warn("1st sem")
        navigation.navigate('1st Sem Electrical Sessional')
    }
    else if (selectedSemester == 2) {
        console.warn("2nd sem")
        navigation.navigate('2nd Sem Electrical Sessional')
    }
    else if (selectedSemester == 3) {
        console.warn("3rd sem")
        navigation.navigate('3rd Sem Electrical Sessional')
    }
    else if (selectedSemester == 4) {
        console.warn("4th sem")
        navigation.navigate('4th Sem Electrical Sessional')
    }
    else if (selectedSemester == 5) {
        console.warn("5th sem")
        navigation.navigate('5th Sem Electrical Sessional')
    }
    else if (selectedSemester == 6) {
        console.warn("workin")
        navigation.navigate('6th Sem Electrical Sessional')
    }

   } 
   else if(selectedBranch === "Civil"){
    if (selectedSemester == 1) {
        console.warn("1st sem")
        navigation.navigate('1st Sem Civil Sessional')
    }
    else if (selectedSemester == 2) {
        console.warn("2nd sem")
        navigation.navigate('2nd Sem Civil Sessional')
    } 
    else if (selectedSemester == 3) {
        console.warn("3rd sem")
        navigation.navigate('3rd Sem Civil Sessional')
    }
    else if (selectedSemester == 4) {
        console.warn("4th sem")
        navigation.navigate('4th Sem Civil Sessional')
    }
    else if (selectedSemester == 5) {
        console.warn("5th sem")
        navigation.navigate('5th Sem Civil Sessional')
    }
    else if (selectedSemester == 6) {
        console.warn("workin")
        navigation.navigate('6th Sem Civil Sessional')
    }

   }
    else {
        console.warn('Not Wokring MF')
    }

}


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

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
picker: {

    width: 200,
    marginBottom: 20,
},
selectedValue: {
    fontSize: 18,
},
});

export default SessionalMarks;