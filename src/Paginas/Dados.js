import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import DatePicker from "react-native-datepicker"
import style from "../Styles/StyleDados"


const Dados = ({ route, navigation }) => {

  const [ida, setIda] = useState('')
  const [volta, setVolta] = useState('')
  const [imagem, setImagem] = useState('')
  const [user, setuser] = useState(route.params.id)
  const [lugar, setLugar] = useState('')
  console.log(user)

  const Handbotton = async () => {

    if (volta.length > 0 && ida.length > 0 && lugar.length > 0 && imagem.length > 0) {

      sendForm()

    }
    else (
      window.alert("Preencha todos os campos")
    )

  }


  async function sendForm() {

    let response = await fetch("https://partiu-trips.herokuapp.com/lista", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ida: ida,
        volta: volta,
        imagem: imagem,
        user: user,
        lugar: lugar


      })

    })

    let json = await response.json()
    console.log(json)
    navigation.navigate("PrimeiraTela")

  }

  return (

    <ScrollView style={style.container}>

      <View style={style.header} >

        <Image source={require("../../icons/simbolo.png")} />
        <Text style={{ fontSize: 28, color: "#1E7987", textAlign: "center" }}>Dados da Viagem</Text>
        <Text style={{ fontSize: 28, color: "#1E7987", textAlign: "center" }}></Text>

      </View>

      <View style={style.login}>

        <View style={{ flex: 1, marginBottom: 20, marginTop: 20, }}>

          <View style={style.input}>
            <TextInput style={{ borderBottomWidth: 1, borderColor: "#fff", fontSize: 20, height: "30%", marginBottom: 20 }} placeholder="Lugar" placeholderTextColor="#fff" onChangeText={txtEmail => setLugar(txtEmail)} />
            <DatePicker onDateChange={(e) => { setIda(e) }} style={{ borderBottomWidth: 1, borderColor: "#fff", fontSize: 20, height: "30%", width: "100%" }} date={ida} format="DD-MM-YYYY" />
            <DatePicker onDateChange={(e) => { setVolta(e) }} style={{ borderBottomWidth: 1, borderColor: "#fff", fontSize: 20, height: "30%", width: "100%" }} date={volta} format="DD-MM-YYYY" />
          </View>

          <View style={{ height: "50%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

            <View style={{ flexDirection: "column" }}>
              <TouchableHighlight onPress={() => { setImagem('praia') }} style={{ margin: 10, borderRadius: 20 }} underlayColor="#1E7987">
                <Image source={require("../../icons/praia.png")} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => { setImagem("inverno") }} style={{ margin: 10, borderRadius: 20 }} underlayColor="#1E7987">
                <Image source={require("../../icons/inverno.png")} />
              </TouchableHighlight>
            </View>

            <View style={{ flexDirection: "column" }}>

              <TouchableHighlight onPress={() => { setImagem('montanha') }} style={{ margin: 10, borderRadius: 20 }} underlayColor="#1E7987">
                <Image source={require("../../icons/montanha.png")} />
              </TouchableHighlight>

              <TouchableHighlight onPress={() => { setImagem('cidade') }} style={{ margin: 10, borderRadius: 20 }} underlayColor="#1E7987">
                <Image source={require("../../icons/cidade.png")} />
              </TouchableHighlight>

            </View>

          </View>

          <View style={{ flex: 1, justifyContent: "center" }} >
            <Button
              buttonStyle={style.botao}
              titleStyle={{ fontSize: 23 }}
              onPress={Handbotton}
              title={"Criar Viagem"}
            />
          </View>

        </View>

      </View>

    </ScrollView>

  )
};

export default Dados