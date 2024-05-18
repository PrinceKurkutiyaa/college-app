import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const AttendenceMain = () =>{
    const navigation = useNavigation();

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
            style={{padding:20,backgroundColor:'#7420ff',borderRadius:20,marginBottom:20,paddingHorizontal:30}}
            onPress={()=>navigation.navigate('Add Student')}
            >
                <Text style={{color:'#fff'}}>
                    Add Students
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Take Attendence')}
            style={{padding:20,backgroundColor:'#7420ff',borderRadius:20,marginBottom:20}}
            >
                <Text style={{color:'#fff'}}>
                    Take Attendence
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Calender')}
            style={{padding:20,backgroundColor:'#7420ff',borderRadius:20,paddingHorizontal:45}}
            >
                <Text style={{color:'#fff'}}>
                    Calender
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}
export default AttendenceMain;