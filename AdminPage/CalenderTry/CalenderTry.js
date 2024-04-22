import { Button, Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";



const CalenderTry = () =>{
    const [selected,setSelected] = useState('')
    const today = new Date();
    const day = today.getDate();

    const fetch = ()=>{
        if(selected === '2024-04-12'){
            console.warn('Collected ')
            
        }
        else{
            console.warn(day)
        }
    }
    
    return(
        <View style={{flex:1,justifyContent:'center'}}>
            <Calendar onDayPress={day => {setSelected(day.dateString)}}
            
            markedDates={{
                [selected]:{selected:true},
              }}
             />
             <Button title='press me' onPress={()=>fetch()}/>
        </View>
    )
}
export default CalenderTry;