import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, Button, SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from '../stackNav/MainNavigator';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const Course = () => {
    const navigation = useNavigation();
    return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView style={{ flexDirection: 'row', marginHorizontal: 22 }} horizontal={true} pagingEnabled >
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Computer Branch')}
                    >
                        <Image source={require('../collegeData/Computer.png')} style={{ height: 250, width: 350, borderRadius: 40 }} />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>This is Computer Branch</Text>
                    </View>
                </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Electronics Branch')}
                >
                    <View>
                        <Image source={require('../collegeData/Electronics.png')} style={{ height: 250, width: 350, borderRadius: 40 }}/>
                    </View>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>
                        This is Electronics Branch
                    </Text>
                </View>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Civil Branch')}
                >
                    <View>
                        <Image source={require('../collegeData/Civil.png')} style={{ height: 250, width: 350, borderRadius: 40 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Electronics Branch')}
                >
                    <View>
                        <Image source={{ uri: "https://e7.pngegg.com/pngimages/699/906/png-clipart-electronic-engineering-electronics-electrical-engineering-electronic-circuit-technology-angle-electronics-thumbnail.png" }} style={{ height: 250, width: 350, borderRadius: 40 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Electronics Branch')}
                >
                    <View>
                        <Image source={{ uri: "https://e7.pngegg.com/pngimages/699/906/png-clipart-electronic-engineering-electronics-electrical-engineering-electronic-circuit-technology-angle-electronics-thumbnail.png" }} style={{ height: 250, width: 350, borderRadius: 40 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Electronics Branch')}
                >
                    <View>
                        <Image source={{ uri: "https://e7.pngegg.com/pngimages/699/906/png-clipart-electronic-engineering-electronics-electrical-engineering-electronic-circuit-technology-angle-electronics-thumbnail.png" }} style={{ height: 250, width: 350, borderRadius: 40 }} />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>

    )
}
export default Course;