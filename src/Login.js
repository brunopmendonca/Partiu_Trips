import React from 'react';
import {  Text, View, StyleSheet, Image  } from 'react-native';


const Login = () => ( 
    <View style={{ flex:1, backgroundColor: "#fff" }}>
       <View style={{backgroundColor: "black", height:2}}></View>
        <View style={{backgroundColor:"#ee3338", height:50,flexDirection:"row", justifyContent:'space-around', marginTop:0, padding:13, }}>
          <Image style={{width:"13%", height:"100%"}} source={require('../assets/icon.png')}/> 
          <Text style={{ height: 100, color: "white" }}>SINALIZAÇÃO</Text> 
          <Text style={{ height: 100, color: "white" }}>CBTC</Text> 
        </View>
        <View style={{backgroundColor: "black", height:2.5}}></View> 
        <Text style={{ height: 50, color: "black", marginTop:40, textAlign:"center", fontSize:25, }}>Selecione a opção desejada</Text>             
     </View>  

  );

  const style = StyleSheet.create({
    botao:{
      height:"90%",
      width: "90%",
      alignSelf:"center",
      backgroundColor: '#ee3338',
      borderRadius:10,  
    },

    botao2:{
      flex:1,
      // backgroundColor:"grey",
      margin:10
    }
  })


  export default Login