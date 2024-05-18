import React, { useState } from 'react'
import { View, Text, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


const QuestionPaper = () =>{
    const navigation= useNavigation();
    return(
    
        <LinearGradient colors={['#c8b1ff', '#8e49ff', '#6518bf']} style={{ flex: 1,justifyContent: 'center',padding:20,paddingBottom:20 }}>
         <View style={{paddingBottom:20}}>
            <TouchableOpacity
            style ={{padding:10,borderWidth:2,borderColor:'white',borderRadius:10}}
            onPress={()=>navigation.navigate('Computer Branch Question Paper')}
            >
            
                <Text style ={{color:'white',}}>
                    Computer Branch Question paper
                </Text>
            </TouchableOpacity>
         </View>
         <View style ={{paddingBottom:20}} >
            <TouchableOpacity
            style ={{padding:10,borderWidth:2,borderColor:'white',borderRadius:10}}
            onPress={()=>navigation.navigate('Civil Branch Question Paper')}
            >
                <Text style ={{color:'white',}}>
                    Civil Branch Question paper
                </Text>
            </TouchableOpacity>
         </View>
         <View style ={{paddingBottom:20}}>
            <TouchableOpacity
            style ={{padding:10,borderWidth:2,borderColor:'white',borderRadius:10}}
            onPress={()=>navigation.navigate('Mechanical Branch Question Paper')}
            >
                <Text style ={{color:'white',}}>
                    Mechanical Branch Question paper
                </Text>
            </TouchableOpacity>
         </View>
         <View style ={{paddingBottom:20}}>
            <TouchableOpacity
            style ={{padding:10,borderWidth:2,borderColor:'white',borderRadius:10}}
            onPress={()=>navigation.navigate('Electrical Branch Question Paper')}
            >
                <Text style ={{color:'white',}}>
                    Electrical Branch Question paper
                </Text>
            </TouchableOpacity>
         </View>
         <View style ={{paddingBottom:20}}>
            <TouchableOpacity
            style ={{padding:10,borderWidth:2,borderColor:'white',borderRadius:10}}
            onPress={()=>navigation.navigate('Electronics Branch Question Paper')}
            >
                <Text style ={{color:'white',}}>
                    Electronics Branch Question paper
                </Text>
            </TouchableOpacity>
         </View>
         <View style ={{paddingBottom:20}}>
            <TouchableOpacity
            style ={{padding:10,borderWidth:2,borderColor:'white',borderRadius:10}}
            onPress={()=>navigation.navigate('Plastic Branch Question Paper')}
            >
                <Text style ={{color:'white',}}>
                    Plastic Branch Question paper
                </Text>
            </TouchableOpacity>
         </View>
         
         </LinearGradient>
    
    )
}

export default QuestionPaper;