import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    page:{
  
    },
  
     container:{
     flexDirection:'row',
     padding:10,
    },
  
     badgecontainer:{
      backgroundColor:'#3872E9',
      height:20,
      width:20,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:45,
      top:10,
      borderWidth:1,
      borderColor:'white',
      
    },
  
     badgetag:{
      color:'white',
      fontSize:12,
    },
  
      image:{  
      height:50,
      width:50,
      borderRadius:30,
      marginRight:10,
    },
  
      fix:{
    flex:1,
    justifyContent:'center',
    },
  
       row:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
      name:{
        fontWeight:'bold',
        fontSize:20,
        marginBottom:3,
       },
  
      text:{
      color:'gray',
      fontSize:15,
     },
  
  });

  export default styles;