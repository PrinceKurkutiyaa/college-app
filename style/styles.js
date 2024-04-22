// styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    margin: 10,
    borderWidth:2
  },
  text: {

    fontSize: 30,
  },
  grid:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    fontSize:20,
  },
  box:{
    borderWidth:2,
    padding:5,
    margin:5,
    color:'black',
    borderColor:"black"

  },
  mainLogin:{
    flex:1,
    paddingTop:10,
    flexDirection:"row",
    alignContent:'center',
    justifyContent:'center'
  },
  textInput:{
    flex:1,
    justifyContent:'flex-end',
    backgroundColor:'white',
    margin:50

  },button: {
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lavender',
    //flexDirection: 'row'
  },
  button: {
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 5,
  
  },
  flex: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lavender',
    flex: 1,
    //  flexDirection: 'row'
  },
  customDrawer:{
    backgroundColor: '#d7d1de',
    padding:10,
    marginHorizontal:10,
    marginVertical:5,
    borderRadius:10,
    marginTop:100,
    borderWidth:2,
    borderColor:'black'
  },
  logOut:{
    alignItems:'center',
    justifyContent:'flex-end',
    flex:1
  }
});

export default styles;
