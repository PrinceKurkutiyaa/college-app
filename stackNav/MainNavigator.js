import React, { useState, useEffect } from 'react'
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
import PastAttandenceCompFirstSemAdmin from '../AdminPage/CalenderTry/AdminFirstComp/PastAttandence/PastAttandenceCompFirstSemAdmin/';
import PastAttandenceCompSecondSemAdmin from '../AdminPage/CalenderTry/AdminSecondComp/PastAttandence/PastAttandenceCompSecondSemAdmin';
import PastAttandenceCompThirdSemAdmin from '../AdminPage/CalenderTry/AdminThirdComp/PastAttandence/PastAttandenceCompThirdSemAdmin';
import PastAttandenceCompFourthSemAdmin from '../AdminPage/CalenderTry/AdminFourthComp/PastAttandence/PastAttandenceCompFourthSemAdmin';
import PastAttandenceCompFifthSemAdmin from '../AdminPage/CalenderTry/AdminFifthComp/PastAttandence/PastAttandenceCompFifthSemAdmin';
import PastAttandenceCompSixthSemAdmin from '../AdminPage/CalenderTry/AdminSixthComp/PastAttandence/PastAttandenceCompSixthSemAdmin';
import FindAttendanceCompFirstSemAdmin from '../AdminPage/CalenderTry/AdminFirstComp/PastAttandence/FindAttendenceCompFirstSemAdmin';
import PastAttendanceCompFirstSemAdmin from '../AdminPage/CalenderTry/AdminFirstComp/PastAttandence/FindAttendenceCompFirstSemAdmin';
import FindAttendanceCompSecondSemAdmin from '../AdminPage/CalenderTry/AdminSecondComp/PastAttandence/FindAttendenceCompSecondSemAdmin';
import FindAttendanceCompThirdSemAdmin from '../AdminPage/CalenderTry/AdminThirdComp/PastAttandence/FindAttendenceCompThirdSemAdmin';
import FindAttendanceCompFourthSemAdmin from '../AdminPage/CalenderTry/AdminFourthComp/PastAttandence/FindAttendenceCompFourthSemAdmin';
import FindAttendanceCompFifthSemAdmin from '../AdminPage/CalenderTry/AdminFifthComp/PastAttandence/FindAttendenceCompFifthSemAdmin';
import FindAttendanceCompSixthSemAdmin from '../AdminPage/CalenderTry/AdminSixthComp/PastAttandence/FindAttendenceCompSixthSemAdmin';
import FirstSemAddDataPlastic from '../AdminPage/AddStudents/PlasticAddStudent/FirstSemAddDataPlastic';
import SecondSemAddDataPlastic from '../AdminPage/AddStudents/PlasticAddStudent/SecondSemAddDataPlastic';
import ThirdSemAddDataPlastic from '../AdminPage/AddStudents/PlasticAddStudent/ThirdSemAddDataPlastic';
import FourthSemAddDataPlastic from '../AdminPage/AddStudents/PlasticAddStudent/FourthSemAddDataPlastic';
import FifthSemAddDataPlastic from '../AdminPage/AddStudents/PlasticAddStudent/FifthSemAddDataPlastic';
import SixthSemAddDataPlastic from '../AdminPage/AddStudents/PlasticAddStudent/SixthSemAddDataPlastic';
import FirstSemAddDataCivil from '../AdminPage/AddStudents/CivilAddStudent/FirstSemAddDataCivil';
import SecondSemAddDataCivil from '../AdminPage/AddStudents/CivilAddStudent/SecondSemAddDataCivil';
import ThirdSemAddDataCivil from '../AdminPage/AddStudents/CivilAddStudent/ThirdSemAddDataCivil';
import FourthSemAddDataCivil from '../AdminPage/AddStudents/CivilAddStudent/FourthSemAddDataCivil';
import FifthSemAddDataCivil from '../AdminPage/AddStudents/CivilAddStudent/FifthSemAddDataCivil';
import SixthSemAddDataCivil from '../AdminPage/AddStudents/CivilAddStudent/SixthSemAddDataCivil';
import FirstSemAddDataElectrical from '../AdminPage/AddStudents/ElectricalAddStudent/FirstSemAddDataElectrical';
import SecondSemAddDataElectrical from '../AdminPage/AddStudents/ElectricalAddStudent/SecondSemAddDataElectrical';
import ThirdSemAddDataElectrical from '../AdminPage/AddStudents/ElectricalAddStudent/ThirdSemAddDataElectrical';
import FourthSemAddDataElectrical from '../AdminPage/AddStudents/ElectricalAddStudent/FourthSemAddDataElectrical';
import FifthSemAddDataElectrical from '../AdminPage/AddStudents/ElectricalAddStudent/FifthSemAddDataElectrical';
import SixthSemAddDataElectrical from '../AdminPage/AddStudents/ElectricalAddStudent/SixthSemAddDataElectrical';
import FirstSemAddDataElectronics from '../AdminPage/AddStudents/ElectronicsAddStudent/FirstSemAddDataElectronics';
import SecondSemAddDataElectronics from '../AdminPage/AddStudents/ElectronicsAddStudent/SecondSemAddDataElectronics';
import ThirdSemAddDataElectronics from '../AdminPage/AddStudents/ElectronicsAddStudent/ThirdSemAddDataElectronics';
import FourthSemAddDataElectronics from '../AdminPage/AddStudents/ElectronicsAddStudent/FourthSemAddDataElectronics';
import FifthSemAddDataElectronics from '../AdminPage/AddStudents/ElectronicsAddStudent/FifthSemAddDataElectronics';
import SixthSemAddDataElectronics from '../AdminPage/AddStudents/ElectronicsAddStudent/SixthSemAddDataElectronics';
import FirstSemAddDataMechanical from '../AdminPage/AddStudents/MechanicalAddStudent/FirstSemAddDataMechanical';
import SecondSemAddDataMechanical from '../AdminPage/AddStudents/MechanicalAddStudent/SecondSemAddDataMechanical';
import ThirdSemAddDataMechanical from '../AdminPage/AddStudents/MechanicalAddStudent/ThirdSemAddDataMechanical';
import FourthSemAddDataMechanical from '../AdminPage/AddStudents/MechanicalAddStudent/FourthSemAddDataMechanical';
import FifthSemAddDataMechanical from '../AdminPage/AddStudents/MechanicalAddStudent/FifthSemAddDataMechanical';
import SixthSemAddDataMechanical from '../AdminPage/AddStudents/MechanicalAddStudent/SixthSemAddDataMechanical';
import FifthPeroidFifthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FifthPeroidWiseMechanical/FifthPeroidFifthMechanical';
import FirstPeroidFifthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FifthPeroidWiseMechanical/FirstPeroidFifthMechanical';
import SecondPeroidFifthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FifthPeroidWiseMechanical/SecondPeroidFifthMechanical';
import ThirdPeroidFifthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FifthPeroidWiseMechanical/ThirdPeroidFifthMechanical';
import FourthPeroidFifthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FifthPeroidWiseMechanical/FourthPeroidFifthMechanical';
import SixthPeroidFifthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FifthPeroidWiseMechanical/SixthPeroidFifthMechanical';
import FirstPeroidFirstMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FirstPeroidWiseMechanical/FirstPeroidFirstMechanical';
import SecondPeroidFirstMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FirstPeroidWiseMechanical/SecondPeroidFirstMechanical';
import ThirdPeroidFirstMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FirstPeroidWiseMechanical/ThirdPeroidFirstMechanical';
import FourthPeroidFirstMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FirstPeroidWiseMechanical/FourthPeroidFirstMechanical';
import FifthPeroidFirstMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FirstPeroidWiseMechanical/FifthPeroidFirstMechanical';
import SixthPeroidFirstMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FirstPeroidWiseMechanical/SixthPeroidFirstMechanical';
import FirstPeroidSecondMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SecondPeroidWiseMechanical/FirstPeroidSecondMechanical';
import SecondPeroidSecondMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SecondPeroidWiseMechanical/SecondPeroidSecondMechanical';
import ThirdPeroidSecondMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SecondPeroidWiseMechanical/ThirdPeroidSecondMechanical';
import FourthPeroidSecondMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SecondPeroidWiseMechanical/FourthPeroidSecondMechanical';
import FifthPeroidSecondMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SecondPeroidWiseMechanical/FifthPeroidSecondMechanical';
import SixthPeroidSecondMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SecondPeroidWiseMechanical/SixthPeroidSecondMechanical';
import FirstPeroidThirdMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/ThirdPeroidWiseMechanical/FirstPeroidThirdMechanical';
import SecondPeroidThirdMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/ThirdPeroidWiseMechanical/SecondPeroidThirdMechanical';
import ThirdPeroidThirdMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/ThirdPeroidWiseMechanical/ThirdPeroidThirdMechanical';
import FourthPeroidThirdMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/ThirdPeroidWiseMechanical/FourthPeroidThirdMechanical';
import FifthPeroidThirdMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/ThirdPeroidWiseMechanical/FifthPeroidThirdMechanical';
import SixthPeroidThirdMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/ThirdPeroidWiseMechanical/SixthPeroidThirdMechanical';
import FirstPeroidFourthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FourthPeroidWiseMechanical/FirstPeroidFourthMechanical';
import SecondPeroidFourthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FourthPeroidWiseMechanical/SecondPeroidFourthMechanical';
import ThirdPeroidFourthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FourthPeroidWiseMechanical/ThirdPeroidFourthMechanical';
import FourthPeroidFourthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FourthPeroidWiseMechanical/FourthPeroidFourthMechanical';
import FifthPeroidFourthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FourthPeroidWiseMechanical/FifthPeroidFourthMechanical';
import SixthPeroidFourthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/FourthPeroidWiseMechanical/SixthPeroidFourthMechanical';
import FirstPeroidSixthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SixthPeroidWiseMechanical/FirstPeroidSixthMechanical';
import SecondPeroidSixthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SixthPeroidWiseMechanical/SecondPeroidSixthMechanical';
import ThirdPeroidSixthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SixthPeroidWiseMechanical/ThirdPeroidSixthMechanical';
import FourthPeroidSixthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SixthPeroidWiseMechanical/FourthPeroidSixthMechanical';
import FifthPeroidSixthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SixthPeroidWiseMechanical/FifthPeroidSixthMechanical';
import SixthPeroidSixthMechanical from '../AdminPage/AttandanceFolder/MechanicalBranch/SixthPeroidWiseMechanical/SixthPeroidSixthMechanical';
import FirstPeroidFirstPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FirstPeroidWisePlastic/FirstPeroidFirstPlastic';
import SecondPeroidFirstPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FirstPeroidWisePlastic/SecondPeroidFirstPlastic';
import ThirdPeroidFirstPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FirstPeroidWisePlastic/ThirdPeroidFirstPlastic';
import FourthPeroidFirstPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FirstPeroidWisePlastic/FourthPeroidFirstPlastic';
import FifthPeroidFirstPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FirstPeroidWisePlastic/FifthPeroidFirstPlastic';
import SixthPeroidFirstPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FirstPeroidWisePlastic/SixthPeroidFirstPlastic';
import SixthPeroidSecondPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SecondPeroidWisePlastic/SixthPeroidSecondPlastic';
import FifthPeroidSecondPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SecondPeroidWisePlastic/FifthPeroidSecondPlastic';
import FourthPeroidSecondPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SecondPeroidWisePlastic/FourthPeroidSecondPlastic';
import ThirdPeroidSecondPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SecondPeroidWisePlastic/ThirdPeroidSecondPlastic';
import SecondPeroidSecondPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SecondPeroidWisePlastic/SecondPeroidSecondPlastic';
import FirstPeroidSecondPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SecondPeroidWisePlastic/FirstPeroidSecondPlastic';
import SixthPeroidThirdPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/ThirdPeroidWisePlastic/SixthPeroidThirdPlastic';
import FifthPeroidThirdPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/ThirdPeroidWisePlastic/FifthPeroidThirdPlastic';
import FourthPeroidThirdPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/ThirdPeroidWisePlastic/FourthPeroidThirdPlastic';
import ThirdPeroidThirdPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/ThirdPeroidWisePlastic/ThirdPeroidThirdPlastic';
import SecondPeroidThirdPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/ThirdPeroidWisePlastic/SecondPeroidThirdPlastic';
import FirstPeroidThirdPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/ThirdPeroidWisePlastic/FirstPeroidThirdPlastic';
import SixthPeroidFourthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FourthPeroidWisePlastic/SixthPeroidFourthPlastic';
import FifthPeroidFourthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FourthPeroidWisePlastic/FifthPeroidFourthPlastic';
import FourthPeroidFourthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FourthPeroidWisePlastic/FourthPeroidFourthPlastic';
import ThirdPeroidFourthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FourthPeroidWisePlastic/ThirdPeroidFourthPlastic';
import SecondPeroidFourthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FourthPeroidWisePlastic/SecondPeroidFourthPlastic';
import FirstPeroidFourthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FourthPeroidWisePlastic/FirstPeroidFourthPlastic';
import SixthPeroidFifthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FifthPeroidWisePlastic/SixthPeroidFifthPlastic';
import FifthPeroidFifthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FifthPeroidWisePlastic/FifthPeroidFifthPlastic';
import FourthPeroidFifthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FifthPeroidWisePlastic/FourthPeroidFifthPlastic';
import ThirdPeroidFifthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FifthPeroidWisePlastic/ThirdPeroidFifthPlastic';
import SecondPeroidFifthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FifthPeroidWisePlastic/SecondPeroidFifthPlastic';
import FirstPeroidFifthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/FifthPeroidWisePlastic/FirstPeroidFifthPlastic';
import SixthPeroidSixthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SixthPeroidWisePlastic/SixthPeroidSixthPlastic';
import FifthPeroidSixthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SixthPeroidWisePlastic/FifthPeroidSixthPlastic';
import FourthPeroidSixthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SixthPeroidWisePlastic/FourthPeroidSixthPlastic';
import ThirdPeroidSixthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SixthPeroidWisePlastic/ThirdPeroidSixthPlastic';
import SecondPeroidSixthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SixthPeroidWisePlastic/SecondPeroidSixthPlastic';
import FirstPeroidSixthPlastic from '../AdminPage/AttandanceFolder/PlasticBranch/SixthPeroidWisePlastic/FirstPeroidSixthPlastic';
import SixthPeroidFirstCivil from '../AdminPage/AttandanceFolder/CivilBranch/FirstPeroidWiseCivil/SixthPeroidFirstCivil';
import FifthPeroidFirstCivil from '../AdminPage/AttandanceFolder/CivilBranch/FirstPeroidWiseCivil/FifthPeroidFirstCivil';
import FourthPeroidFirstCivil from '../AdminPage/AttandanceFolder/CivilBranch/FirstPeroidWiseCivil/FourthPeroidFirstCivil';
import ThirdPeroidFirstCivil from '../AdminPage/AttandanceFolder/CivilBranch/FirstPeroidWiseCivil/ThirdPeroidFirstCivil';
import SecondPeroidFirstCivil from '../AdminPage/AttandanceFolder/CivilBranch/FirstPeroidWiseCivil/SecondPeroidFirstCivil';
import FirstPeroidFirstCivil from '../AdminPage/AttandanceFolder/CivilBranch/FirstPeroidWiseCivil/FirstPeroidFirstCivil';
import SixthPeroidSecondCivil from '../AdminPage/AttandanceFolder/CivilBranch/SecondPeroidWiseCivil/SixthPeroidSecondCivil';
import FifthPeroidSecondCivil from '../AdminPage/AttandanceFolder/CivilBranch/SecondPeroidWiseCivil/FifthPeroidSecondCivil';
import FourthPeroidSecondCivil from '../AdminPage/AttandanceFolder/CivilBranch/SecondPeroidWiseCivil/FourthPeroidSecondCivil';
import ThirdPeroidSecondCivil from '../AdminPage/AttandanceFolder/CivilBranch/SecondPeroidWiseCivil/ThirdPeroidSecondCivil';
import SecondPeroidSecondCivil from '../AdminPage/AttandanceFolder/CivilBranch/SecondPeroidWiseCivil/SecondPeroidSecondCivil';
import FirstPeroidSecondCivil from '../AdminPage/AttandanceFolder/CivilBranch/SecondPeroidWiseCivil/FirstPeroidSecondCivil';
import FirstPeroidThirdCivil from '../AdminPage/AttandanceFolder/CivilBranch/ThirdPeroidWiseCivil/FirstPeroidThirdCivil';
import SecondPeroidThirdCivil from '../AdminPage/AttandanceFolder/CivilBranch/ThirdPeroidWiseCivil/SecondPeroidThirdCivil';
import ThirdPeroidThirdCivil from '../AdminPage/AttandanceFolder/CivilBranch/ThirdPeroidWiseCivil/ThirdPeroidThirdCivil';
import FourthPeroidThirdCivil from '../AdminPage/AttandanceFolder/CivilBranch/ThirdPeroidWiseCivil/FourthPeroidThirdCivil';
import FifthPeroidThirdCivil from '../AdminPage/AttandanceFolder/CivilBranch/ThirdPeroidWiseCivil/FifthPeroidThirdCivil';
import SixthPeroidThirdCivil from '../AdminPage/AttandanceFolder/CivilBranch/ThirdPeroidWiseCivil/SixthPeroidThirdCivil';
import FirstPeroidFourthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FourthPeroidWiseCivil/FirstPeroidFourthCivil';
import SecondPeroidFourthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FourthPeroidWiseCivil/SecondPeroidFourthCivil';
import ThirdPeroidFourthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FourthPeroidWiseCivil/ThirdPeroidFourthCivil';
import FourthPeroidFourthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FourthPeroidWiseCivil/FourthPeroidFourthCivil';
import FifthPeroidFourthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FourthPeroidWiseCivil/FifthPeroidFourthCivil';
import SixthPeroidFourthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FourthPeroidWiseCivil/SixthPeroidFourthCivil';
import FirstPeroidFifthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FifthPeroidWiseCivil/FirstPeroidFifthCivil';
import SecondPeroidFifthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FifthPeroidWiseCivil/SecondPeroidFifthCivil';
import ThirdPeroidFifthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FifthPeroidWiseCivil/ThirdPeroidFifthCivil';
import FourthPeroidFifthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FifthPeroidWiseCivil/FourthPeroidFifthCivil';
import FifthPeroidFifthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FifthPeroidWiseCivil/FifthPeroidFifthCivil';
import SixthPeroidFifthCivil from '../AdminPage/AttandanceFolder/CivilBranch/FifthPeroidWiseCivil/SixthPeroidFifthCivil';
import FirstPeroidSixthCivil from '../AdminPage/AttandanceFolder/CivilBranch/SixthPeroidWiseCivil/FirstPeroidSixthCivil';
import SecondPeroidSixthCivil from '../AdminPage/AttandanceFolder/CivilBranch/SixthPeroidWiseCivil/SecondPeroidSixthCivil';
import ThirdPeroidSixthCivil from '../AdminPage/AttandanceFolder/CivilBranch/SixthPeroidWiseCivil/ThirdPeroidSixthCivil';
import FourthPeroidSixthCivil from '../AdminPage/AttandanceFolder/CivilBranch/SixthPeroidWiseCivil/FourthPeroidSixthCivil';
import FifthPeroidSixthCivil from '../AdminPage/AttandanceFolder/CivilBranch/SixthPeroidWiseCivil/FifthPeroidSixthCivil';
import SixthPeroidSixthCivil from '../AdminPage/AttandanceFolder/CivilBranch/SixthPeroidWiseCivil/SixthPeroidSixthCivil';
import FirstPeroidFirstElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FirstPeroidWiseElectronics/FirstPeroidFirstElectronics';
import FirstPeroidFirstElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FirstPeroidWiseElectrical/FirstPeroidFirstElectrical';
import SecondPeroidFirstElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FirstPeroidWiseElectrical/SecondPeroidFirstElectrical';
import ThirdPeroidFirstElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FirstPeroidWiseElectrical/ThirdPeroidFirstElectrical';
import FourthPeroidFirstElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FirstPeroidWiseElectrical/FourthPeroidFirstElectrical';
import FifthPeroidFirstElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FirstPeroidWiseElectrical/FifthPeroidFirstElectrical';
import SixthPeroidFirstElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FirstPeroidWiseElectrical/SixthPeroidFirstElectrical';
import FirstPeroidSecondElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SecondPeroidWiseElectrical/FirstPeroidSecondElectrical';
import SecondPeroidSecondElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SecondPeroidWiseElectrical/SecondPeroidSecondElectrical';
import ThirdPeroidSecondElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SecondPeroidWiseElectrical/ThirdPeroidSecondElectrical';
import FourthPeroidSecondElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SecondPeroidWiseElectrical/FourthPeroidSecondElectrical';
import FifthPeroidSecondElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SecondPeroidWiseElectrical/FifthPeroidSecondElectrical';
import SixthPeroidSecondElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SecondPeroidWiseElectrical/SixthPeroidSecondElectrical';
import FirstPeroidThirdElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/ThirdPeroidWiseElectrical/FirstPeroidThirdElectrical';
import SecondPeroidThirdElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/ThirdPeroidWiseElectrical/SecondPeroidThirdElectrical';
import ThirdPeroidThirdElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/ThirdPeroidWiseElectrical/ThirdPeroidThirdElectrical';
import FourthPeroidThirdElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/ThirdPeroidWiseElectrical/FourthPeroidThirdElectrical';
import FifthPeroidThirdElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/ThirdPeroidWiseElectrical/FifthPeroidThirdElectrical';
import SixthPeroidThirdElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/ThirdPeroidWiseElectrical/SixthPeroidThirdElectrical';
import FirstPeroidFourthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FourthPeroidWiseElectrical/FirstPeroidFourthElectrical';
import SecondPeroidFourthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FourthPeroidWiseElectrical/SecondPeroidFourthElectrical';
import ThirdPeroidFourthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FourthPeroidWiseElectrical/ThirdPeroidFourthElectrical';
import FourthPeroidFourthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FourthPeroidWiseElectrical/FourthPeroidFourthElectrical';
import FifthPeroidFourthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FourthPeroidWiseElectrical/FifthPeroidFourthElectrical';
import SixthPeroidFourthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FourthPeroidWiseElectrical/SixthPeroidFourthElectrical';
import FirstPeroidFifthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FifthPeroidWiseElectrical/FirstPeroidFifthElectrical';
import SecondPeroidFifthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FifthPeroidWiseElectrical/SecondPeroidFifthElectrical';
import ThirdPeroidFifthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FifthPeroidWiseElectrical/ThirdPeroidFifthElectrical';
import FourthPeroidFifthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FifthPeroidWiseElectrical/FourthPeroidFifthElectrical';
import FifthPeroidFifthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FifthPeroidWiseElectrical/FifthPeroidFifthElectrical';
import SixthPeroidFifthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/FifthPeroidWiseElectrical/SixthPeroidFifthElectrical';
import FirstPeroidSixthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SixthPeroidWiseElectrical/FirstPeroidSixthElectrical';
import SecondPeroidSixthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SixthPeroidWiseElectrical/SecondPeroidSixthElectrical';
import ThirdPeroidSixthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SixthPeroidWiseElectrical/ThirdPeroidSixthElectrical';
import FourthPeroidSixthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SixthPeroidWiseElectrical/FourthPeroidSixthElectrical';
import FifthPeroidSixthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SixthPeroidWiseElectrical/FifthPeroidSixthElectrical';
import SixthPeroidSixthElectrical from '../AdminPage/AttandanceFolder/ElectricalBranch/SixthPeroidWiseElectrical/SixthPeroidSixthElectrical';
import SecondPeroidFirstElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FirstPeroidWiseElectronics/SecondPeroidFirstElectronics';
import ThirdPeroidFirstElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FirstPeroidWiseElectronics/ThirdPeroidFirstElectronics';
import FourthPeroidFirstElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FirstPeroidWiseElectronics/FourthPeroidFirstElectronics';
import FifthPeroidFirstElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FirstPeroidWiseElectronics/FifthPeroidFirstElectronics';
import SixthPeroidFirstElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FirstPeroidWiseElectronics/SixthPeroidFirstElectronics';
import FirstPeroidSecondElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SecondPeroidWiseElectronics/FirstPeroidSecondElectronics';
import SecondPeroidSecondElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SecondPeroidWiseElectronics/SecondPeroidSecondElectronics';
import ThirdPeroidSecondElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SecondPeroidWiseElectronics/ThirdPeroidSecondElectronics';
import FourthPeroidSecondElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SecondPeroidWiseElectronics/FourthPeroidSecondElectronics';
import FifthPeroidSecondElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SecondPeroidWiseElectronics/FifthPeroidSecondElectronics';
import SixthPeroidSecondElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SecondPeroidWiseElectronics/SixthPeroidSecondElectronics';
import FirstPeroidThirdElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/ThirdPeroidWiseElectronics/FirstPeroidThirdElectronics';
import SecondPeroidThirdElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/ThirdPeroidWiseElectronics/SecondPeroidThirdElectronics';
import ThirdPeroidThirdElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/ThirdPeroidWiseElectronics/ThirdPeroidThirdElectronics';
import FourthPeroidThirdElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/ThirdPeroidWiseElectronics/FourthPeroidThirdElectronics';
import FifthPeroidThirdElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/ThirdPeroidWiseElectronics/FifthPeroidThirdElectronics';
import SixthPeroidThirdElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/ThirdPeroidWiseElectronics/SixthPeroidThirdElectronics';
import FirstPeroidFourthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FourthPeroidWiseElectronics/FirstPeroidFourthElectronics';
import SecondPeroidFourthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FourthPeroidWiseElectronics/SecondPeroidFourthElectronics';
import ThirdPeroidFourthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FourthPeroidWiseElectronics/ThirdPeroidFourthElectronics';
import FourthPeroidFourthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FourthPeroidWiseElectronics/FourthPeroidFourthElectronics';
import FifthPeroidFourthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FourthPeroidWiseElectronics/FifthPeroidFourthElectronics';
import SixthPeroidFourthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FourthPeroidWiseElectronics/SixthPeroidFourthElectronics';
import FirstPeroidFifthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FifthPeroidWiseElectronics/FirstPeroidFifthElectronics';
import SecondPeroidFifthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FifthPeroidWiseElectronics/SecondPeroidFifthElectronics';
import ThirdPeroidFifthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FifthPeroidWiseElectronics/ThirdPeroidFifthElectronics';
import FourthPeroidFifthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FifthPeroidWiseElectronics/FourthPeroidFifthElectronics';
import FifthPeroidFifthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FifthPeroidWiseElectronics/FifthPeroidFifthElectronics';
import SixthPeroidFifthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/FifthPeroidWiseElectronics/SixthPeroidFifthElectronics';
import FirstPeroidSixthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SixthPeroidWiseElectronics/FirstPeroidSixthElectronics';
import SecondPeroidSixthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SixthPeroidWiseElectronics/SecondPeroidSixthElectronics';
import ThirdPeroidSixthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SixthPeroidWiseElectronics/ThirdPeroidSixthElectronics';
import FourthPeroidSixthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SixthPeroidWiseElectronics/FourthPeroidSixthElectronics';
import FifthPeroidSixthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SixthPeroidWiseElectronics/FifthPeroidSixthElectronics';
import SixthPeroidSixthElectronics from '../AdminPage/AttandanceFolder/ElectronicsBranch/SixthPeroidWiseElectronics/SixthPeroidSixthElectronics';
import PastAttandenceCivilFirstSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminFirstCivil/PastAttandence/PastAttandenceCivilFirstSemAdmin';
import PastAttandenceCivilSecondSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminSecondCivil/PastAttandence/PastAttandenceCivilSecondSemAdmin';
import PastAttandenceCivilThirdSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminThirdCivil/PastAttandence/PastAttandenceCivilThirdSemAdmin';
import PastAttandenceCivilFourthSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminFourthCivil/PastAttandence/PastAttandenceCivilFourthSemAdmin';
import PastAttandenceCivilFifthSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminFifthCivil/PastAttandence/PastAttandenceCivilFifthSemAdmin';
import PastAttandenceCivilSixthSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminSixthCivil/PastAttandence/PastAttandenceCivilSixthSemAdmin';
import FindAttendanceCivilFirstSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminFirstCivil/PastAttandence/FindAttendenceCivilFirstSemAdmin';
import FindAttendanceCivilSecondSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminSecondCivil/PastAttandence/FindAttendenceCivilSecondSemAdmin';
import FindAttendanceCivilThirdSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminThirdCivil/PastAttandence/FindAttendenceCivilThirdSemAdmin';
import FindAttendanceCivilFourthSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminFourthCivil/PastAttandence/FindAttendenceCivilFourthSemAdmin';
import FindAttendanceCivilFifthSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminFifthCivil/PastAttandence/FindAttendenceCivilFifthSemAdmin';
import FindAttendanceCivilSixthSemAdmin from '../AdminPage/CalenderTry/CivilBranch/AdminSixthCivil/PastAttandence/FindAttendenceCivilSixthSemAdmin';
import PastAttandenceMechanicalFirstSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminFirstMechanical/PastAttandence/PastAttandenceMechanicalFirstSemAdmin';
import PastAttandenceMechanicalSecondSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminSecondMechanical/PastAttandence/PastAttandenceMechanicalSecondSemAdmin';
import PastAttandenceMechanicalThirdSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminThirdMechanical/PastAttandence/PastAttandenceMechanicalThirdSemAdmin';
import PastAttandenceMechanicalFourthSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminFourthMechanical/PastAttandence/PastAttandenceMechanicalFourthSemAdmin';
import PastAttandenceMechanicalFifthSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminFifthMechanical/PastAttandence/PastAttandenceMechanicalFifthSemAdmin';
import PastAttandenceMechanicalSixthSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminSixthMechanical/PastAttandence/PastAttandenceMechanicalSixthSemAdmin';
import FindAttendanceMechanicalFirstSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminFirstMechanical/PastAttandence/FindAttendenceMechanicalFirstSemAdmin';
import FindAttendanceMechanicalSecondSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminSecondMechanical/PastAttandence/FindAttendenceMechanicalSecondSemAdmin';
import FindAttendanceMechanicalThirdSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminThirdMechanical/PastAttandence/FindAttendenceMechanicalThirdSemAdmin';
import FindAttendanceMechanicalFourthSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminFourthMechanical/PastAttandence/FindAttendenceMechanicalFourthSemAdmin';
import FindAttendanceMechanicalFifthSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminFifthMechanical/PastAttandence/FindAttendenceMechanicalFifthSemAdmin';
import FindAttendanceMechanicalSixthSemAdmin from '../AdminPage/CalenderTry/MechanicalBranch/AdminSixthMechanical/PastAttandence/FindAttendenceMechanicalSixthSemAdmin';
import PastAttandenceElectronicsFirstSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminFirstElectronics/PastAttandence/PastAttandenceElectronicsFirstSemAdmin';
import PastAttandenceElectronicsSecondSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminSecondElectronics/PastAttandence/PastAttandenceElectronicsSecondSemAdmin';
import PastAttandenceElectronicsThirdSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminThirdElectronics/PastAttandence/PastAttandenceElectronicsThirdSemAdmin';
import PastAttandenceElectronicsFourthSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminFourthElectronics/PastAttandence/PastAttandenceElectronicsFourthSemAdmin';
import PastAttandenceElectronicsFifthSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminFifthElectronics/PastAttandence/PastAttandenceElectronicsFifthSemAdmin';
import PastAttandenceElectronicsSixthSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminSixthElectronics/PastAttandence/PastAttandenceElectronicsSixthSemAdmin';
import FindAttendanceElectronicsFirstSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminFirstElectronics/PastAttandence/FindAttendenceElectronicsFirstSemAdmin';
import FindAttendanceElectronicsSecondSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminSecondElectronics/PastAttandence/FindAttendenceElectronicsSecondSemAdmin';
import FindAttendanceElectronicsThirdSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminThirdElectronics/PastAttandence/FindAttendenceElectronicsThirdSemAdmin';
import FindAttendanceElectronicsFourthSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminFourthElectronics/PastAttandence/FindAttendenceElectronicsFourthSemAdmin';
import FindAttendanceElectronicsFifthSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminFifthElectronics/PastAttandence/FindAttendenceElectronicsFifthSemAdmin';
import FindAttendanceElectronicsSixthSemAdmin from '../AdminPage/CalenderTry/ElectronicsBranch/AdminSixthElectronics/PastAttandence/FindAttendenceElectronicsSixthSemAdmin';
import PastAttandenceElectricalFirstSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminFirstElectrical/PastAttandence/PastAttandenceElectricalFirstSemAdmin';
import PastAttandenceElectricalSecondSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminSecondElectrical/PastAttandence/PastAttandenceElectricalSecondSemAdmin';
import PastAttandenceElectricalThirdSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminThirdElectrical/PastAttandence/PastAttandenceElectricalThirdSemAdmin';
import PastAttandenceElectricalFourthSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminFourthElectrical/PastAttandence/PastAttandenceElectricalFourthSemAdmin';
import PastAttandenceElectricalFifthSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminFifthElectrical/PastAttandence/PastAttandenceElectricalFifthSemAdmin';
import PastAttandenceElectricalSixthSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminSixthElectrical/PastAttandence/PastAttandenceElectricalSixthSemAdmin';
import FindAttendanceElectricalFirstSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminFirstElectrical/PastAttandence/FindAttendenceElectricalFirstSemAdmin';
import FindAttendanceElectricalSecondSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminSecondElectrical/PastAttandence/FindAttendenceElectricalSecondSemAdmin';
import FindAttendanceElectricalSixthSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminSixthElectrical/PastAttandence/FindAttendenceElectricalSixthSemAdmin';
import FindAttendanceElectricalFifthSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminFifthElectrical/PastAttandence/FindAttendenceElectricalFifthSemAdmin';
import FindAttendanceElectricalFourthSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminFourthElectrical/PastAttandence/FindAttendenceElectricalFourthSemAdmin';
import FindAttendanceElectricalThirdSemAdmin from '../AdminPage/CalenderTry/ElectricalBranch/AdminThirdElectrical/PastAttandence/FindAttendenceElectricalThirdSemAdmin';
import PastAttandencePlasticFirstSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminFirstPlastic/PastAttandence/PastAttandencePlasticFirstSemAdmin';
import PastAttandencePlasticSecondSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminSecondPlastic/PastAttandence/PastAttandencePlasticSecondSemAdmin';
import PastAttandencePlasticThirdSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminThirdPlastic/PastAttandence/PastAttandencePlasticThirdSemAdmin';
import PastAttandencePlasticFourthSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminFourthPlastic/PastAttandence/PastAttandencePlasticFourthSemAdmin';
import PastAttandencePlasticFifthSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminFifthPlastic/PastAttandence/PastAttandencePlasticFifthSemAdmin';
import PastAttandencePlasticSixthSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminSixthPlastic/PastAttandence/PastAttandencePlasticSixthSemAdmin';
import FindAttendancePlasticFirstSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminFirstPlastic/PastAttandence/FindAttendencePlasticFirstSemAdmin';
import FindAttendancePlasticSecondSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminSecondPlastic/PastAttandence/FindAttendencePlasticSecondSemAdmin';
import FindAttendancePlasticThirdSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminThirdPlastic/PastAttandence/FindAttendencePlasticThirdSemAdmin';
import FindAttendancePlasticFourthSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminFourthPlastic/PastAttandence/FindAttendencePlasticFourthSemAdmin';
import FindAttendancePlasticFifthSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminFifthPlastic/PastAttandence/FindAttendencePlasticFifthSemAdmin';
import FindAttendancePlasticSixthSemAdmin from '../AdminPage/CalenderTry/PlasticBranch/AdminSixthPlastic/PastAttandence/FindAttendencePlasticSixthSemAdmin';


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
      <Stack.Navigator >

        {isLoading ? <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> : null
        }

        {/*These are used for LOGIN */}
        <Stack.Screen name='Login' component={Login} options={{ headerStyle: { backgroundColor: '#FFFFFF' }, headerTitle: 'Chhotu Ram Polytechnic', headerTintColor: 'black', headerTitleAlign: 'center' }} />
        <Stack.Screen name='Create an Account' component={Create} options={{ headerStyle: { backgroundColor: '#FFFFFF' } }} />
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

        {/* Add data Computer*/}
        <Stack.Screen name='1st Sem Computer' component={FirstSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='2nd Sem Computer' component={SecondSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='3rd Sem Computer' component={ThirdSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='4th Sem Computer' component={FourthSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='5th Sem Computer' component={FifthSemAddData} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/* Add data Plastic*/}
        <Stack.Screen name='1st Sem Plastic' component={FirstSemAddDataPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='2nd Sem Plastic' component={SecondSemAddDataPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='3rd Sem Plastic' component={ThirdSemAddDataPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='4th Sem Plastic' component={FourthSemAddDataPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='5th Sem Plastic' component={FifthSemAddDataPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='6th Sem Plastic' component={SixthSemAddDataPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/* Add data Civil*/}
        <Stack.Screen name='1st Sem Civil' component={FirstSemAddDataCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='2nd Sem Civil' component={SecondSemAddDataCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='3rd Sem Civil' component={ThirdSemAddDataCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='4th Sem Civil' component={FourthSemAddDataCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='5th Sem Civil' component={FifthSemAddDataCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='6th Sem Civil' component={SixthSemAddDataCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/* Add data Electrical*/}
        <Stack.Screen name='1st Sem Electrical' component={FirstSemAddDataElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='2nd Sem Electrical' component={SecondSemAddDataElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='3rd Sem Electrical' component={ThirdSemAddDataElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='4th Sem Electrical' component={FourthSemAddDataElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='5th Sem Electrical' component={FifthSemAddDataElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='6th Sem Electrical' component={SixthSemAddDataElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/* Add data Electronics*/}
        <Stack.Screen name='1st Sem Electronics' component={FirstSemAddDataElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='2nd Sem Electronics' component={SecondSemAddDataElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='3rd Sem Electronics' component={ThirdSemAddDataElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='4th Sem Electronics' component={FourthSemAddDataElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='5th Sem Electronics' component={FifthSemAddDataElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='6th Sem Electronics' component={SixthSemAddDataElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/* Add data Mechanical*/}
        <Stack.Screen name='1st Sem Mechanical' component={FirstSemAddDataMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='2nd Sem Mechanical' component={SecondSemAddDataMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='3rd Sem Mechanical' component={ThirdSemAddDataMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='4th Sem Mechanical' component={FourthSemAddDataMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='5th Sem Mechanical' component={FifthSemAddDataMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='6th Sem Mechanical' component={SixthSemAddDataMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Computer Attendence */}
        <Stack.Screen name='Computer 1st sem' component={First} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 2nd sem' component={Second} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 3rd sem' component={Third} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 4th sem' component={Fourth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 5th sem' component={Fifth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 6th sem' component={Sixth} options={{ headerStyle: { backgroundColor: 'white' } }} />

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
        {/*These are used for Computer peroid Attendence Sixth  "ADMIN"*/}
        <Stack.Screen name='First Peroid Sixth' component={FirstPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Sixth' component={SecondPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Sixth' component={ThirdPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Sixth' component={FourthPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Sixth' component={FifthPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Sixth' component={SixthPeroidSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />



        {/*These are used for Mechanical peroid Attendence First "ADMIN" */}
        <Stack.Screen name='First Peroid First Mechanical' component={FirstPeroidFirstMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid First Mechanical' component={SecondPeroidFirstMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid First Mechanical' component={ThirdPeroidFirstMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid First Mechanical' component={FourthPeroidFirstMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid First Mechanical' component={FifthPeroidFirstMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid First Mechanical' component={SixthPeroidFirstMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Mechanical peroid Attendence Second "ADMIN"*/}
        <Stack.Screen name='First Peroid Second Mechanical' component={FirstPeroidSecondMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Second Mechanical' component={SecondPeroidSecondMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Second Mechanical' component={ThirdPeroidSecondMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Second Mechanical' component={FourthPeroidSecondMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Second Mechanical' component={FifthPeroidSecondMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Second Mechanical' component={SixthPeroidSecondMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Mechanical peroid Attendence Third "ADMIN"*/}
        <Stack.Screen name='First Peroid Third Mechanical' component={FirstPeroidThirdMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Third Mechanical' component={SecondPeroidThirdMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Third Mechanical' component={ThirdPeroidThirdMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Third Mechanical' component={FourthPeroidThirdMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Third Mechanical' component={FifthPeroidThirdMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Third Mechanical' component={SixthPeroidThirdMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Mechanical peroid Attendence Fourth "ADMIN" */}
        <Stack.Screen name='First Peroid Fourth Mechanical' component={FirstPeroidFourthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fourth Mechanical' component={SecondPeroidFourthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fourth Mechanical' component={ThirdPeroidFourthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fourth Mechanical' component={FourthPeroidFourthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fourth Mechanical' component={FifthPeroidFourthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fourth Mechanical' component={SixthPeroidFourthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Mechanical peroid Attendence Fifth "ADMIN" */}
        <Stack.Screen name='First Peroid Fifth Mechanical' component={FirstPeroidFifthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fifth Mechanical' component={SecondPeroidFifthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fifth Mechanical' component={ThirdPeroidFifthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fifth Mechanical' component={FourthPeroidFifthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fifth Mechanical' component={FifthPeroidFifthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fifth Mechanical' component={SixthPeroidFifthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Mechanical peroid Attendence Sixth  "ADMIN"*/}
        <Stack.Screen name='First Peroid Sixth Mechanical' component={FirstPeroidSixthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Sixth Mechanical' component={SecondPeroidSixthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Sixth Mechanical' component={ThirdPeroidSixthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Sixth Mechanical' component={FourthPeroidSixthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Sixth Mechanical' component={FifthPeroidSixthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Sixth Mechanical' component={SixthPeroidSixthMechanical} options={{ headerStyle: { backgroundColor: 'white' } }} />








        {/*These are used for Plastic peroid Attendence First "ADMIN" */}
        <Stack.Screen name='First Peroid First Plastic' component={FirstPeroidFirstPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid First Plastic' component={SecondPeroidFirstPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid First Plastic' component={ThirdPeroidFirstPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid First Plastic' component={FourthPeroidFirstPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid First Plastic' component={FifthPeroidFirstPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid First Plastic' component={SixthPeroidFirstPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Plastic peroid Attendence Second "ADMIN"*/}
        <Stack.Screen name='First Peroid Second Plastic' component={FirstPeroidSecondPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Second Plastic' component={SecondPeroidSecondPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Second Plastic' component={ThirdPeroidSecondPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Second Plastic' component={FourthPeroidSecondPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Second Plastic' component={FifthPeroidSecondPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Second Plastic' component={SixthPeroidSecondPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Plastic peroid Attendence Third "ADMIN"*/}
        <Stack.Screen name='First Peroid Third Plastic' component={FirstPeroidThirdPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Third Plastic' component={SecondPeroidThirdPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Third Plastic' component={ThirdPeroidThirdPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Third Plastic' component={FourthPeroidThirdPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Third Plastic' component={FifthPeroidThirdPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Third Plastic' component={SixthPeroidThirdPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Plastic peroid Attendence Fourth "ADMIN" */}
        <Stack.Screen name='First Peroid Fourth Plastic' component={FirstPeroidFourthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fourth Plastic' component={SecondPeroidFourthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fourth Plastic' component={ThirdPeroidFourthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fourth Plastic' component={FourthPeroidFourthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fourth Plastic' component={FifthPeroidFourthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fourth Plastic' component={SixthPeroidFourthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Plastic peroid Attendence Fifth "ADMIN" */}
        <Stack.Screen name='First Peroid Fifth Plastic' component={FirstPeroidFifthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fifth Plastic' component={SecondPeroidFifthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fifth Plastic' component={ThirdPeroidFifthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fifth Plastic' component={FourthPeroidFifthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fifth Plastic' component={FifthPeroidFifthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fifth Plastic' component={SixthPeroidFifthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Plastic peroid Attendence Sixth  "ADMIN"*/}
        <Stack.Screen name='First Peroid Sixth Plastic' component={FirstPeroidSixthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Sixth Plastic' component={SecondPeroidSixthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Sixth Plastic' component={ThirdPeroidSixthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Sixth Plastic' component={FourthPeroidSixthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Sixth Plastic' component={FifthPeroidSixthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Sixth Plastic' component={SixthPeroidSixthPlastic} options={{ headerStyle: { backgroundColor: 'white' } }} />








        {/*These are used for Civil peroid Attendence First "ADMIN" */}
        <Stack.Screen name='First Peroid First Civil' component={FirstPeroidFirstCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid First Civil' component={SecondPeroidFirstCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid First Civil' component={ThirdPeroidFirstCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid First Civil' component={FourthPeroidFirstCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid First Civil' component={FifthPeroidFirstCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid First Civil' component={SixthPeroidFirstCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Second "ADMIN"*/}
        <Stack.Screen name='First Peroid Second Civil' component={FirstPeroidSecondCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Second Civil' component={SecondPeroidSecondCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Second Civil' component={ThirdPeroidSecondCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Second Civil' component={FourthPeroidSecondCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Second Civil' component={FifthPeroidSecondCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Second Civil' component={SixthPeroidSecondCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Third "ADMIN"*/}
        <Stack.Screen name='First Peroid Third Civil' component={FirstPeroidThirdCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Third Civil' component={SecondPeroidThirdCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Third Civil' component={ThirdPeroidThirdCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Third Civil' component={FourthPeroidThirdCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Third Civil' component={FifthPeroidThirdCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Third Civil' component={SixthPeroidThirdCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Fourth "ADMIN" */}
        <Stack.Screen name='First Peroid Fourth Civil' component={FirstPeroidFourthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fourth Civil' component={SecondPeroidFourthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fourth Civil' component={ThirdPeroidFourthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fourth Civil' component={FourthPeroidFourthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fourth Civil' component={FifthPeroidFourthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fourth Civil' component={SixthPeroidFourthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Fifth "ADMIN" */}
        <Stack.Screen name='First Peroid Fifth Civil' component={FirstPeroidFifthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fifth Civil' component={SecondPeroidFifthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fifth Civil' component={ThirdPeroidFifthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fifth Civil' component={FourthPeroidFifthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fifth Civil' component={FifthPeroidFifthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fifth Civil' component={SixthPeroidFifthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Sixth  "ADMIN"*/}
        <Stack.Screen name='First Peroid Sixth Civil' component={FirstPeroidSixthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Sixth Civil' component={SecondPeroidSixthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Sixth Civil' component={ThirdPeroidSixthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Sixth Civil' component={FourthPeroidSixthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Sixth Civil' component={FifthPeroidSixthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Sixth Civil' component={SixthPeroidSixthCivil} options={{ headerStyle: { backgroundColor: 'white' } }} />








        {/*These are used for Electrical peroid Attendence First "ADMIN" */}
        <Stack.Screen name='First Peroid First Electrical' component={FirstPeroidFirstElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid First Electrical' component={SecondPeroidFirstElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid First Electrical' component={ThirdPeroidFirstElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid First Electrical' component={FourthPeroidFirstElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid First Electrical' component={FifthPeroidFirstElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid First Electrical' component={SixthPeroidFirstElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Electrical peroid Attendence Second "ADMIN"*/}
        <Stack.Screen name='First Peroid Second Electrical' component={FirstPeroidSecondElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Second Electrical' component={SecondPeroidSecondElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Second Electrical' component={ThirdPeroidSecondElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Second Electrical' component={FourthPeroidSecondElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Second Electrical' component={FifthPeroidSecondElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Second Electrical' component={SixthPeroidSecondElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Electrical peroid Attendence Third "ADMIN"*/}
        <Stack.Screen name='First Peroid Third Electrical' component={FirstPeroidThirdElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Third Electrical' component={SecondPeroidThirdElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Third Electrical' component={ThirdPeroidThirdElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Third Electrical' component={FourthPeroidThirdElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Third Electrical' component={FifthPeroidThirdElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Third Electrical' component={SixthPeroidThirdElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Electrical peroid Attendence Fourth "ADMIN" */}
        <Stack.Screen name='First Peroid Fourth Electrical' component={FirstPeroidFourthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fourth Electrical' component={SecondPeroidFourthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fourth Electrical' component={ThirdPeroidFourthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fourth Electrical' component={FourthPeroidFourthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fourth Electrical' component={FifthPeroidFourthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fourth Electrical' component={SixthPeroidFourthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Electrical peroid Attendence Fifth "ADMIN" */}
        <Stack.Screen name='First Peroid Fifth Electrical' component={FirstPeroidFifthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fifth Electrical' component={SecondPeroidFifthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fifth Electrical' component={ThirdPeroidFifthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fifth Electrical' component={FourthPeroidFifthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fifth Electrical' component={FifthPeroidFifthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fifth Electrical' component={SixthPeroidFifthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Electrical peroid Attendence Sixth  "ADMIN"*/}
        <Stack.Screen name='First Peroid Sixth Electrical' component={FirstPeroidSixthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Sixth Electrical' component={SecondPeroidSixthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Sixth Electrical' component={ThirdPeroidSixthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Sixth Electrical' component={FourthPeroidSixthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Sixth Electrical' component={FifthPeroidSixthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Sixth Electrical' component={SixthPeroidSixthElectrical} options={{ headerStyle: { backgroundColor: 'white' } }} />








        {/*These are used for Electronics peroid Attendence First "ADMIN" */}
        <Stack.Screen name='First Peroid First Electronics' component={FirstPeroidFirstElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid First Electronics' component={SecondPeroidFirstElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid First Electronics' component={ThirdPeroidFirstElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid First Electronics' component={FourthPeroidFirstElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid First Electronics' component={FifthPeroidFirstElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid First Electronics' component={SixthPeroidFirstElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Second "ADMIN"*/}
        <Stack.Screen name='First Peroid Second Electronics' component={FirstPeroidSecondElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Second Electronics' component={SecondPeroidSecondElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Second Electronics' component={ThirdPeroidSecondElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Second Electronics' component={FourthPeroidSecondElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Second Electronics' component={FifthPeroidSecondElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Second Electronics' component={SixthPeroidSecondElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Third "ADMIN"*/}
        <Stack.Screen name='First Peroid Third Electronics' component={FirstPeroidThirdElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Third Electronics' component={SecondPeroidThirdElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Third Electronics' component={ThirdPeroidThirdElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Third Electronics' component={FourthPeroidThirdElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Third Electronics' component={FifthPeroidThirdElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Third Electronics' component={SixthPeroidThirdElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Fourth "ADMIN" */}
        <Stack.Screen name='First Peroid Fourth Electronics' component={FirstPeroidFourthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fourth Electronics' component={SecondPeroidFourthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fourth Electronics' component={ThirdPeroidFourthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fourth Electronics' component={FourthPeroidFourthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fourth Electronics' component={FifthPeroidFourthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fourth Electronics' component={SixthPeroidFourthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Fifth "ADMIN" */}
        <Stack.Screen name='First Peroid Fifth Electronics' component={FirstPeroidFifthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Fifth Electronics' component={SecondPeroidFifthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Fifth Electronics' component={ThirdPeroidFifthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Fifth Electronics' component={FourthPeroidFifthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Fifth Electronics' component={FifthPeroidFifthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Fifth Electronics' component={SixthPeroidFifthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />

        {/*These are used for Civil peroid Attendence Sixth  "ADMIN"*/}
        <Stack.Screen name='First Peroid Sixth Electronics' component={FirstPeroidSixthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Peroid Sixth Electronics' component={SecondPeroidSixthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Peroid Sixth Electronics' component={ThirdPeroidSixthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Peroid Sixth Electronics' component={FourthPeroidSixthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Peroid Sixth Electronics' component={FifthPeroidSixthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Peroid Sixth Electronics' component={SixthPeroidSixthElectronics} options={{ headerStyle: { backgroundColor: 'white' } }} />









        {/*These are used for Computer peroid Attendence "Student" */}
        <Stack.Screen name='Computer 1st Sem' component={FindAttendanceComputerFirst} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 2nd Sem' component={FindAttendanceComputerSecond} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 3rd Sem' component={FindAttendanceComputerThird} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 4th Sem' component={FindAttendanceComputerFourth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 5th Sem' component={FindAttendanceComputerFifth} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Computer 6th Sem' component={FindAttendanceComputerSixth} options={{ headerStyle: { backgroundColor: 'white' } }} />

        <Stack.Screen name='Attendence Computer 6th' component={AttendanceSecondPage} options={{ headerStyle: { backgroundColor: 'white' }, headerTintColor: 'black' }} />
        <Stack.Screen name='Todays Attendance' component={Attendence} options={{ headerStyle: { backgroundColor: 'white' }, headerTintColor: 'black' }} />

        <Stack.Screen name='First Period Attandence' component={StudentFirstAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Second Period Attandence' component={StudentSecondAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Third Period Attandence' component={StudentThirdAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fourth Period Attandence' component={StudentFourthAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Fifth Period Attandence' component={StudentFifthAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />
        <Stack.Screen name='Sixth Period Attandence' component={StudentSixthAttandence} options={{ headerStyle: { backgroundColor: 'white' } }} />


        <Stack.Screen name='Past Attandence' component={PastAttandnce} options={{ headerStyle: { backgroundColor: 'white' }, headerTintColor: 'black' }} />
        <Stack.Screen name='Find Attandence' component={FindAttendence} options={{ headerStyle: { backgroundColor: 'white' }, headerTintColor: 'black' }} />

        <Stack.Screen name="Computer Branch Question Paper" component={ComputerQues} />
        <Stack.Screen name="Civil Branch Question Paper" component={CivilQues} />
        <Stack.Screen name="Mechanical Branch Question Paper" component={MechanicalQues} />
        <Stack.Screen name="Electrical Branch Question Paper" component={ElectricalQues} />
        <Stack.Screen name="Electronics Branch Question Paper" component={ElecronicsQues} />
        <Stack.Screen name="Plastic Branch Question Paper" component={PlasticQues} />

        {/*  Computer Branch SCreens*/}
        <Stack.Screen name="Attandence Computer 1st" component={AttendanceComputerFirst} />
        <Stack.Screen name="Attandence Computer 2nd" component={AttendanceComputerSecond} />
        <Stack.Screen name="Attandence Computer 3rd" component={AttendanceComputerThird} />
        <Stack.Screen name="Attandence Computer 4th" component={AttendanceComputerFourth} />
        <Stack.Screen name="Attandence Computer 5th" component={AttendanceComputerFifth} />

        <Stack.Screen name="Today Sem 1 Computer" component={AttendenceComputerTodayFirst} />
        <Stack.Screen name="Today Sem 2 Computer" component={AttendenceComputerTodaySecond} />
        <Stack.Screen name="Today Sem 3 Computer" component={AttendenceComputerTodayThird} />
        <Stack.Screen name="Today Sem 4 Computer" component={AttendenceComputerTodayFourth} />
        <Stack.Screen name="Today Sem 5 Computer" component={AttendenceComputerTodayFifth} />
        <Stack.Screen name="Today Sem 6 Computer" component={AttendenceComputerTodaySixth} />

        {/* this is peroid wise 1st sem attentendce screen*/}
        <Stack.Screen name="Attandence Computer 1st Peroid" component={StudentFirstAttandenceFirstSem} />
        <Stack.Screen name="Attandence Computer 2nd Peroid" component={StudentSecondAttandenceFirstSem} />
        <Stack.Screen name="Attandence Computer 3rd Peroid" component={StudentThirdAttandenceFirstSem} />
        <Stack.Screen name="Attandence Computer 4th Peroid" component={StudentFourthAttandenceFirstSem} />
        <Stack.Screen name="Attandence Computer 5th Peroid" component={StudentFifthAttandenceFirstSem} />
        <Stack.Screen name="Attandence Computer 6th Peroid" component={StudentSixthAttandenceFirstSem} />
        {/* this is peroid wise 2nd sem attentendce screen*/}
        <Stack.Screen name="2nd Sem Computer 1st Peroid" component={StudentFirstAttandenceSecondSem} />
        <Stack.Screen name="2nd Sem Computer 2nd Peroid" component={StudentSecondAttandenceSecondSem} />
        <Stack.Screen name="2nd Sem Computer 3rd Peroid" component={StudentThirdAttandenceSecondSem} />
        <Stack.Screen name="2nd Sem Computer 4th Peroid" component={StudentFourthAttandenceSecondSem} />
        <Stack.Screen name="2nd Sem Computer 5th Peroid" component={StudentFifthAttandenceSecondSem} />
        <Stack.Screen name="2nd Sem Computer 6th Peroid" component={StudentSixthAttandenceSecondSem} />
        {/* this is peroid wise 3rd sem attentendce screen*/}
        <Stack.Screen name="3rd Sem Computer 1st Peroid" component={StudentFirstAttandenceThirdSem} />
        <Stack.Screen name="3rd Sem Computer 2nd Peroid" component={StudentSecondAttandenceThirdSem} />
        <Stack.Screen name="3rd Sem Computer 3rd Peroid" component={StudentThirdAttandenceThirdSem} />
        <Stack.Screen name="3rd Sem Computer 4th Peroid" component={StudentFourthAttandenceThirdSem} />
        <Stack.Screen name="3rd Sem Computer 5th Peroid" component={StudentFifthAttandenceThirdSem} />
        <Stack.Screen name="3rd Sem Computer 6th Peroid" component={StudentSixthAttandenceThirdSem} />
        {/* this is peroid wise 4th sem attentendce screen*/}
        <Stack.Screen name="4th Sem Computer 1st Peroid" component={StudentFirstAttandenceFourthSem} />
        <Stack.Screen name="4th Sem Computer 2nd Peroid" component={StudentSecondAttandenceFourthSem} />
        <Stack.Screen name="4th Sem Computer 3rd Peroid" component={StudentThirdAttandenceFourthSem} />
        <Stack.Screen name="4th Sem Computer 4th Peroid" component={StudentFourthAttandenceFourthSem} />
        <Stack.Screen name="4th Sem Computer 5th Peroid" component={StudentFifthAttandenceFourthSem} />
        <Stack.Screen name="4th Sem Computer 6th Peroid" component={StudentSixthAttandenceFourthSem} />
        {/* this is peroid wise 5th sem attentendce screen*/}
        <Stack.Screen name="5th Sem Computer 1st Peroid" component={StudentFirstAttandenceFifthSem} />
        <Stack.Screen name="5th Sem Computer 2nd Peroid" component={StudentSecondAttandenceFifthSem} />
        <Stack.Screen name="5th Sem Computer 3rd Peroid" component={StudentThirdAttandenceFifthSem} />
        <Stack.Screen name="5th Sem Computer 4th Peroid" component={StudentFourthAttandenceFifthSem} />
        <Stack.Screen name="5th Sem Computer 5th Peroid" component={StudentFifthAttandenceFifthSem} />
        <Stack.Screen name="5th Sem Computer 6th Peroid" component={StudentSixthAttandenceFifthSem} />
        {/* this is peroid wise 6th sem attentendce screen*/}
        <Stack.Screen name="6th Sem Computer 1st Peroid" component={StudentFirstAttandenceSixthSem} />
        <Stack.Screen name="6th Sem Computer 2nd Peroid" component={StudentSecondAttandenceSixthSem} />
        <Stack.Screen name="6th Sem Computer 3rd Peroid" component={StudentThirdAttandenceSixthSem} />
        <Stack.Screen name="6th Sem Computer 4th Peroid" component={StudentFourthAttandenceSixthSem} />
        <Stack.Screen name="6th Sem Computer 5th Peroid" component={StudentFifthAttandenceSixthSem} />
        <Stack.Screen name="6th Sem Computer 6th Peroid" component={StudentSixthAttandenceSixthSem} />
        {/* this is peroid wise find attentendce screen*/}
        <Stack.Screen name="1st Sem Find Attandence" component={FindAttendanceComputerFirst} />
        <Stack.Screen name="2nd Sem Find Attandence" component={FindAttendanceComputerSecond} />
        <Stack.Screen name="3rd Sem Find Attandence" component={FindAttendanceComputerThird} />
        <Stack.Screen name="4th Sem Find Attandence" component={FindAttendanceComputerFourth} />
        <Stack.Screen name="5th Sem Find Attandence" component={FindAttendanceComputerFifth} />
        <Stack.Screen name="6th Sem Find Attandence" component={FindAttendanceComputerSixth} />
        {/* this is peroid wise past attentendce screen*/}
        <Stack.Screen name="1st Sem Past Attandence" component={PastAttandenceCompFirstSem} />
        <Stack.Screen name="2nd Sem Past Attandence" component={PastAttandenceCompSecondSem} />
        <Stack.Screen name="3rd Sem Past Attandence" component={PastAttandenceCompThirdSem} />
        <Stack.Screen name="4th Sem Past Attandence" component={PastAttandenceCompFourthSem} />
        <Stack.Screen name="5th Sem Past Attandence" component={PastAttandenceCompFifthSem} />
        <Stack.Screen name="6th Sem Past Attandence" component={PastAttandenceCompSixthSem} />

        {/* this is peroid wise past attentendce screen COMPUTER*ADMIN**/}
        <Stack.Screen name="1st Sem Past Attandence Admin" component={PastAttandenceCompFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Past Attandence Admin" component={PastAttandenceCompSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Past Attandence Admin" component={PastAttandenceCompThirdSemAdmin} />
        <Stack.Screen name="4th Sem Past Attandence Admin" component={PastAttandenceCompFourthSemAdmin} />
        <Stack.Screen name="5th Sem Past Attandence Admin" component={PastAttandenceCompFifthSemAdmin} />
        <Stack.Screen name="6th Sem Past Attandence Admin" component={PastAttandenceCompSixthSemAdmin} />
        {/* this is peroid wise find attentendce screen COMPUTER*ADMIN**/}
        <Stack.Screen name="1st Sem Find Attandence Admin" component={FindAttendanceCompFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Find Attandence Admin" component={FindAttendanceCompSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Find Attandence Admin" component={FindAttendanceCompThirdSemAdmin} />
        <Stack.Screen name="4th Sem Find Attandence Admin" component={FindAttendanceCompFourthSemAdmin} />
        <Stack.Screen name="5th Sem Find Attandence Admin" component={FindAttendanceCompFifthSemAdmin} />
        <Stack.Screen name="6th Sem Find Attandence Admin" component={FindAttendanceCompSixthSemAdmin} />

        {/* this is peroid wise past attentendce screen CIVIL*ADMIN**/}
        <Stack.Screen name="1st Sem Past Attandence Civil" component={PastAttandenceCivilFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Past Attandence Civil" component={PastAttandenceCivilSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Past Attandence Civil" component={PastAttandenceCivilThirdSemAdmin} />
        <Stack.Screen name="4th Sem Past Attandence Civil" component={PastAttandenceCivilFourthSemAdmin} />
        <Stack.Screen name="5th Sem Past Attandence Civil" component={PastAttandenceCivilFifthSemAdmin} />
        <Stack.Screen name="6th Sem Past Attandence Civil" component={PastAttandenceCivilSixthSemAdmin} />
        {/* this is peroid wise find attentendce screen Civil*ADMIN**/}
        <Stack.Screen name="1st Sem Find Attandence Civil" component={FindAttendanceCivilFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Find Attandence Civil" component={FindAttendanceCivilSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Find Attandence Civil" component={FindAttendanceCivilThirdSemAdmin} />
        <Stack.Screen name="4th Sem Find Attandence Civil" component={FindAttendanceCivilFourthSemAdmin} />
        <Stack.Screen name="5th Sem Find Attandence Civil" component={FindAttendanceCivilFifthSemAdmin} />
        <Stack.Screen name="6th Sem Find Attandence Civil" component={FindAttendanceCivilSixthSemAdmin} />

        {/* this is peroid wise past attentendce screen Mechanical*ADMIN**/}
        <Stack.Screen name="1st Sem Past Attandence Mechanical" component={PastAttandenceMechanicalFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Past Attandence Mechanical" component={PastAttandenceMechanicalSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Past Attandence Mechanical" component={PastAttandenceMechanicalThirdSemAdmin} />
        <Stack.Screen name="4th Sem Past Attandence Mechanical" component={PastAttandenceMechanicalFourthSemAdmin} />
        <Stack.Screen name="5th Sem Past Attandence Mechanical" component={PastAttandenceMechanicalFifthSemAdmin} />
        <Stack.Screen name="6th Sem Past Attandence Mechanical" component={PastAttandenceMechanicalSixthSemAdmin} />
        {/* this is peroid wise find attentendce screen Mechanical*ADMIN**/}
        <Stack.Screen name="1st Sem Find Attandence Mechanical" component={FindAttendanceMechanicalFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Find Attandence Mechanical" component={FindAttendanceMechanicalSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Find Attandence Mechanical" component={FindAttendanceMechanicalThirdSemAdmin} />
        <Stack.Screen name="4th Sem Find Attandence Mechanical" component={FindAttendanceMechanicalFourthSemAdmin} />
        <Stack.Screen name="5th Sem Find Attandence Mechanical" component={FindAttendanceMechanicalFifthSemAdmin} />
        <Stack.Screen name="6th Sem Find Attandence Mechanical" component={FindAttendanceMechanicalSixthSemAdmin} />

        {/* this is peroid wise past attentendce screen Electronics*ADMIN**/}
        <Stack.Screen name="1st Sem Past Attandence Electronics" component={PastAttandenceElectronicsFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Past Attandence Electronics" component={PastAttandenceElectronicsSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Past Attandence Electronics" component={PastAttandenceElectronicsThirdSemAdmin} />
        <Stack.Screen name="4th Sem Past Attandence Electronics" component={PastAttandenceElectronicsFourthSemAdmin} />
        <Stack.Screen name="5th Sem Past Attandence Electronics" component={PastAttandenceElectronicsFifthSemAdmin} />
        <Stack.Screen name="6th Sem Past Attandence Electronics" component={PastAttandenceElectronicsSixthSemAdmin} />
        {/* this is peroid wise find attentendce screen Electronics*ADMIN**/}
        <Stack.Screen name="1st Sem Find Attandence Electronics" component={FindAttendanceElectronicsFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Find Attandence Electronics" component={FindAttendanceElectronicsSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Find Attandence Electronics" component={FindAttendanceElectronicsThirdSemAdmin} />
        <Stack.Screen name="4th Sem Find Attandence Electronics" component={FindAttendanceElectronicsFourthSemAdmin} />
        <Stack.Screen name="5th Sem Find Attandence Electronics" component={FindAttendanceElectronicsFifthSemAdmin} />
        <Stack.Screen name="6th Sem Find Attandence Electronics" component={FindAttendanceElectronicsSixthSemAdmin} />

        {/* this is peroid wise past attentendce screen Electrical*ADMIN**/}
        <Stack.Screen name="1st Sem Past Attandence Electrical" component={PastAttandenceElectricalFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Past Attandence Electrical" component={PastAttandenceElectricalSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Past Attandence Electrical" component={PastAttandenceElectricalThirdSemAdmin} />
        <Stack.Screen name="4th Sem Past Attandence Electrical" component={PastAttandenceElectricalFourthSemAdmin} />
        <Stack.Screen name="5th Sem Past Attandence Electrical" component={PastAttandenceElectricalFifthSemAdmin} />
        <Stack.Screen name="6th Sem Past Attandence Electrical" component={PastAttandenceElectricalSixthSemAdmin} />
        {/* this is peroid wise find attentendce screen Electrical*ADMIN**/}
        <Stack.Screen name="1st Sem Find Attandence Electrical" component={FindAttendanceElectricalFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Find Attandence Electrical" component={FindAttendanceElectricalSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Find Attandence Electrical" component={FindAttendanceElectricalThirdSemAdmin} />
        <Stack.Screen name="4th Sem Find Attandence Electrical" component={FindAttendanceElectricalFourthSemAdmin} />
        <Stack.Screen name="5th Sem Find Attandence Electrical" component={FindAttendanceElectricalFifthSemAdmin} />
        <Stack.Screen name="6th Sem Find Attandence Electrical" component={FindAttendanceElectricalSixthSemAdmin} />

           {/* this is peroid wise past attentendce screen Plastic*ADMIN**/}
        <Stack.Screen name="1st Sem Past Attandence Plastic" component={PastAttandencePlasticFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Past Attandence Plastic" component={PastAttandencePlasticSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Past Attandence Plastic" component={PastAttandencePlasticThirdSemAdmin} />
        <Stack.Screen name="4th Sem Past Attandence Plastic" component={PastAttandencePlasticFourthSemAdmin} />
        <Stack.Screen name="5th Sem Past Attandence Plastic" component={PastAttandencePlasticFifthSemAdmin} />
        <Stack.Screen name="6th Sem Past Attandence Plastic" component={PastAttandencePlasticSixthSemAdmin} />
        {/* this is peroid wise find attentendce screen Plastic*ADMIN**/}
        <Stack.Screen name="1st Sem Find Attandence Plastic" component={FindAttendancePlasticFirstSemAdmin} />
        <Stack.Screen name="2nd Sem Find Attandence Plastic" component={FindAttendancePlasticSecondSemAdmin} />
        <Stack.Screen name="3rd Sem Find Attandence Plastic" component={FindAttendancePlasticThirdSemAdmin} />
        <Stack.Screen name="4th Sem Find Attandence Plastic" component={FindAttendancePlasticFourthSemAdmin} />
        <Stack.Screen name="5th Sem Find Attandence Plastic" component={FindAttendancePlasticFifthSemAdmin} />
        <Stack.Screen name="6th Sem Find Attandence Plastic" component={FindAttendancePlasticSixthSemAdmin} />

      </Stack.Navigator>
    </View>
  );
};



export default MainNavigator;