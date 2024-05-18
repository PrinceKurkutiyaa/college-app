import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AdminHome = () =>{
    const navigation=useNavigation();
    return(
        
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>
               Welcome ADMIN !!
            </Text>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Login')}
            >
                <View style={{padding:20,backgroundColor:'#6518bf',borderRadius:20,marginTop:20}}>
                <Text style={{color:'white'}}>
                    LOGOUT
                </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default AdminHome;