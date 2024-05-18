import React, { useState,useEffect } from 'react'
import { View, Text, Button, Image, ImageBackground } from 'react-native';     //Have an external file in style folder 
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
import Create from './Create';
import Forget from './Forget';
import AdminNav from '../AdminPage/AdminNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainDrawer from '../drawerNav/MainDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Computer from '../CousesStackNav/Computer';
import Civil from '../CousesStackNav/Civil';
import Electrical from '../CousesStackNav/Electrical';
import Elecronics from '../CousesStackNav/Electronics';
import Mechanical from '../CousesStackNav/Mechanical';
import Plastic from '../CousesStackNav/Plastic';
import AttendenceMain from '../AdminPage/TakeAttendence';
import AttendenceComputer from '../AdminPage/AttandanceFolder/ComputerBranch/Sixth';
import AddStudent from '../AdminPage/AddStudent';
import StudentData from '../AdminPage/AddStudents/StudentData';
import TakeAttendence from '../AdminPage/TakeAttendence';
import CalenderTry from '../AdminPage/CalenderTry/CalenderTry';
import First from '../AdminPage/AttandanceFolder/ComputerBranch/First'
import Second from '../AdminPage/AttandanceFolder/ComputerBranch/Second';
import Third from '../AdminPage/AttandanceFolder/ComputerBranch/Third';
import Fourth from '../AdminPage/AttandanceFolder/ComputerBranch/Fourth';
import Fifth from '../AdminPage/AttandanceFolder/ComputerBranch/Fifth';
import Sixth from '../AdminPage/AttandanceFolder/ComputerBranch/Sixth';
import FirstPeroid from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/FirstPeroidSixth'
import SecondPeroid from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/SecondPeroidSixth';
import ThirdPeroid from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/ThirdPeroidSixth';
import FourthPeroid from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/FourthPeroidSixth';
import FifthPeroid from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/FifthPeroidSixth';
import SixthPeroid from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/SixthPeroidSixth';
import AttendanceSecondPage from '../drawerNav/AttendenceSecondPage';
import Attendence from '../drawerNav/Attendence';
import StudentFirstAttandence from '../drawerNav/StudentSideAttendance/StudentFirstAttandence';
import StudentSecondAttandence from '../drawerNav/StudentSideAttendance/StudentSecondAttandence';
import StudentThirdAttandence from '../drawerNav/StudentSideAttendance/StudentThirdAttandence';
import StudentFourthAttandence from '../drawerNav/StudentSideAttendance/StudentFourthAttandence';
import StudentFifthAttandence from '../drawerNav/StudentSideAttendance/StudentFifthAttandence';
import StudentSixthAttandence from '../drawerNav/StudentSideAttendance/StudentSixthAttandence';
import pastAttandnce from '../drawerNav/PastAttandence/PastAttandence';
import PastAttandnce from '../drawerNav/PastAttandence/PastAttandence';
import FindAttendence from '../drawerNav/PastAttandence/FindAttendence';
import SplashScreen from './SplashScreen';
import ComputerQues from '../drawerNav/QuestionPaper/ComputerQues';
import CivilQues from '../drawerNav/QuestionPaper/CivilQues';
import MechanicalQues from '../drawerNav/QuestionPaper/MechanicalQues';
import ElectricalQues from '../drawerNav/QuestionPaper/ElectricalQues';
import ElecronicsQues from '../drawerNav/QuestionPaper/ElectronicsQues';
import PlasticQues from '../drawerNav/QuestionPaper/PlasticQues';

import AttendanceComputerFirst from '../drawerNav/ComputerBranch/AttendanceComputerFirst';
import AttendanceComputerSecond from '../drawerNav/ComputerBranch/AttendanceComputerSecond';
import AttendanceComputerThird from '../drawerNav/ComputerBranch/AttendanceComputerThird';
import AttendanceComputerFourth from '../drawerNav/ComputerBranch/AttendanceComputerFourth';
import AttendanceComputerFifth from '../drawerNav/ComputerBranch/AttendanceComputerFifth';

