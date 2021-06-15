import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Appbar, Avatar, Card, Title, Paragraph } from 'react-native-paper';
// import { Platform } from 'react-native';
// import MapView from 'react-native-maps';
// import Constants from 'expo-constants';
// import * as Location from 'expo-location';
import style from "../Styles/StyleFuncionalidades"
// import Cards from '../Componentes/Cards'

const Funcionalidades = ({ navigation, route }) => {

  console.log(route.params)
  // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  // const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const [ida, setIda] = useState(route.params.ida)
  const [volta, setVolta] = useState(route.params.volta)
  const [imagem, setImagem] = useState(route.params.imagem)
  const [lugar, setIlugar] = useState(route.params.lugar)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState();
  const [text, setText] = useState();
  const [regiao, setRegiao] = useState()

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS === 'android' && !Constants.isDevice) {
  //       setErrorMsg(
  //         'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
  //       );
  //       return;
  //     }
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);

  //     if (errorMsg) {
  //       setText(errorMsg);
  //     } else if (location) {
  //       setRegiao({
  //         latitude: location.coords.latitude,
  //         longitude: location.coords.longitude,
  //         latitudeDelta: 0.33,
  //         longitudeDelta: 0.041,
  //       })
  //     }
  //   })();
  // }, []);


  const navGastos = async () => {

    let response = await fetch("https://partiu-trips.herokuapp.com/gasto", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: route.params.id,
      })

    })

    var json = await response.json()
    console.log(json.length)
    let soma = json.reduce((total, preco) => preco.valor + total, 0)
    console.log(soma)
    navigation.navigate("Gastos", [json, route.params.id, soma])


  }

  const navArquivos = () => {
    navigation.navigate("Arquivos")

  }

  return (

    <ScrollView>

      <View style={style.header} >
        <Image source={require("../../icons/simbolo.png")} />
        <Text style={{ fontSize: 28, color: "#1E7987", textAlign: "center" }}>Viagem</Text>
        {/* <Appbar.Action icon={MORE_ICON} onPress={() => { }} /> */}
      </View>

      {/* <Cards ida={ida} volta={volta} lugar={lugar} /> */}

      <Card style={style.card}>
        <Card.Cover style={style.imagem} source={imagem} />
        <Card.Content>
          <Title>{lugar}</Title>
          <View style={style.datas}>
            <Paragraph>{ida}</Paragraph>
            <Paragraph> até </Paragraph>
            <Paragraph> {volta} </Paragraph>
          </View>
        </Card.Content>
      </Card>

      <View style={style.grupo}>

        <TouchableOpacity style={style.opcao} onPress={navGastos} >
          <Image style={style.iconi} source={require("../../icons/image_8.png")} />
          <Text style={style.textoOpcao}> Gastos </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.opcao} onPress={navArquivos} >
          <Image style={style.iconi} source={require("../../icons/image_9.png")} />
          <Text style={style.textoOpcao}> Arquivos </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.opcao} >
          <Text style={style.textoOpcao}> QR code </Text>
        </TouchableOpacity>

      </View>

      <View style={style.grupo}>

        <TouchableOpacity style={style.opcao} >
          <Text style={style.textoOpcao}> Camera </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.opcao} >
          <Text style={style.textoOpcao}> Lista </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.opcao} >
          <Text style={style.textoOpcao}> Mapa </Text>
        </TouchableOpacity>

      </View>

      {/* <Card style={style.card2}>
        <MapView
          style={style.mapa}
          initialRegion={regiao}
        />
        <Text>Ponto de parada</Text>
      </Card> */}

    </ScrollView>

  )
};

export default Funcionalidades