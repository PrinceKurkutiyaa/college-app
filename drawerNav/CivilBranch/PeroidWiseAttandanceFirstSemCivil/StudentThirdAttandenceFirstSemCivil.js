import {Button, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
const StudentThirdAttandenceFirstSemCivil = () => {
  const [color, setColor] = useState('');
  const [data, setData] = useState([]);

  const [text, setText] = useState([]);

  const [bool, setBool] = useState(false);

  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear();
  const dateString = `${year}-${month}-${day}`;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    //fetching Data
    try {
      const data = await firestore()
        .collection('Attandence')
        .doc('Civil Branch')
        .collection('Civil 1st sem')
        .doc(dateString)
        .collection('Peroid 3')
        .get();
      const items = data.docs.map(doc => ({id: doc.id, ...doc.data()}));
      setData(items);
      console.log(items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LinearGradient colors={['#FFFFFF', '#f6f6f6']} style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 40, fontWeight: '900'}}>Attendence!!</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40, fontWeight: '300'}}>Civil Branch</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, fontWeight: '800'}}>Peroid : 3</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 15, fontWeight: '800'}}>Semester : 1st</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20,
          paddingTop: 20,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: 'lightgreen',
              padding: 10,
              borderRadius: 60,
            }}></View>
          <Text>Present</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: 'red',
                padding: 10,
                borderRadius: 60,
              }}></View>
            <Text>Absent</Text>
          </View>
        </View>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              flex: 1,
              flexDirection: 'row',
              backgroundColor: item.boolean ? 'lightgreen' : 'red',
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 17, color: '#fff'}}>{index + 1}.</Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Text style={{fontSize: 15, color: '#fff'}}>
                  Name: {item.name}
                </Text>
                <Text style={{fontSize: 15, color: '#fff'}}>
                  Roll: {item.roll}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </LinearGradient>
  );
};
export default StudentThirdAttandenceFirstSemCivil;
