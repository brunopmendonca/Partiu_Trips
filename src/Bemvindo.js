import React, { useState, useRef } from 'react';
import {  Text, View, StyleSheet, Image, TextInput,ScrollView  } from 'react-native';
import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import Dados from "./Dados"
import {useNavigation} from "@react-navigation/native"
import Carousel from 'react-native-snap-carousel';
//import firebase from '../Firebaseconection'

const dados = require('../icons/praia.png')
  
  


const Bemvindo = () =>{

    
  const navigation= useNavigation()
  const [pic,setImagem] = useState([
    
    {
      title:"O Justiceiro",
      text: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
      release: 2018,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
  },
  {
      title:"Bad Boys for life",
      text: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
  },
  {
      title:"Viúva Negra",
      text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
  },
  {
      title:"Top Gun: MAVERICK",
      text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
  },
  {
      title:"BloodShot",
      text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
  },
  {
      title:"Free Guy",
      text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
  },
  
  ])

  const carosselRef = useRef()
  

  const renderItem = ({item, index}) => {
    return (
        <View style={{flex:1}}>
            <Text style={style.title}>{ item.title }</Text>
            <Image source= {{uri: item.img}} style={{overflow:"visible", flex:1,}} />
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
                    data={pic}
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