import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const AttendanceComputerFifth = () => {

    const navigation = useNavigation();
    return (
        <LinearGradient colors={['#c8b1ff', '#8e49ff', '#6518bf']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                alignItems:'center', borderWidth: 2, padding: 100,
                shadowColor:'white', elevation: 7, shadowOpacity: 10,
                borderWidth:0, borderColor: '#fff'
            }}>
                <View style={{ backgroundColor: '#7420ff', borderRadius: 20, marginBottom: 20, borderColor: 'white', borderWidth: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Today Sem 5 Computer')}
                    >
                        <Text style={{ fontSize: 20, padding: 20, color: '#fff', paddingHorizontal: 50 }}>
                            Today's
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{  backgroundColor: '#7420ff', borderRadius: 20, marginBottom: 20, borderColor: 'white', borderWidth: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('5th Sem Past Attandence')}>
                        <Text style={{ fontSize: 20, padding: 20, color: '#fff' }}>
                            Past Attandence
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )

}
export default AttendanceComputerFifth;