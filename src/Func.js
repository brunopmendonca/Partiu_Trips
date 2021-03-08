import React, { useState} from 'react';
import {  Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity  } from 'react-native';
// import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../Firebaseconection'
import { Appbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Platform } from 'react-native';
import MapView from 'react-native-maps';

const Func = ({navigation, route}) =>{
  
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const [ida, setIda]= useState(route.params.ida)
  const [volta, setVolta]= useState(route.params.volta)
  const [imagem, setImagem]= useState(route.params.imagem)




return ( 
  


<ScrollView>
      <View style= {style.header} >
          <Image source={require("../icons/simbolo.png")}/>
          <Text style={{fontSize:28, color:"#1E7987", textAlign:"center"}}>Viagem</Text>
          <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </View>

      
      <Card style={style.card}>
          <Card.Cover style={style.imagem} source={imagem} />
          <Card.Content>
            <Title>Card title</Title>
            <View style={style.datas}>
              <Paragraph>{ida}</Paragraph>
              <Paragraph> até </Paragraph>
              <Paragraph> {volta} </Paragraph>
            </View>
          </Card.Content>
      </Card>

      <View style={style.grupo}>

              <TouchableOpacity style={style.opcao} >
                <Text style={style.textoOpcao}> Gastos </Text>
              </TouchableOpacity>
          

              <TouchableOpacity style={style.opcao} >
                <Text style={style.textoOpcao}> Gastos </Text>
              </TouchableOpacity>
  
         
              <TouchableOpacity style={style.opcao} >
                <Text style={style.textoOpcao}> Gastos </Text>
              </TouchableOpacity>
          
      </View>

      <View style={style.grupo}>

              <TouchableOpacity style={style.opcao} >
                <Text style={style.textoOpcao}> Gastos </Text>
              </TouchableOpacity>
          

              <TouchableOpacity style={style.opcao} >
                <Text style={style.textoOpcao}> Gastos </Text>
              </TouchableOpacity>
  
         
              <TouchableOpacity style={style.opcao} >
                <Text style={style.textoOpcao}> Gastos </Text>
              </TouchableOpacity>
          
      </View>
     

</ScrollView>




)};


const style = StyleSheet.create({


  header:{
    flexDirection:"row",
    alignItems:"baseline",
    justifyContent:"space-around",
    marginTop:20

   },
 
  simbolo:{
      
    alignItems:"baseline",
    justifyContent:"center",
    alignItems:"baseline",

},

  titulo:{
    height:"15%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:20
    
  },

  

  card:{
    marginTop:20,
    borderRadius:40,
    width:"90%",
    alignSelf:"center",
    padding:20
    
  },

  imagem:{
    width:"90%",
    alignSelf:"center"
  },

  datas:{
    flexDirection:"row",
    
  },

  grupo:{
    flexDirection:"row",
    justifyContent: 'space-around',
    marginTop:20,
    padding:5
  },

  opcao:{
    backgroundColor: "#1E7987",
    height: 100,
    width:100,
    borderRadius:10,
    alignItems: "center",
    justifyContent:"center"
    
  },

  

  
  })
  


  export default Func