import FirstPeroidSixth from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/FirstPeroidSixth';
import SecondPeroidSixth from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/SecondPeroidSixth';
import ThirdPeroidSixth from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/ThirdPeroidSixth';
import FourthPeroidSixth from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/FourthPeroidSixth';
import FifthPeroidSixth from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/FifthPeroidSixth';
import SixthPeroidSixth from '../AdminPage/AttandanceFolder/ComputerBranch/SixthPeroidWise/SixthPeroidSixth';

import FirstSemAddData from '../AdminPage/AddStudents/FirstSemAddData';
import SecondSemAddData from '../AdminPage/AddStudents/SecondSemAddData';
import ThirdSemAddData from '../AdminPage/AddStudents/ThirdSemAddData';
import FourthSemAddData from '../AdminPage/AddStudents/FourthSemAddData';
import FifthSemAddData from '../AdminPage/AddStudents/FifthSemAddData';

import FirstPeroidFirst from '../AdminPage/AttandanceFolder/ComputerBranch/FirstPeroidWise/FirstPeroidFirst';
import SecondPeroidFirst from '../AdminPage/AttandanceFolder/ComputerBranch/FirstPeroidWise/SecondPeroidFirst';
import ThirdPeroidFirst from '../AdminPage/AttandanceFolder/ComputerBranch/FirstPeroidWise/ThirdPeroidFirst';
import FourthPeroidFirst from '../AdminPage/AttandanceFolder/ComputerBranch/FirstPeroidWise/FourthPeroidFirst';
import FifthPeroidFirst from '../AdminPage/AttandanceFolder/ComputerBranch/FirstPeroidWise/FifthPeroidFirst';
import SixthPeroidFirst from '../AdminPage/AttandanceFolder/ComputerBranch/FirstPeroidWise/SixthPeroidFirst';


import FirstPeroidSecond from '../AdminPage/AttandanceFolder/ComputerBranch/SecondPeroidWise/FirstPeroidSecond';
import SecondPeroidSecond from '../AdminPage/AttandanceFolder/ComputerBranch/SecondPeroidWise/SecondPeroidSecond';
import ThirdPeroidSecond from '../AdminPage/AttandanceFolder/ComputerBranch/SecondPeroidWise/ThirdPeroidSecond';
import FourthPeroidSecond from '../AdminPage/AttandanceFolder/ComputerBranch/SecondPeroidWise/FourthPeroidSecond';
import FifthPeroidSecond from '../AdminPage/AttandanceFolder/ComputerBranch/SecondPeroidWise/FifthPeroidSecond';
import SixthPeroidSecond from '../AdminPage/AttandanceFolder/ComputerBranch/SecondPeroidWise/SixthPeroidSecond';


import FirstPeroidThird from '../AdminPage/AttandanceFolder/ComputerBranch/ThirdPeroidWise/FirstPeroidThird';
import SecondPeroidThird from '../AdminPage/AttandanceFolder/ComputerBranch/ThirdPeroidWise/SecondPeroidThird';
import ThirdPeroidThird from '../AdminPage/AttandanceFolder/ComputerBranch/ThirdPeroidWise/ThirdPeroidThird';
import FourthPeroidThird from '../AdminPage/AttandanceFolder/ComputerBranch/ThirdPeroidWise/FourthPeroidThird';
import FifthPeroidThird from '../AdminPage/AttandanceFolder/ComputerBranch/ThirdPeroidWise/FifthPeroidThird';
import SixthPeroidThird from '../AdminPage/AttandanceFolder/ComputerBranch/ThirdPeroidWise/SixthPeroidThird';


import FirstPeroidFourth from '../AdminPage/AttandanceFolder/ComputerBranch/FourthPeroidWise/FirstPeroidFourth';
import SecondPeroidFourth from '../AdminPage/AttandanceFolder/ComputerBranch/FourthPeroidWise/SecondPeroidFourth';
import ThirdPeroidFourth from '../AdminPage/AttandanceFolder/ComputerBranch/FourthPeroidWise/ThirdPeroidFourth';
import FourthPeroidFourth from '../AdminPage/AttandanceFolder/ComputerBranch/FourthPeroidWise/FourthPeroidFourth';
import FifthPeroidFourth from '../AdminPage/AttandanceFolder/ComputerBranch/FourthPeroidWise/FifthPeroidFourth';
import SixthPeroidFourth from '../AdminPage/AttandanceFolder/ComputerBranch/FourthPeroidWise/SixthPeroidFourth';


