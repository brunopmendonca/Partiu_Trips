import React from 'react';
import {  Text, View, StyleSheet, Image, TextInput  } from 'react-native';
import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';

const Inicial = ({navigation}) => ( 
  
         <View style= {style.container}>

           <View style= {style.header} >

             <Text style={style.titulo1}>Partiu</Text>
             <Text style= {style.titulo2}>Trips</Text>

          </View>


      <View style= {style.login}>

        <View style= {{flex:1}}>
              <Text style={{color: "white", fontSize:28, marginLeft:24, marginTop: 14 }}>Login In</Text>
              <TextInput style={style.input} placeholder= "Email"/>
              <TextInput style={style.input} placeholder= "Senha"/>
              <TouchableHighlight style={{backgroundColor:"black"}} onPress= {()=>{alert("nada")}} underlayColor="#1E7987">
                  <Text style={{paddingTop:10, marginRight:25, alignSelf:"flex-end",color:"#fff", fontSize:15}}>Esqueci minha senha</Text>
              </TouchableHighlight>


              

              <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center", flex:1, marginBottom:10}}>
                <View style={{backgroundColor: "#fff", height:1, marginTop:27, width:"25%"}}></View>
                <Text style={{marginTop:22, color:"#fff", fontSize:15}}>Entrar com</Text>
                <View style={{backgroundColor: "#fff", height:1, marginTop:27, width:"25%"}}></View>
              </View>

              <View style={{flex:1,alignItems:"center", marginBottom:10 }}>
                <Image source={require("../icons/image_5.png")}/>
              </View>

              <View style={{flexDirection:"row", alignSelf:"center",justifyContent:"center", flex:1, marginBottom:5}}>
                <Text>Nao possui conta?</Text>
                <TouchableHighlight >
                  <Text style={{color:"#EB6458", marginLeft:5}}>Cadastre-se</Text>
                </TouchableHighlight>
              </View>

           </View>
        </View>
             


      </View>

  );

  const style = StyleSheet.create({

    container1:{
      flex:1,
      flexDirection:"column",
     
    },

    header:{
      backgroundColor:"#FBF8F8",
      height:"33%",
      alignItems:"center",
      justifyContent:"center"

     },

     titulo1:{
      fontSize: 55,
      color: "#EB6458"
     },

     titulo2:{

      fontSize:50,
      color: "#1E7987"

     },

     loginIn:{

      marginLeft:24

     },

     input:{
       backgroundColor:"#fff", 
       width:"88%",
       height:"10%", 
       alignSelf:"center", 
       padding:10, 
       marginTop:26
      },

    login: {
      backgroundColor: "#1E7987",
      height: "67%",
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45

    }

  })


  export default Inicial