import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


const AddStudent = () => {
    const [selectedBranch, setSelectedBranch] = useState('Computer');
    const [selcetedSemester, setSelectedSemester] = useState('1')

    const navigation = useNavigation();

    const check = () => {

        if (selectedBranch === "Computer") {
            if (selcetedSemester == 1) {
                console.warn("1st sem")
                navigation.navigate('1st Sem Computer')
            }
            else if (selcetedSemester == 2) {
                console.warn("2nd sem")
                navigation.navigate('2nd Sem Computer')
            }
            else if (selcetedSemester == 3) {
                console.warn("3rd sem")
                navigation.navigate('3rd Sem Computer')
            }
            else if (selcetedSemester == 4) {
                console.warn("4th sem")
                navigation.navigate('4th Sem Computer')
            }
            else if (selcetedSemester == 5) {
                console.warn("5th sem")
                navigation.navigate('5th Sem Computer')
            }
            else if (selcetedSemester == 6) {
                console.warn("workin")
                navigation.navigate('Student Data')
            }
        }
        else {
            console.warn('Not Wokring MF')
        }

    }


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 20, padding: 10, marginBottom: 20 }}>
                <Text style={{ fontSize: 17 }}> Select a Branch:</Text>
                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 20 }}>
                    <Picker
                        selectedValue={selectedBranch}
                        style={{ width: 200 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedBranch(itemValue)}
                    >

                        <Picker.Item label="Computer" value="Computer" />
                        <Picker.Item label="Electronics" value="Electronics" />
                        <Picker.Item label="Electrical" value="Electrical" />
                        <Picker.Item label="Mechanical" value="Mechanical" />
                        <Picker.Item label="Plastic" value="Plastic" />
                    </Picker>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 20, padding: 10 }}>
                <Text style={{ fontSize: 17 }}> Select Semester:</Text>
                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 20 }}>
                    <Picker
                        selectedValue={selcetedSemester}
                        style={{ width: 200 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedSemester(itemValue)}
                    >
                        <Picker.Item label="1st " value="1" />
                        <Picker.Item label="2nd" value="2" />
                        <Picker.Item label="3rd" value="3" />
                        <Picker.Item label="4th" value="4" />
                        <Picker.Item label="5th" value="5" />
                        <Picker.Item label="6th" value="6" />

                    </Picker>
                </View>
            </View>
            <TouchableOpacity
                style={{ backgroundColor: '#7420ff', padding: 20, borderRadius: 20, marginTop: 20 }}
                onPress={() => check()}>

                <Text style={{ color: '#fff' }}>
                    ADD
                </Text>
            </TouchableOpacity>
        </View>
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

export default AddStudent;
