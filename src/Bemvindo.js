import React, { useState, useRef } from 'react';
import {  Text, View, StyleSheet, Image, TextInput,ScrollView, TouchableOpacity  } from 'react-native';
import {Button} from 'react-native-elements'

import Dados from "./Dados"
import {useNavigation} from "@react-navigation/native"
import Carousel from 'react-native-snap-carousel';
//import firebase from '../Firebaseconection'

const dados = require('../icons/praia.png')
  
  


const Bemvindo = ({route, navigation}) =>{


  const [pic,setImagem] = useState(route.params) 
  
  
  const [dados, setDados]= useState([])
  dados.push(pic)
  const carosselRef = useRef()
  console.log(dados)

  const renderItem = ({item, index}) => {



    return (
        <View style={{flex:1}}>
            <Text style={style.title}>Ida: { item.ida }</Text>
            <Text style={style.title}>Volta: { item.volta }</Text>
            <Text style={style.title}>{ pic.length}</Text>
             <TouchableOpacity onPress={()=> navigation.navigate("Func")}>
                <Image source= {item.imagem} style={{overflow:"visible", width:200, height:200}} />
            </TouchableOpacity> 
        </View>
    );
}

  
  
  return ( 
    
  
  <View style= {style.container1}>


       
      <View style={style.simbolo}>
        <Image source={require('../icons/simbolo.png')}/> 
      </View>
  

      <View style={style.titulo}>
        <Text style={{fontSize:28, color:"#1E7987"}}>Bem-Vindo (a) !!</Text>
      </View>    


      <View style={{justifyContent:"center", alignItems:"center", flex:1}} >
            <Carousel
                    style={{height:200, width:500}}
                    ref={carosselRef}
                    data={dados}
                    renderItem={renderItem}
                    sliderWidth= {300}
                    itemWidth = {300}
                    inactiveSlideOpacity = {0.5}
                    
            />
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

    carousel:{
      flex:2
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
    },

    title:{
      color: "blue",
      fontSize:20
    }
    
    
    })
    
  
  
    export default Bemvindo