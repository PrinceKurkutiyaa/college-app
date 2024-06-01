import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const AttendanceSecondPlastic = () => {

    const navigation = useNavigation();
    return (
        <LinearGradient colors={['#FFFFFF', '#f6f6f6']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                alignItems:'center', borderWidth: 2, padding: 90,
                shadowColor: '#00dc00', elevation: 40, shadowOpacity: 10,
                borderWidth:1, borderColor: '#00dc00',backgroundColor:'#383d41',borderRadius:10
            }}>
                <View style={{ backgroundColor: 'white', borderRadius: 20, marginBottom: 20, borderColor: '#00dc00', borderWidth: 3 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Today Sem 2 Computer')}
                    >
                        <Text style={{ fontSize: 20, padding: 20, color: 'black', paddingHorizontal: 50,fontWeight:'500' }}>
                            Today's
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{  backgroundColor: 'white', borderRadius: 20, marginBottom: 20, borderColor: '#00dc00', borderWidth: 3 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('2nd Sem Past Attandence')}>
                        <Text style={{ fontSize: 18, padding: 20, color: 'black',fontWeight:'500' }}>
                            Past Attandence
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )

}
export default AttendanceSecondPlastic;