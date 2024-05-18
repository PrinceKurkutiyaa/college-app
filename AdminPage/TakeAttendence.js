import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const TakeAttendence = () => {
    const [selectedBranch, setSelectedBranch] = useState('Computer');
    const [selcetedSemester, setSelectedSemester] = useState('1')
    const [peroid, setPeroid] = useState('1')

    const navigation = useNavigation();

    const check = () => {

        if (selcetedSemester == 1 && selectedBranch === "Computer") {
            //console.warn("FIRST COMPUTRER")

            if (peroid == 1) {
                navigation.navigate('First Peroid First')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid First')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid First')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid First')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid First')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid First')
            } else if (peroid == 7) {
                navigation.navigate('First Peroid First')
            }
        }
        else if (selcetedSemester == 2 && selectedBranch === "Computer") {
    
            if (peroid == 1) {
                navigation.navigate('First Peroid Second')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Second')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Second')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Second')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Second')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Second')
            } else if (peroid == 7) {
                navigation.navigate('Second Peroid Second')
            }

        }
        else if (selcetedSemester == 3 && selectedBranch === "Computer") {
            
            if (peroid == 1) {
                navigation.navigate('First Peroid Third')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Third')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Third')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Third')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Third')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Third')
            } else if (peroid == 7) {
                navigation.navigate('First Peroid Third')
            }

        }
        else if (selcetedSemester == 4 && selectedBranch === "Computer") {
            if (peroid == 1) {
                navigation.navigate('First Peroid Fourth')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fourth')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fourth')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fourth')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fourth')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fourth')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 5 && selectedBranch === "Computer") {
            
            if (peroid == 1) {
                navigation.navigate('First Peroid Fifth')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fifth')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fifth')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fifth')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fifth')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fifth')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 6 && selectedBranch === "Computer") {
            if (peroid == 1) {
                navigation.navigate('First Peroid Sixth')
                console.warn("1")
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Sixth')
                console.warn("2")
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Sixth')
                console.warn("3")
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Sixth')
                console.warn("4")
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Sixth')
                console.warn("5")
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Sixth')
                console.warn("6")
            } else if (peroid == 7) {
                navigation.navigate('First Peroid Sixth')
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
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderRadius: 20, padding: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 17 }}> Select Peroid:</Text>
                <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 20 }}>
                    <Picker
                        selectedValue={peroid}
                        style={{ width: 200 }}
                        onValueChange={(itemValue, itemIndex) => setPeroid(itemValue)}
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
                style={{ backgroundColor: 'purple', padding: 20, borderRadius: 20, marginTop: 20 }}
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

export default TakeAttendence;