import FirstPeroidFifth from '../AdminPage/AttandanceFolder/ComputerBranch/FifthPeroidWise/FirstPeroidFifth';
import SecondPeroidFifth from '../AdminPage/AttandanceFolder/ComputerBranch/FifthPeroidWise/SecondPeroidFifth';
import ThirdPeroidFifth from '../AdminPage/AttandanceFolder/ComputerBranch/FifthPeroidWise/ThirdPeroidFifth';
import FourthPeroidFifth from '../AdminPage/AttandanceFolder/ComputerBranch/FifthPeroidWise/FourthPeroidFifth';
import FifthPeroidFifth from '../AdminPage/AttandanceFolder/ComputerBranch/FifthPeroidWise/FifthPeroidFifth';
import SixthPeroidFifth from '../AdminPage/AttandanceFolder/ComputerBranch/FifthPeroidWise/SixthPeroidFifth';
import FindAttendanceComputerFirst from '../drawerNav/PastAttandence/ComputerBranch/FindAttendenceComputerFirst';
import FindAttendanceComputerSecond from '../drawerNav/PastAttandence/ComputerBranch/FindAttendenceComputerSecond';
import FindAttendanceComputerThird from '../drawerNav/PastAttandence/ComputerBranch/FindAttendenceComputerThird';
import FindAttendanceComputerFourth from '../drawerNav/PastAttandence/ComputerBranch/FindAttendenceComputerFourth';
import FindAttendanceComputerFifth from '../drawerNav/PastAttandence/ComputerBranch/FindAttendenceComputerFifth';
import FindAttendanceComputerSixth from '../drawerNav/PastAttandence/ComputerBranch/FindAttendenceComputerSixth';
import AttendenceComputerTodayFifth from '../drawerNav/ComputerBranch/TodayAttandence/AttendenceComputerTodayFifth';
import AttendenceComputerTodayFourth from '../drawerNav/ComputerBranch/TodayAttandence/AttendenceComputerTodayFourth';

import StudentFirstAttandenceFirstSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFirstSem/StudentFirstAttandenceFirstSem';
import StudentSecondAttandenceFirstSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFirstSem/StudentSecondAttandenceFirstSem';
import StudentThirdAttandenceFirstSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFirstSem/StudentThirdAttandenceFirstSem';
import StudentFourthAttandenceFirstSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFirstSem/StudentFourthAttandenceFirstSem';
import StudentFifthAttandenceFirstSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFirstSem/StudentFifthAttandenceFirstSem';
import StudentSixthAttandenceFirstSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFirstSem/StudentSixthAttandenceFirstSem';

import AttendenceComputerTodayFirst from '../drawerNav/ComputerBranch/TodayAttandence/AttendenceComputerTodayFirst';
import AttendenceComputerTodaySecond from '../drawerNav/ComputerBranch/TodayAttandence/AttendenceComputerTodaySecond';
import AttendenceComputerTodayThird from '../drawerNav/ComputerBranch/TodayAttandence/AttendenceComputerTodayThird';
import AttendenceComputerTodaySixth from '../drawerNav/ComputerBranch/TodayAttandence/AttendenceComputerTodaySixth';

import StudentFirstAttandenceSecondSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSecondSem/StudentFirstAttandenceSecondSem';
import StudentSecondAttandenceSecondSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSecondSem/StudentSecondAttandenceSecondSem';
import StudentThirdAttandenceSecondSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSecondSem/StudentThirdAttandenceSecondSem';
import StudentFourthAttandenceSecondSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSecondSem/StudentFourthAttandenceSecondSem';
import StudentFifthAttandenceSecondSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSecondSem/StudentFifthAttandenceSecondSem';
import StudentSixthAttandenceSecondSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSecondSem/StudentSixthAttandenceSecondSem';
import StudentFirstAttandenceThirdSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompThirdSem/StudentFirstAttandenceThirdSem';
import StudentSecondAttandenceThirdSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompThirdSem/StudentSecondAttandenceThirdSem';
import StudentThirdAttandenceThirdSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompThirdSem/StudentThirdAttandenceThirdSem';
import StudentFourthAttandenceThirdSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompThirdSem/StudentFourthAttandenceThirdSem';
import StudentFifthAttandenceThirdSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompThirdSem/StudentFifthAttandenceThirdSem';
import StudentSixthAttandenceThirdSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompThirdSem/StudentSixthAttandenceThirdSem';
import StudentFirstAttandenceFourthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFourthSem/StudentFirstAttandenceFourthSem';
import StudentSecondAttandenceFourthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFourthSem/StudentSecondAttandenceFourthSem';
import StudentThirdAttandenceFourthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFourthSem/StudentThirdAttandenceFourthSem';
import StudentFourthAttandenceFourthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFourthSem/StudentFourthAttandenceFourthSem';
import StudentFifthAttandenceFourthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFourthSem/StudentFifthAttandenceFourthSem';
import StudentSixthAttandenceFourthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFourthSem/StudentSixthAttandenceFourthSem';
import StudentFirstAttandenceFifthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFifthSem/StudentFirstAttandenceFourthSem';
import StudentSecondAttandenceFifthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFifthSem/StudentSecondAttandenceFourthSem';
import StudentThirdAttandenceFifthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFifthSem/StudentThirdAttandenceFourthSem';
import StudentFourthAttandenceFifthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFifthSem/StudentFourthAttandenceFourthSem';
import StudentFifthAttandenceFifthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFifthSem/StudentFifthAttandenceFifthSem';
import StudentSixthAttandenceFifthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFifthSem/StudentSixthAttandenceFourthSem';
import StudentFirstAttandenceSixthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSixthSem/StudentFirstAttandenceSixthSem';
import StudentSecondAttandenceSixthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSixthSem/StudentSecondAttandenceSixthSem';
import StudentThirdAttandenceSixthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSixthSem/StudentThirdAttandenceFourthSem';
import StudentFourthAttandenceSixthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSixthSem/StudentFourthAttandenceSixthSem';
import StudentFifthAttandenceSixthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSixthSem/StudentFifthAttandenceSixthSem';
import StudentSixthAttandenceSixthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSixthSem/StudentSixthAttandenceFourthSem';
import PastAttandenceCompFirstSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFirstSem/PastAttandence/PastAttandenceCompFirstSem';
import PastAttandenceCompSecondSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSecondSem/PastAttandence/PastAttandenceCompSecondSem';
import PastAttandenceCompThirdSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompThirdSem/PastAttandence/PastAttandenceCompThirdSem';
import PastAttandenceCompFourthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFourthSem/PastAttandence/PastAttandenceCompFourthSem';
import PastAttandenceCompFifthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompFifthSem/PastAttandence/PastAttandenceCompFifthSem';
import PastAttandenceCompSixthSem from '../drawerNav/ComputerBranch/PeroidWiseAttandanceCompSixthSem/PastAttandence/PastAttandenceCompSixthSem';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading process
    setTimeout(() => {
      // After 3000 milliseconds (3 seconds), set isLoading to false
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        
        {isLoading ? <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />:null
        }
      
        {/*These are used for LOGIN */}
        <Stack.Screen name='Login' component={Login} options={{ headerStyle: { backgroundColor: '#FFFFFF' } ,headerTitle:'Chhotu Ram Polytechnic',headerTintColor:'black',headerTitleAlign:'center'}} />
        <Stack.Screen name='Create an Account' component={Create} options={{ headerStyle: { backgroundColor: 'lavender' } }} />
        <Stack.Screen name='Forget Password' component={Forget} options={{ headerStyle: { backgroundColor: 'lavender' } }} />
        <Stack.Screen name='MainDrawer' component={MainDrawer} options={{ headerShown: false, headerStyle: { backgroundColor: 'lavender' } }} />
        <Stack.Screen name="Admin Page" component={AdminNav} options={{ headerShown: false }} />

        {/*These are used for COURSES*/}

        <Stack.Screen name='Computer Branch' component={Computer} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Civil Branch' component={Civil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Electrical Branch' component={Electrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Electronics Branch' component={Elecronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Mechanical Branch' component={Mechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Plastic Branch' component={Plastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        { /*These are used for Attendence layout */}
        
        <Stack.Screen name='Add Student' component={AddStudent} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Student Data' component={StudentData} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Take Attendence' component={TakeAttendence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Calender' component={CalenderTry} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='1st Sem Computer' component={FirstSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='2nd Sem Computer' component={SecondSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='3rd Sem Computer' component={ThirdSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='4th Sem Computer' component={FourthSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='5th Sem Computer' component={FifthSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Computer Attendence */}
        <Stack.Screen name='Computer 1st sem' component={First} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 2nd sem' component={Second} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 3rd sem' component={Third} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 4th sem' component={Fourth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 5th sem' component={Fifth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 6th sem' component={Sixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        {/*These are used for Computer peroid Attendence Sixth  "ADMIN"*/}
        <Stack.Screen name='First Peroid Sixth' component={FirstPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Sixth' component={SecondPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Sixth' component={ThirdPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Sixth' component={FourthPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Sixth' component={FifthPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Sixth' component={SixthPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        {/*These are used for Computer peroid Attendence First "ADMIN" */}
        <Stack.Screen name='First Peroid First' component={FirstPeroidFirst} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid First' component={SecondPeroidFirst} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid First' component={ThirdPeroidFirst} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid First' component={FourthPeroidFirst} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid First' component={FifthPeroidFirst} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid First' component={SixthPeroidFirst} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Computer peroid Attendence Second "ADMIN"*/}
        <Stack.Screen name='First Peroid Second' component={FirstPeroidSecond} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Second' component={SecondPeroidSecond} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Second' component={ThirdPeroidSecond} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Second' component={FourthPeroidSecond} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Second' component={FifthPeroidSecond} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Second' component={SixthPeroidSecond} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Computer peroid Attendence Third "ADMIN"*/}
        <Stack.Screen name='First Peroid Third' component={FirstPeroidThird} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Third' component={SecondPeroidThird} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Third' component={ThirdPeroidThird} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Third' component={FourthPeroidThird} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Third' component={FifthPeroidThird} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Third' component={SixthPeroidThird} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Computer peroid Attendence Fourth "ADMIN" */}
        <Stack.Screen name='First Peroid Fourth' component={FirstPeroidFourth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fourth' component={SecondPeroidFourth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fourth' component={ThirdPeroidFourth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fourth' component={FourthPeroidFourth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fourth' component={FifthPeroidFourth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fourth' component={SixthPeroidFourth} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Computer peroid Attendence Fifth "ADMIN" */}
        <Stack.Screen name='First Peroid Fifth' component={FirstPeroidFifth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fifth' component={SecondPeroidFifth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fifth' component={ThirdPeroidFifth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fifth' component={FourthPeroidFifth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fifth' component={FifthPeroidFifth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fifth' component={SixthPeroidFifth} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Computer peroid Attendence "Student" */}
        <Stack.Screen name='Computer 1st Sem' component={FindAttendanceComputerFirst} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 2nd Sem' component={FindAttendanceComputerSecond} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 3rd Sem' component={FindAttendanceComputerThird} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 4th Sem' component={FindAttendanceComputerFourth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 5th Sem' component={FindAttendanceComputerFifth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 6th Sem' component={FindAttendanceComputerSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />

        <Stack.Screen name='Attendence Computer 6th' component={AttendanceSecondPage} options={{ headerStyle: { backgroundColor: '#c8b1ff' },headerTintColor:'white' }} />
        <Stack.Screen name='Todays Attendance' component={Attendence} options={{ headerStyle: { backgroundColor: '#c8b1ff' },headerTintColor:'white' }} />
        
        <Stack.Screen name='First Period Attandence' component={StudentFirstAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Period Attandence' component={StudentSecondAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Period Attandence' component={StudentThirdAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Period Attandence' component={StudentFourthAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Period Attandence' component={StudentFifthAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Period Attandence' component={StudentSixthAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        
        
        <Stack.Screen name='Past Attandence' component={PastAttandnce} options={{ headerStyle: { backgroundColor: '#c8b1ff' } ,headerTintColor:'white'}} />
        <Stack.Screen name='Find Attandence' component={FindAttendence} options={{ headerStyle: { backgroundColor: '#c8b1ff' } ,headerTintColor:'white'}} />
      
        <Stack.Screen name = "Computer Branch Question Paper" component={ComputerQues} />
        <Stack.Screen name = "Civil Branch Question Paper" component={CivilQues} />
        <Stack.Screen name = "Mechanical Branch Question Paper" component={MechanicalQues} />
        <Stack.Screen name = "Electrical Branch Question Paper" component={ElectricalQues} />
        <Stack.Screen name = "Electronics Branch Question Paper" component={ElecronicsQues} />
        <Stack.Screen name = "Plastic Branch Question Paper" component={PlasticQues} />

                                  {/*  Computer Branch SCreens*/}
        <Stack.Screen name = "Attandence Computer 1st" component={AttendanceComputerFirst}/>
        <Stack.Screen name = "Attandence Computer 2nd" component={AttendanceComputerSecond}/>
        <Stack.Screen name = "Attandence Computer 3rd" component={AttendanceComputerThird}/>
        <Stack.Screen name = "Attandence Computer 4th" component={AttendanceComputerFourth}/>
        <Stack.Screen name = "Attandence Computer 5th" component={AttendanceComputerFifth}/>

        <Stack.Screen name = "Today Sem 1 Computer" component={AttendenceComputerTodayFirst}/>
        <Stack.Screen name = "Today Sem 2 Computer" component={AttendenceComputerTodaySecond}/>
        <Stack.Screen name = "Today Sem 3 Computer" component={AttendenceComputerTodayThird}/>
        <Stack.Screen name = "Today Sem 4 Computer" component={AttendenceComputerTodayFourth}/>
        <Stack.Screen name = "Today Sem 5 Computer" component={AttendenceComputerTodayFifth}/>
        <Stack.Screen name = "Today Sem 6 Computer" component={AttendenceComputerTodaySixth}/>
        
        {/* this is peroid wise 1st sem attentendce screen*/} 
        <Stack.Screen name = "Attandence Computer 1st Peroid" component={StudentFirstAttandenceFirstSem}/>
        <Stack.Screen name = "Attandence Computer 2nd Peroid" component={StudentSecondAttandenceFirstSem}/>
        <Stack.Screen name = "Attandence Computer 3rd Peroid" component={StudentThirdAttandenceFirstSem}/>
        <Stack.Screen name = "Attandence Computer 4th Peroid" component={StudentFourthAttandenceFirstSem}/>
        <Stack.Screen name = "Attandence Computer 5th Peroid" component={StudentFifthAttandenceFirstSem}/>
        <Stack.Screen name = "Attandence Computer 6th Peroid" component={StudentSixthAttandenceFirstSem}/>
        {/* this is peroid wise 2nd sem attentendce screen*/} 
        <Stack.Screen name = "2nd Sem Computer 1st Peroid" component={StudentFirstAttandenceSecondSem}/>
        <Stack.Screen name = "2nd Sem Computer 2nd Peroid" component={StudentSecondAttandenceSecondSem}/>
        <Stack.Screen name = "2nd Sem Computer 3rd Peroid" component={StudentThirdAttandenceSecondSem}/>
        <Stack.Screen name = "2nd Sem Computer 4th Peroid" component={StudentFourthAttandenceSecondSem}/>
        <Stack.Screen name = "2nd Sem Computer 5th Peroid" component={StudentFifthAttandenceSecondSem}/>
        <Stack.Screen name = "2nd Sem Computer 6th Peroid" component={StudentSixthAttandenceSecondSem}/>
        {/* this is peroid wise 3rd sem attentendce screen*/} 
        <Stack.Screen name = "3rd Sem Computer 1st Peroid" component={StudentFirstAttandenceThirdSem}/>
        <Stack.Screen name = "3rd Sem Computer 2nd Peroid" component={StudentSecondAttandenceThirdSem}/>
        <Stack.Screen name = "3rd Sem Computer 3rd Peroid" component={StudentThirdAttandenceThirdSem}/>
        <Stack.Screen name = "3rd Sem Computer 4th Peroid" component={StudentFourthAttandenceThirdSem}/>
        <Stack.Screen name = "3rd Sem Computer 5th Peroid" component={StudentFifthAttandenceThirdSem}/>
        <Stack.Screen name = "3rd Sem Computer 6th Peroid" component={StudentSixthAttandenceThirdSem}/>
        {/* this is peroid wise 4th sem attentendce screen*/} 
        <Stack.Screen name = "4th Sem Computer 1st Peroid" component={StudentFirstAttandenceFourthSem}/>
        <Stack.Screen name = "4th Sem Computer 2nd Peroid" component={StudentSecondAttandenceFourthSem}/>
        <Stack.Screen name = "4th Sem Computer 3rd Peroid" component={StudentThirdAttandenceFourthSem}/>
        <Stack.Screen name = "4th Sem Computer 4th Peroid" component={StudentFourthAttandenceFourthSem}/>
        <Stack.Screen name = "4th Sem Computer 5th Peroid" component={StudentFifthAttandenceFourthSem}/>
        <Stack.Screen name = "4th Sem Computer 6th Peroid" component={StudentSixthAttandenceFourthSem}/>
        {/* this is peroid wise 5th sem attentendce screen*/} 
        <Stack.Screen name = "5th Sem Computer 1st Peroid" component={StudentFirstAttandenceFifthSem}/>
        <Stack.Screen name = "5th Sem Computer 2nd Peroid" component={StudentSecondAttandenceFifthSem}/>
        <Stack.Screen name = "5th Sem Computer 3rd Peroid" component={StudentThirdAttandenceFifthSem}/>
        <Stack.Screen name = "5th Sem Computer 4th Peroid" component={StudentFourthAttandenceFifthSem}/>
        <Stack.Screen name = "5th Sem Computer 5th Peroid" component={StudentFifthAttandenceFifthSem}/>
        <Stack.Screen name = "5th Sem Computer 6th Peroid" component={StudentSixthAttandenceFifthSem}/>
        {/* this is peroid wise 6th sem attentendce screen*/} 
        <Stack.Screen name = "6th Sem Computer 1st Peroid" component={StudentFirstAttandenceSixthSem}/>
        <Stack.Screen name = "6th Sem Computer 2nd Peroid" component={StudentSecondAttandenceSixthSem}/>
        <Stack.Screen name = "6th Sem Computer 3rd Peroid" component={StudentThirdAttandenceSixthSem}/>
        <Stack.Screen name = "6th Sem Computer 4th Peroid" component={StudentFourthAttandenceSixthSem}/>
        <Stack.Screen name = "6th Sem Computer 5th Peroid" component={StudentFifthAttandenceSixthSem}/>
        <Stack.Screen name = "6th Sem Computer 6th Peroid" component={StudentSixthAttandenceSixthSem}/>
        {/* this is peroid wise find attentendce screen*/}
        <Stack.Screen name = "1st Sem Find Attandence" component={FindAttendanceComputerFirst}/>
        <Stack.Screen name = "2nd Sem Find Attandence" component={FindAttendanceComputerSecond}/>
        <Stack.Screen name = "3rd Sem Find Attandence" component={FindAttendanceComputerThird}/>
        <Stack.Screen name = "4th Sem Find Attandence" component={FindAttendanceComputerFourth}/>
        <Stack.Screen name = "5th Sem Find Attandence" component={FindAttendanceComputerFifth}/>
        <Stack.Screen name = "6th Sem Find Attandence" component={FindAttendanceComputerSixth}/>
        {/* this is peroid wise past attentendce screen*/}
        <Stack.Screen name = "1st Sem Past Attandence" component={PastAttandenceCompFirstSem}/>
        <Stack.Screen name = "2nd Sem Past Attandence" component={PastAttandenceCompSecondSem}/>
        <Stack.Screen name = "3rd Sem Past Attandence" component={PastAttandenceCompThirdSem}/>
        <Stack.Screen name = "4th Sem Past Attandence" component={PastAttandenceCompFourthSem}/>
        <Stack.Screen name = "5th Sem Past Attandence" component={PastAttandenceCompFifthSem}/>
        <Stack.Screen name = "6th Sem Past Attandence" component={PastAttandenceCompSixthSem}/>
      </Stack.Navigator>
    </View>
  );
};



export default MainNavigator;