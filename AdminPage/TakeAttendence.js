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
        else if (selcetedSemester == 1 && selectedBranch === "Electrical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid First Electrical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid First Electrical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid First Electrical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid First Electrical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid First Electrical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid First Electrical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 2 && selectedBranch === "Electrical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Second Electrical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Second Electrical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Second Electrical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Second Electrical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Second Electrical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Second Electrical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 3 && selectedBranch === "Electrical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Third Electrical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Third Electrical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Third Electrical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Third Electrical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Third Electrical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Third Electrical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 4 && selectedBranch === "Electrical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fourth Electrical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fourth Electrical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fourth Electrical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fourth Electrical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fourth Electrical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fourth Electrical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }

        else if (selcetedSemester == 5 && selectedBranch === "Electrical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fifth Electrical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fifth Electrical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fifth Electrical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fifth Electrical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fifth Electrical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fifth Electrical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        } 
        else if (selcetedSemester == 6 && selectedBranch === "Electrical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Sixth Electrical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Sixth Electrical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Sixth Electrical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Sixth Electrical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Sixth Electrical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Sixth Electrical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        } 

        else if (selcetedSemester == 1 && selectedBranch === "Plastic") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid First Plastic')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid First Plastic')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid First Plastic')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid First Plastic')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid First Plastic')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid First Plastic')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 2 && selectedBranch === "Plastic") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Second Plastic')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Second Plastic')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Second Plastic')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Second Plastic')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Second Plastic')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Second Plastic')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 3 && selectedBranch === "Plastic") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Third Plastic')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Third Plastic')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Third Plastic')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Third Plastic')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Third Plastic')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Third Plastic')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 4 && selectedBranch === "Plastic") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fourth Plastic')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fourth Plastic')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fourth Plastic')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fourth Plastic')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fourth Plastic')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fourth Plastic')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }

        else if (selcetedSemester == 5 && selectedBranch === "Plastic") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fifth Plastic')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fifth Plastic')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fifth Plastic')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fifth Plastic')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fifth Plastic')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fifth Plastic')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        } 
        else if (selcetedSemester == 6 && selectedBranch === "Plastic") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Sixth Plastic')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Sixth Plastic')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Sixth Plastic')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Sixth Plastic')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Sixth Plastic')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Sixth Plastic')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }

        else if (selcetedSemester == 1 && selectedBranch === "Civil") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid First Civil')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid First Civil')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid First Civil')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid First Civil')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid First Civil')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid First Civil')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 2 && selectedBranch === "Civil") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Second Civil')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Second Civil')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Second Civil')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Second Civil')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Second Civil')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Second Civil')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 3 && selectedBranch === "Civil") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Third Civil')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Third Civil')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Third Civil')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Third Civil')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Third Civil')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Third Civil')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 4 && selectedBranch === "Civil") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fourth Civil')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fourth Civil')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fourth Civil')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fourth Civil')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fourth Civil')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fourth Civil')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }

        else if (selcetedSemester == 5 && selectedBranch === "Civil") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fifth Civil')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fifth Civil')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fifth Civil')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fifth Civil')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fifth Civil')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fifth Civil')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        } 
        else if (selcetedSemester == 6 && selectedBranch === "Civil") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Sixth Civil')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Sixth Civil')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Sixth Civil')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Sixth Civil')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Sixth Civil')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Sixth Civil')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }


        else if (selcetedSemester == 1 && selectedBranch === "Electronics") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid First Electronics')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid First Electronics')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid First Electronics')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid First Electronics')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid First Electronics')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid First Electronics')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 2 && selectedBranch === "Electronics") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Second Electronics')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Second Electronics')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Second Electronics')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Second Electronics')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Second Electronics')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Second Electronics')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 3 && selectedBranch === "Electronics") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Third Electronics')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Third Electronics')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Third Electronics')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Third Electronics')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Third Electronics')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Third Electronics')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 4 && selectedBranch === "Electronics") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fourth Electronics')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fourth Electronics')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fourth Electronics')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fourth Electronics')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fourth Electronics')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fourth Electronics')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }

        else if (selcetedSemester == 5 && selectedBranch === "Electronics") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fifth Electronics')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fifth Electronics')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fifth Electronics')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fifth Electronics')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fifth Electronics')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fifth Electronics')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        } 
        else if (selcetedSemester == 6 && selectedBranch === "Electronics") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Sixth Electronics')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Sixth Electronics')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Sixth Electronics')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Sixth Electronics')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Sixth Electronics')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Sixth Electronics')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        } 
        else if (selcetedSemester == 1 && selectedBranch === "Mechanical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid First Mechanical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid First Mechanical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid First Mechanical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid First Mechanical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid First Mechanical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid First Mechanical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 2 && selectedBranch === "Mechanical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Second Mechanical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Second Mechanical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Second Mechanical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Second Mechanical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Second Mechanical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Second Mechanical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 3 && selectedBranch === "Mechanical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Third Mechanical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Third Mechanical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Third Mechanical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Third Mechanical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Third Mechanical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Third Mechanical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }
        else if (selcetedSemester == 4 && selectedBranch === "Mechanical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fourth Mechanical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fourth Mechanical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fourth Mechanical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fourth Mechanical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fourth Mechanical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fourth Mechanical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        }

        else if (selcetedSemester == 5 && selectedBranch === "Mechanical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Fifth Mechanical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Fifth Mechanical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Fifth Mechanical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Fifth Mechanical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Fifth Mechanical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Fifth Mechanical')
            } else if (peroid == 7) {
                console.warn('7th')
            }

        } 
        else if (selcetedSemester == 6 && selectedBranch === "Mechanical") {    
            if (peroid == 1) {
                navigation.navigate('First Peroid Sixth Mechanical')
            }
            else if (peroid == 2) {
                navigation.navigate('Second Peroid Sixth Mechanical')
            }
            else if (peroid == 3) {
                navigation.navigate('Third Peroid Sixth Mechanical')
            }
            else if (peroid == 4) {
                navigation.navigate('Fourth Peroid Sixth Mechanical')
            } else if (peroid == 5) {
                navigation.navigate('Fifth Peroid Sixth Mechanical')
            } else if (peroid == 6) {
                navigation.navigate('Sixth Peroid Sixth Mechanical')
            } else if (peroid == 7) {
                console.warn('7th')
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
                        <Picker.Item label="Civil" value="Civil" />
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
