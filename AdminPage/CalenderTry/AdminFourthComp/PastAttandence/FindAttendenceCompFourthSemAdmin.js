import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SectionList, ScrollView } from "react-native";
import firestore from '@react-native-firebase/firestore';
import PastAttandence from "./PastAttandenceCompFourthSemAdmin";
import LinearGradient from "react-native-linear-gradient";

const FindAttendanceCompFourthSemAdmin= ({ route }) => {
    const [computer6thSemData, setComputer6thSemData] = useState([]);
    const [idData, setIDData] = useState([])
    const [peroidData, setPeroidData] = useState([])
    const [peroid1, setPeroid1] = useState([])
    const [peroid2, setPeroid2] = useState([])
    const [peroid3, setPeroid3] = useState([])
    const [peroid4, setPeroid4] = useState([])
    const [peroid5, setPeroid5] = useState([])
    const [peroid6, setPeroid6] = useState([])
    const [show, setShow] = useState(false);
    const selectedDate = route.params?.selectedDate;

    useEffect(() => {
        fetchData();
        ApiFetch();
        Peroid1();
        Peroid2();
        Peroid3();
        Peroid4();
        Peroid5();
        Peroid6();
    }, []);

    const fetchData = async () => {
        try {
            const querySnapshot = await firestore()
                .collection('Attandence')
                .doc('Computer Branch')
                .collection('Computer 4th sem')
                .get();
            // console.log("Query Path:", querySnapshot.query.path); // Log query path
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            const targetId = selectedDate
            const idExists = data.map(item => item.id)
            setIDData(idExists)
            console.log(idData)
            setComputer6thSemData(data);
            // if (idExists) {
            //     setShow(true)
            // } else {
            //     console.warn('NO RECORD FOUND')
            // }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const ApiFetch = async () => {
        try {
            try {
                
                const data = await firestore()
                    .collection('Attandence')
                    .doc('Computer Branch')
                    .collection('Computer 4th sem')
                    .doc(selectedDate)
                    .collection('Peroid 1')
                    .get();

                const items = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPeroidData(items)
                
            } catch (error) {
                console.error(`Error fetching data for ${period}:`, error);
            }

        } catch (error) {
            console.log(error)
        }
    }
    const Peroid1 = async () => {
        try {
            try {
                const data = await firestore()
                    .collection('Attandence')
                    .doc('Computer Branch')
                    .collection('Computer 4th sem')
                    .doc(selectedDate)
                    .collection('Peroid 1')
                    .get();

                const items = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPeroid1(items)

            } catch (error) {
                console.error(`Error fetching data for ${period}:`, error);
            }

        } catch (error) {
            console.log(error)
        }
    }
    const Peroid2 = async () => {
        try {
            try {
                const data = await firestore()
                    .collection('Attandence')
                    .doc('Computer Branch')
                    .collection('Computer 4th sem')
                    .doc(selectedDate)
                    .collection('Peroid 2')
                    .get();

                const items = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPeroid2(items)

            } catch (error) {
                console.error(`Error fetching data for ${period}:`, error);
            }

        } catch (error) {
            console.log(error)
        }
    }
    const Peroid3 = async () => {
        try {
            try {
                const data = await firestore()
                    .collection('Attandence')
                    .doc('Computer Branch')
                    .collection('Computer 4th sem')
                    .doc(selectedDate)
                    .collection('Peroid 3')
                    .get();

                const items = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPeroid3(items)

            } catch (error) {
                console.error(`Error fetching data for ${period}:`, error);
            }

        } catch (error) {
            console.log(error)
        }
    }
    const Peroid4 = async () => {
        try {
            try {
                const data = await firestore()
                    .collection('Attandence')
                    .doc('Computer Branch')
                    .collection('Computer 4th sem')
                    .doc(selectedDate)
                    .collection('Peroid 4')
                    .get();

                const items = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPeroid4(items)

            } catch (error) {
                console.error(`Error fetching data for ${period}:`, error);
            }

        } catch (error) {
            console.log(error)
        }
    }
    const Peroid5 = async () => {
        try {
            try {
                const data = await firestore()
                    .collection('Attandence')
                    .doc('Computer Branch')
                    .collection('Computer 4th sem')
                    .doc(selectedDate)
                    .collection('Peroid 5')
                    .get();

                const items = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPeroid5(items)

            } catch (error) {
                console.error(`Error fetching data for ${period}:`, error);
            }

        } catch (error) {
            console.log(error)
        }
    }
    const Peroid6 = async () => {
        try {
            try {
                const data = await firestore()
                    .collection('Attandence')
                    .doc('Computer Branch')
                    .collection('Computer 4th sem')
                    .doc(selectedDate)
                    .collection('Peroid 6')
                    .get();

                const items = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setPeroid6(items)

            } catch (error) {
                console.error(`Error fetching data for ${period}:`, error);
            }

        } catch (error) {
            console.log(error)
        }
    }
    const exportToExcel = async () => {
        const wb = XLSX.utils.book_new();
        const data = [
            ['Name', 'Roll', 'Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'Period 6'],
            ...peroidData.map((item, index) => [
                item.name,
                item.roll,
                peroid1[index]?.boolean ? 'P' : 'A',
                peroid2[index]?.boolean ? 'P' : 'A',
                peroid3[index]?.boolean ? 'P' : 'A',
                peroid4[index]?.boolean ? 'P' : 'A',
                peroid5[index]?.boolean ? 'P' : 'A',
                peroid6[index]?.boolean ? 'P' : 'A'
            ])
        ];
        const ws = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Attendance');
        const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });

        const path = `${RNFS.DownloadDirectoryPath}/attendance_5th_Sem ${selectedDate}.xlsx`;
        await RNFS.writeFile(path, wbout, 'ascii')
            .then(() => {
                Alert.alert('Excel file written at ',`${path}`);
            })
            .catch((error) => {
                console.error("Error writing file: ", error);
            });
    };
    return (
        <ScrollView>
            <LinearGradient colors={['#c8b1ff', '#8e49ff', '#6518bf']}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: '900', paddingBottom: 10,color:'white' }}>Computer 4th Semester</Text>
                <Text style={{ fontSize: 20, fontWeight: '500',color:'white' }}>
                    Selected Date: {selectedDate}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 20}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' ,}}>
                    <View style={{ backgroundColor: 'lightgreen', padding: 10, borderRadius: 60 }}>

                    </View>
                    <Text style={{color:'white',paddingHorizontal:5}}>
                        Present
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'red', padding: 10, borderRadius: 60 }}>
                        </View>
                        <Text style={{color:'white',paddingHorizontal:5}}>
                            Absent
                        </Text>
                    </View>
                </View>
            </View>
            {/* <View style={{ flexDirection: 'row' ,paddingHorizontal:100,flex:1}}>
                <Text style={{fontWeight:'900'}}>Users:</Text>
                <View style={{paddingLeft:135}}>
                    <Text style={{fontWeight:'900'}} >Peroid 1</Text>
                </View>
            </View> */}
            <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={exportToExcel}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="download"
                style={{
                  fontSize: 40,
                  color: 'black',
                  paddingHorizontal: 20,
                }}></Icon>
            </View>
          </TouchableOpacity>
        </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <View style={{ alignItems: 'center', borderWidth: 1, marginLeft: 5 }}>
                        <Text style={{ fontWeight: '700', fontSize: 20,color:'white'}}>Students</Text>
                    </View>
                    <FlatList
                        data={peroidData}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (

                            <View style={{
                                marginLeft: 5,
                                borderBottomWidth: 1,
                                borderBottomColor: '#ccc',
                                flexDirection: 'row',
                                
                                padding: 10
                            }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <View style={{ justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 17, color: 'white' }}>{index + 1}.</Text>
                                    </View>
                                    <View style={{ paddingHorizontal: 10 }}>
                                        <Text style={{ fontSize: 15, color: 'white' }}>Name: {item.name}</Text>
                                        <Text style={{ fontSize: 15, color: 'white' }}>Roll: {item.roll}</Text>
                                    </View>


                                </View>
                            </View>
                        )} />
                </View>
                <View style={{flexDirection:'row'}}>
    
                    <View style={{ borderWidth: 1 }} >
                        <Text style={{ fontWeight: '700', fontSize: 20,color:'white' }}> 1 </Text>
                        <FlatList
                            data={peroid1}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{
                                    borderBottomWidth: 1,
                                    paddingVertical: 20.4,
                                    padding:10,
                                    borderBottomColor: '#ccc',
                                    alignItems: 'center',
                                    backgroundColor:  item.boolean ? 'lightgreen' : 'red'// Adjust as needed
                                }}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.boolean ? 'P' : 'A'}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={{ borderWidth: 1 }} >
                        <Text style={{ fontWeight: '700', fontSize: 20,color:'white' }}> 2 </Text>
                        <FlatList
                            data={peroid2}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{
                                    borderBottomWidth: 1,
                                    paddingVertical: 20.4,
                                    padding:10,
                                    borderBottomColor: '#ccc',
                                    alignItems: 'center',
                                    backgroundColor: item.boolean ? 'lightgreen' : 'red' // Adjust as needed
                                }}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.boolean ? 'P' : 'A'}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={{ borderWidth: 1 }} >
                        <Text style={{ fontWeight: '700', fontSize: 20,color:'white' }}> 3 </Text>
                        <FlatList
                            data={peroid3}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{
                                    borderBottomWidth: 1,
                                    paddingVertical: 20.4,
                                    padding:10,
                                    borderBottomColor: '#ccc',
                                    alignItems: 'center',
                                    backgroundColor: item.boolean ? 'lightgreen' : 'red' // Adjust as needed
                                }}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.boolean ? 'P' : 'A'}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={{ borderWidth: 1 }} >
                        <Text style={{ fontWeight: '700', fontSize: 20,color:'white' }}> 4 </Text>
                        <FlatList
                            data={peroid4}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{
                                    borderBottomWidth: 1,
                                    paddingVertical: 20.4,
                                    padding:10,
                                    borderBottomColor: '#ccc',
                                    alignItems: 'center',
                                    backgroundColor: item.boolean ? 'lightgreen' : 'red'// Adjust as needed
                                }}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.boolean ? 'P' : 'A'}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={{ borderWidth: 1 }} >
                        <Text style={{ fontWeight: '700', fontSize: 20,color:'white' }}> 5 </Text>
                        <FlatList
                            data={peroid5}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{
                                    borderBottomWidth: 1,
                                    paddingVertical: 20.4,
                                    padding:10,
                                    borderBottomColor: '#ccc',
                                    alignItems: 'center',
                                    backgroundColor: item.boolean ? 'lightgreen' : 'red'// Adjust as needed
                                }}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.boolean ? 'P' : 'A'}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={{ borderWidth: 1 }} >
                        <Text style={{ fontWeight: '700', fontSize: 20,color:'white' }}> 6 </Text>
                        <FlatList
                            data={peroid6}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{
                                    borderBottomWidth: 1,
                                    paddingVertical: 20.4,
                                    padding:10,
                                    borderBottomColor: '#ccc',
                                    alignItems: 'center',
                                    backgroundColor: item.boolean ? 'lightgreen' : 'red'// Adjust as needed
                                }}>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.boolean ? 'P' : 'A'}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>

            </View>
            </LinearGradient>
        </ScrollView>
    );
};

export default FindAttendanceCompFourthSemAdmin;
