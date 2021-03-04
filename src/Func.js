import React, { useState} from 'react';
import {  Text, View, StyleSheet, Image, TextInput, ScrollView  } from 'react-native';
import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../Firebaseconection'
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

const Func = ({navigation}) =>{
  


return ( 
  

<View>
  
  <Appbar.Header>
       <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        {/* <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
    </Appbar.Header>

</View>


)};


const style = StyleSheet.create({


  header:{
    flexDirection:"row",
    height:"15%",
    alignItems:"baseline",
    justifyContent:"space-around",
    paddingTop:30

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


  
  })
  


  export default Func