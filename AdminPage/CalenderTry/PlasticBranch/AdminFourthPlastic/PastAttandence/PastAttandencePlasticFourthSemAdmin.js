import { Button, Modal, Text, TouchableOpacity, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";


const PastAttandencePlasticFourthSemAdmin = () => {
    const [selected, setSelected] = useState('')
    const [show, setShow] = useState(false)
    const today = new Date();
    const day = today.getDate();

    const navigation = useNavigation();
    const fetch = () => {
        if (selected) {
            navigation.navigate('4th Sem Find Attandence Plastic', { selectedDate: selected })

        }
        else {
            console.warn('Please Select a date')
        }
    }

    return (
        <LinearGradient colors={['#c8b1ff', '#8e49ff', '#6518bf']} style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
            <View style={{
                backgroundColor: '#ffffff',
                padding: 20,
            }}>
                <Calendar onDayPress={day => { setSelected(day.dateString) }}
                    markedDates={{
                        [selected]: { selected: true },
                    }}
                    theme={{ arrowColor: 'red',selectedDayBackgroundColor:'red',todayButtonTextColor:'purple' }}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                <TouchableOpacity
                    style={{}}
                    onPress={() => fetch()}
                >
                    <View style={{ alignItems: "center", borderWidth: 2, borderColor: 'white', borderRadius: 30, padding: 20,backgroundColor:'#7420ff' }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            Find Data
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}
export default PastAttandencePlasticFourthSemAdmin;