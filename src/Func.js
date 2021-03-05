import React, { useState} from 'react';
import {  Text, View, StyleSheet, Image, TextInput, ScrollView  } from 'react-native';
// import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../Firebaseconection'
import { Appbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Platform } from 'react-native';

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

     
         

      <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
      </Card>
     

</ScrollView>




)};


const style = StyleSheet.create({


  header:{
    flexDirection:"row",
    alignItems:"baseline",
    justifyContent:"space-around",

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
    
  },

  viagem:{
    
    
  },

  imagem:{
    overflow:"visible", 
    width:"100%",
    
    
  }


  
  })
  


  export default Func