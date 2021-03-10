import React, { useState, useEffect} from 'react';
import {  Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity  } from 'react-native';
// import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../Firebaseconection'
import { Appbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Platform } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const Func = ({navigation, route}) =>{
  
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const [ida, setIda]= useState(route.params.ida)
  const [volta, setVolta]= useState(route.params.volta)
  const [imagem, setImagem]= useState(route.params.imagem)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState();
  const [text, setText] = useState();
  const [longitude, setLongitude] = useState();
  const [regiao, setRegiao]= useState()

    useEffect(() => {
      (async () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          setErrorMsg(
            'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
          );
          return;
        }
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        if (errorMsg) {
          setText(errorMsg) ;
        } else if (location) {
          setRegiao({latitude : location.coords.latitude , 
            longitude : location.coords.longitude , 
            latitudeDelta : 0.33 , 
            longitudeDelta : 0.041 ,}) 
        }
      })();
    }, []);


      
    
  
   
 


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

      
          <MapView
            style={style.mapa}
            initialRegion={regiao}
          />

        <View style={style.container}>
          <Text style={style.paragraph}>{text}</Text>
          {/* <Text style={style.paragraph}>{latitude}</Text> */}
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

  mapa:{
    width:300,
    height:300,
    alignSelf:"center",
    marginTop:20
  },

  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
  
  })
  


  export default Func