import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Course2 = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1, padding: 10,backgroundColor:'#d4ffff'}}>

            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#ceffee' }}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('Computer Branch')}
                >
                    <Text>
                        Computer Branch
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#d1f9fb' }}>
                <TouchableOpacity
                 onPress={()=>navigation.navigate('Civil Branch')}
                >
                    <Text>
                        Civil Branch
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center', backgroundColor: '#d1e8fb' }}>
            <TouchableOpacity
                 onPress={()=>navigation.navigate('Electrical Branch')}
                >
                    <Text>
                        Electrical Branch
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center', backgroundColor: '#d1defb' }}>
            <TouchableOpacity
                 onPress={()=>navigation.navigate('Electronics Branch')}
                >
                    <Text>
                        Electronics Branch
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center', backgroundColor: '#d1d6fb' }}>
            <TouchableOpacity
                 onPress={()=>navigation.navigate('Mechanical Branch')}
                >
                    <Text>
                        Mechanical Branch
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent:'flex-end', alignItems: 'center', backgroundColor: '#d1d2fb' }}>
            <TouchableOpacity
                 onPress={()=>navigation.navigate('Plastic Branch')}
                >
                    <Text>
                        Plastic Branch
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}
export default Course2;