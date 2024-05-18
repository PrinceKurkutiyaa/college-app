import React from 'react';
import {Text,View} from "react-native"
import LinearGradient from 'react-native-linear-gradient';

const CivilQues = () => {
    return(
        <LinearGradient colors={['#c8b1ff', '#8e49ff', '#6518bf']} style={{ flex: 1,justifyContent: 'center',padding:20,paddingBottom:20 }}>
            <Text>
                Hello Ankit mota this side
            </Text>
        </LinearGradient>

    )
}

export default CivilQues;