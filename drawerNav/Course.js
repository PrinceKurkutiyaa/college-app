import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Button,
  SectionList,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigator from '../stackNav/MainNavigator';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import WebView from 'react-native-webview';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Course = () => {
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, []);
  const [show, setShow] = useState(true);
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <LinearGradient colors={['#FFFFFF', '#f6f6f6']} style={{flex: 1}}>
        <SafeAreaProvider style={{flex: 1}}>
          <Swiper
            style={{}}
            pagingEnabled
            loop={false}
            dotColor="white"
            activeDotColor="#383d41">
            <SafeAreaProvider style={{flex: 1}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../collegeData/ComputerData.jpg')}
                  style={{
                    height: 200,
                    width: 360,
                    borderRadius: 20,
                    borderColor: 'white',
                    borderWidth: 5,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 25,
                  paddingTop: 10,
                  fontWeight: '900',
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                  color: '#383d41',
                }}>
                Computer Department
              </Text>
              <Text
                style={{fontSize: 12, paddingHorizontal: 10, paddingTop: 10}}>
                In the present world scenario Computer science and engineering
                has its place in every aspect. It is the scientific and
                practical approach to computation and its applications. Computer
                science gives never ending opportunities to the fresh Diploma
                Holders. A computer engineer specializes in the theory of
                computation and the design of computational systems
              </Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: '#383d41',
                    fontWeight: '900',
                  }}>
                  Job Prospectus
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                    paddingTop: 20,
                  }}>
                  Besides the Computer Engineers have plenty of options to work
                  in IT companies in departments such as:-
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  1.S/W Developers in I.T./Software Companies
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  2.Senior Technical Assistant in Defence Research and
                  Development Organisation (DRDO).
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  3.J.E. in Indian Railways/Metros/B.S.N.L.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  4.Lab Instructor/Workshop Instructor in Technical Institutes.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  5.Technical Assistant/Junior Programmer in Universities.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  6.Programming Assistant /Computer Operators in HSSC.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  7.Data Entry Operator in different Government Offices/Banks.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  8.Self- employment opportunities as Internet Cafe, website
                  designing, video game cafe, graphics and animation designing.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  9.Job opportunities due to forthcoming projects of DIGITAL
                  INDIA and MAKE IN INDIA and many more.
                </Text>
              </View>
            </SafeAreaProvider>

            <SafeAreaProvider>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../collegeData/ElectricalBranch.jpg')}
                  style={{
                    height: 200,
                    width: 360,
                    borderRadius: 20,
                    borderColor: 'white',
                    borderWidth: 5,
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: '900',

                    color: '#383d41',
                  }}>
                  Electrical Department
                </Text>
              </View>
              <Text
                style={{fontSize: 12, paddingHorizontal: 10, paddingTop: 10}}>
                Electrical Engineering is one of the fastest growing fields that
                involves study and application of electricity and electronics.
                It is the most interesting branch of engineering because it
                involves study of computer, electrical and electronics and
                communication. Electrical engineering deals with generation,
                transmission and distribution of electricity. Today, electrical
                engineers are much in demand due to the rising demand for
                electrical energy, the growth of audio and visual communication
                systems and automation in the industry.
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '900',
                  color: '#383d41',
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                }}>
                Job Prospectus
              </Text>
              <View style={{flex:1}}>
                <Text
                  style={{
                    fontSize: 12,
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                    paddingTop: 10,
                  }}>
                  Electrical Engineers can be appointed as :-
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  1.Design Engineer
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  2.Quality Control Engineer.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  3.Test Engineer
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  4.Reliability Engineer
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  5.Technical Assistant/Junior Programmer in Universities.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  6.Process and Manufacturing Engineer etc
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  7.Self- employment opportunities as Electronics Engineer
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  8.Job opportunities due to forthcoming projects of DIGITAL
                  INDIA and MAKE IN INDIA and many more.
                </Text>
                <Text
                  style={{fontSize: 12, paddingHorizontal: 10, paddingTop: 10}}>
                  These engineers can work in atomic power plants, hydel or
                  thermal power plants. Job opportunities are ample in both
                  private and public sector like railways, civil aviation,
                  electricity board and utility companies, electrical design and
                  consultancy firms and all types of manufacturing industries.
                </Text>
              </View>
            </SafeAreaProvider>

            <SafeAreaProvider style={{flex: 1}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../collegeData/ElectronicsBranch.jpg')}
                  style={{
                    height: 200,
                    width: 360,
                    borderRadius: 20,
                    borderColor: 'white',
                    borderWidth: 5,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 25,
                  paddingTop: 10,
                  fontWeight: '900',
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                  color: '#383d41',
                }}>
                Electronics Department
              </Text>
              <Text
                style={{fontSize: 12, paddingHorizontal: 10, paddingTop: 10}}>
                A layman’s imagination of an ECE, is a man working on an
                integrated chip in a sophisticated lab. With the evolution of
                the computer age, E&C has crept into every sphere of human life,
                thus increasing its scope manifolds. Electronics is now a part
                of our everyday life, from your pocket FM radio to televisions,
                computers, mobile phones and even the high-end satellites that
                are helping you read this article now. This was an overview on
                E&C, but after going through this you all would have quite an
                in-depth knowledge of what an ECE does and the way it treads the
                path in the near future.
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '900',
                  color: '#383d41',
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                }}>
                Job Prospectus
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  paddingHorizontal: 10,
                  paddingBottom: 10,
                  paddingTop: 20,
                }}>
                The field of electronics engineering offers a wide range of job
                prospects across various industries. Here's an overview of the
                job prospects for electronics engineers:
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                1.Telecommunications Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                2.Consumer Electronics Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                3.Automotive Electronics Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                4.Transportation engineering.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                5.Aerospace and Defense Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                6.Semiconductor Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                7.Renewable Energy Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                8.Medical Electronics Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                9.Research and Development.
              </Text>
            </SafeAreaProvider>

            <SafeAreaProvider style={{flex: 1}}>
              <View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    source={require('../collegeData/CivilBranch.jpg')}
                    style={{
                      height: 200,
                      width: 360,
                      borderRadius: 20,
                      borderColor: 'white',
                      borderWidth: 5,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 25,
                    paddingTop: 10,
                    fontWeight: '900',
                    borderBottomWidth: 1,
                    borderRadius: 200,
                    paddingHorizontal: 10,
                    color: '#383d41',
                  }}>
                  Civil Department
                </Text>
                <Text
                  style={{fontSize: 12, paddingHorizontal: 10, paddingTop: 10}}>
                  The range and application of civil engineering is the broadest
                  and the most visible. In fact, the entire infrastructural
                  framework of a modern nation is the creation of civil
                  engineers. The credit of building mighty power plants, dams,
                  airports, sea ports, highways, inland waterways and industrial
                  plants goes to civil engineers. These professionals are also
                  engaged in building an unending array of urban structures such
                  as commercial complexes, skyscrapers, tunnels, bridges, roads,
                  urban rapid transport systems, sports stadia and so on.
                </Text>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: '900',
                    color: '#383d41',
                    borderBottomWidth: 1,
                    borderRadius: 200,
                    paddingHorizontal: 10,
                  }}>
                  Job Prospectus
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                    paddingTop: 20,
                  }}>
                  Besides the Civil Engineers have plenty of options to work in
                  Various companies in departments such as:-
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  1.Construction engineering.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  2.Hydraulic engineering.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  3.Coastal and ocean engineering.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  4.Transportation engineering.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  5.Materials engineering.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  6.Structural engineering.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  7.Earthquake engineering.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  8.Urban engineering.
                </Text>
                <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                  9.Environment engineering.
                </Text>
              </View>
            </SafeAreaProvider>

            <View style={{flex: 1}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../collegeData/MechanicalBranch.jpg')}
                  style={{
                    height: 200,
                    width: 360,
                    borderRadius: 20,
                    borderColor: 'white',
                    borderWidth: 5,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 25,
                  paddingTop: 10,
                  fontWeight: '900',
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                  color: '#383d41',
                }}>
                Mechanical Department
              </Text>
              <Text
                style={{fontSize: 12, paddingHorizontal: 10, paddingTop: 10}}>
                Mechanical engineering is one of the oldest branches of
                engineering. It is also referred to as the ‘mother’ branch of
                engineering.This department has made its present felt all across
                the country in both the private and public sector undertakings.
                The diploma engineers produced by this department have been
                serving in various industries in the fields of automobiles,
                fasteners, tool designing, machine tools production, railways,
                metro, power plants and various manufacturing and service
                industries.
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '900',
                  color: '#383d41',
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                }}>
                Job Prospectus
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  paddingHorizontal: 10,
                  paddingBottom: 10,
                  paddingTop: 20,
                }}>
                The field of mechanical engineering offers a wide range of job
                prospects across various industries. Here's an overview of the
                job prospects for mechanical engineers:
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                1.Manufacturing Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                2.Automotive Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                3.Aerospace Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                4.Energy Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                5.Construction Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                6.Government and Defense.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                7.Research and Development.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                8.Urban engineering.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                9.Consulting and Advisory Services.
              </Text>
            </View>

            <SafeAreaProvider style={{flex: 1}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={require('../collegeData/ComputerData.jpg')}
                  style={{
                    height: 200,
                    width: 360,
                    borderRadius: 20,
                    borderColor: 'white',
                    borderWidth: 5,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 25,
                  paddingTop: 10,
                  fontWeight: '900',
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                  color: '#383d41',
                }}>
                Plastic Department
              </Text>
              <Text
                style={{fontSize: 12, paddingHorizontal: 10, paddingTop: 10}}>
                Plastic engineering encompasses the meticulous design,
                fabrication, and application of plastic materials and products
                across various industries. Rooted in polymer science, this field
                delves into the intricate chemistry and behavior of
                polymers—large molecules composed of repeating units—to engineer
                solutions that address a spectrum of needs. At its core, plastic
                engineering is about materializing ideas. Engineers select
                polymers based on an array of characteristics, including
                mechanical strength, thermal stability, and chemical resistance,
                tailoring each selection to meet specific product requirements
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '900',
                  color: '#383d41',
                  borderBottomWidth: 1,
                  borderRadius: 200,
                  paddingHorizontal: 10,
                }}>
                Job Prospectus
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  paddingHorizontal: 10,
                  paddingBottom: 5,
                  paddingTop: 20,
                }}>
                The job prospects for plastic engineers are robust and diverse,
                offering opportunities in various industries and sectors. Here's
                an overview of the job prospects in plastic engineering:
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                1.Manufacturing Industries.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                2.Automotive Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                3.Aerospace Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                4.Packaging Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                5.Medical Device Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                6.Consumer Goods Industry.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                7.Research and Development.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                8.Consulting and Advisory Services.
              </Text>
              <Text style={{fontSize: 12, paddingHorizontal: 10}}>
                9.Environment engineering.
              </Text>
            </SafeAreaProvider>
          </Swiper>
          <Modal visible={show} transparent={true} style={{flex: 1}}>
            <SafeAreaProvider
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'black',

                  opacity: 0.8,
                }}>
                <Text style={{color: 'white', fontSize: 25}}>
                  Swipe Left to Explore Branches
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  backgroundColor: 'black',
                  opacity: 0.8,
                }}>
                <FastImage
                  source={{
                    uri: 'https://media2.giphy.com/media/Sw3wXtNJCkQkBJmVbq/giphy.gif',
                  }}
                  style={{height: 200, width: 200}}
                />
              </View>
            </SafeAreaProvider>
          </Modal>
        </SafeAreaProvider>
      </LinearGradient>
    </SafeAreaProvider>
  );
};
export default Course;
