import React, {} from 'react';
import {  Text, View, StyleSheet, Image, TextInput,ScrollView  } from 'react-native';
import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
//import firebase from '../Firebaseconection'



const Bemvindo = ({navigation}) =>{

  
  return ( 
    
  
  <View style= {style.container1}>


       
      <View style={style.simbolo}>
        <Image source={require("../icons/simbolo.png")}/>
      </View>
  

      <View style={style.titulo}>
        <Text style={{fontSize:28, color:"#1E7987"}}>Bem-Vindo (a) !!</Text>
      </View>    

      
      <View style={style.figura}>
        <Image source={require("../icons/image_7.png")}/>
      </View>


      
      <View style={style.botao}>

      <Button 
          buttonStyle = {style.novaViagem}
          title="Nova Viagem"
          titleStyle={{fontSize:23}}
          onPress = {()=> navigation.navigate('Dados')}
      />


      </View>  
                 
  
  </View>
  
  
  
  )};
  
  
  const style = StyleSheet.create({
  
    container1:{
       flex:1
    },


    simbolo:{

      height:"10%",
      alignItems:"baseline",
      justifyContent:"center",
      paddingLeft:25

    },


    titulo:{
      height:"15%",
      alignItems:"center",
      justifyContent:"center",
      
    },


    figura:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
      
    },


    botao:{
      flex:1,
      alignSelf:"center",
      justifyContent:"center",
    },

    novaViagem:{
      alignSelf:"center",
      justifyContent:"center",
      backgroundColor: "#EB6458",
      width:"90%",
      height:"50%",
      borderRadius: 40,
    }
    
    
    })
    
  
  
    export default Bemvindo