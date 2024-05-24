import React, { useState, useRoute } from 'react'
import { View, Text, Button, Image, ImageBackground, FlatList, ScrollView } from 'react-native';
import Swiper from "react-native-swiper"
import LinearGradient from 'react-native-linear-gradient';



const HomeDrawer = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={['#FFFFFF', '#f6f6f6']}>
      <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image
              source={require('../collegeData/ChhotuRam.jpg')}
              style={{ height: 300, width: 380, borderRadius: 20 ,borderColor:'white' ,
              borderWidth:5}}
            />
          </View>
        
        <View>
          <View>
            <Text style={{ fontSize: 25, fontWeight: '900', paddingVertical: 20, color: '#383d41', paddingHorizontal: 10 }}>
              Our Courses
            </Text>
          </View>
          
          {/* <FlatList
            data={courseData}
            keyExtractor={item => item.id}
            horizontal={true}

            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 50 }}>
                <Image source={item.pic} style={{ height: 150, width: 150, borderRadius: 20 }} />
                <Text style={{ fontSize: 20, fontWeight: '900', paddingBottom: 50, fontFamily: 'Cochin' }}>
                  {item.branch}
                </Text>
              </View>
            )}
          /> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled>

            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
              <Image source={require("../collegeData//ComputerData.jpg")} style={{ height: 200, width: 200, borderRadius: 50 }} />
              <Text style={{ color: '#383d41', fontSize: 15, fontWeight: 'bold' }}>Computer Engineering</Text>
            </View>
            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
              <Image source={require("../collegeData//ComputerData.jpg")} style={{ height: 200, width: 200, borderRadius: 50 }} />
              <Text style={{ color: '#383d41', fontSize: 15, fontWeight: 'bold' }}>Civil Engineering</Text>
            </View>
            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
              <Image source={require("../collegeData//ComputerData.jpg")} style={{ height: 200, width: 200, borderRadius: 50 }} />
              <Text style={{ color: '#383d41', fontSize: 15, fontWeight: 'bold' }}>Mechanical Engineering</Text>
            </View>
            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
              <Image source={require("../collegeData//ComputerData.jpg")} style={{ height: 200, width: 200, borderRadius: 50 }} />
              <Text style={{ color: '#383d41', fontSize: 15, fontWeight: 'bold' }}>Electrical Engineering</Text>
            </View>
            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
              <Image source={require("../collegeData//ComputerData.jpg")} style={{ height: 200, width: 200, borderRadius: 50 }} />
              <Text style={{ color: '#383d41', fontSize: 15, fontWeight: 'bold' }}>Electronics & Comm. Engg</Text>
            </View>
            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
              <Image source={require("../collegeData//ComputerData.jpg")} style={{ height: 200, width: 200, borderRadius: 50 }} />
              <Text style={{ color: '#383d41', fontSize: 15, fontWeight: 'bold' }}>Plastic Engineering</Text>
            </View>
          </ScrollView>

        </View>
        <View >
        <Text style={{ fontSize: 25, fontWeight: '900', paddingVertical: 20, color: '#383d41', paddingHorizontal: 10 }}>
              Our Principal
            </Text>

          <View style={{ justifyContent: 'center', alignItems: 'center',paddingBottom:20 }}> 
            <Image source={require("../collegeData//principal-picture.jpg")} style={{ height: 200, width: 330, borderRadius: 50,borderColor:'white' ,
              borderWidth:5 }} />
          </View>
        </View>
        <View style={{paddingBottom:30}}>
        <Text style={{ fontSize: 25, fontWeight: '900', paddingVertical: 20, color: '#383d41', paddingHorizontal: 10 }}>
              Glimpses
            </Text>
        <Swiper style={{ justifyContent: 'center', alignItems: 'center', height: 210}}
          autoplay={true}
          autoplayTimeout={5}
          
          dotColor='white'
          activeDotColor='#383d41'
        >
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
            <Image
              source={require('../collegeData/priyankaMam.png')}
              style={{ height: 200, width: 360, borderRadius: 20,borderColor:'white' ,
              borderWidth:5}}
            />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image
              source={require('../collegeData/college2.jpeg')}
              style={{ height: 200, width: 360, borderRadius: 20,borderColor:'white' ,
              borderWidth:5}}
            />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image
              source={require('../collegeData/college1.jpeg')}
              style={{ height: 200, width: 360, borderRadius: 20,borderColor:'white' ,
              borderWidth:5 }}
            />
          </View>
        </Swiper>
        </View>
        <View style={{
          flex: 2, justifyContent: 'flex-end', borderWidth: 1,
          borderRadius: 8,
          borderColor: '#CCCCCC',
          padding: 10, backgroundColor: '#383d41'
        }}>
          <Text style={{ fontSize: 17, fontWeight: '900', paddingBottom: 10, color: 'white' }}>
            ABOUT C.R POLYTECHNIC
          </Text>
          <Text style={{ fontSize: 10, fontWeight: '400', color: 'white' }}>
            This leading Technical Institute of Northern India initially began with two-year courses in draftsman (Civil) at the time of its inception.
            Today, this Institute provide three years diploma in several different trades namely, Civil, Electrical, Mechanical, Electronics & communication, Plastic Technology, Computer Science which have been introduced from time to time.
            All the courses undertaken have been duly approved by Director of Technical Education, Haryana, and All India Council for Technical Education, New Delhi.
          </Text>
        </View>

      </LinearGradient>
    </ScrollView>

  );
};

export default HomeDrawer;