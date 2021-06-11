import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import style from "../Styles/StyleCadastro"


const Cadastro = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail)
  }
  const onChangePassword = (txtPassword) => {
    setPassword(txtPassword)
  }

  const onChangeConfPassword = (txtConfPassword) => {
    setConfPassword(txtConfPassword)
  }

  async function verificarUsuario() {
    if (confPassword == password) {
      let response = await fetch("https://partiu-trips.herokuapp.com/verificarUsuario", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: email,

        })

      }

      )

      let json = await response.json()
      if (json == "usuario Cadastrado") {
        sendForm()
      } else {
        window.alert(json)
      }
    } else (
      window.alert("senha nao bate")
    )

  }


  async function sendForm() {
    if (confPassword == password) {
      let response = await fetch("https://partiu-trips.herokuapp.com/cadastro", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: email,
          password: password,
          confirmacao: confPassword

        })

      }

      )

      let json = await response.json()
      console.log(json)
      window.alert(json)
    } else (
      window.alert("senha nao bate")
    )

  }


  return (

    <ScrollView style={style.container}>

      <View style={style.header} >

        <Text style={style.titulo1}>Partiu</Text>
        <Text style={style.titulo2}>Trips</Text>

      </View>

      <View style={style.login}>

        <View style={{ flex: 1, marginBottom: 20, marginTop: 20 }}>

          <View style={{ height: "50%" }}>

            <Text style={{ color: "white", fontSize: 28, marginLeft: 24 }}>Cadastro</Text>

            <View style={{ flex: 1, justifyContent: "space-around" }}>
              <TextInput style={style.input} placeholder="Email" placeholderTextColor="#fff" onChangeText={txtEmail => onChangeEmail(txtEmail)} />
              <TextInput style={style.input} placeholder="Senha" placeholderTextColor="#fff" onChangeText={txtPassword => onChangePassword(txtPassword)} />
              <TextInput style={style.input} placeholder="Senha" placeholderTextColor="#fff" onChangeText={txtConfPassword => onChangeConfPassword(txtConfPassword)} />
              <TouchableHighlight onPress={() => { alert("nada") }} underlayColor="#1E7987">
                <Text style={{ alignSelf: "flex-end", color: "#fff", fontSize: 15, marginRight: "10%", marginTop: 10 }}>Esqueci minha senha</Text>
              </TouchableHighlight>
            </View>

          </View>

          <View style={{ height: "13%", justifyContent: "flex-end", marginTop: 10 }} >
            <Button
              buttonStyle={style.botao}
              title="Cadastrar"
              onPress={verificarUsuario}
              titleStyle={{ fontSize: 23 }}
            />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <View style={{ backgroundColor: "#fff", height: 1, marginTop: 27, width: "15%" }}></View>
            <Text style={{ marginTop: 22, color: "#fff", fontSize: 15 }}>Entrar com</Text>
            <View style={{ backgroundColor: "#fff", height: 1, marginTop: 27, width: "15%" }}></View>
          </View>

          <View style={{ height: "20%", alignItems: "center", justifyContent: "center" }}>
            <Image style={{ backgroundColor: "#fff", height: 60, width: 60, borderRadius: 50 }} source={require("../../icons/image_5.png")} />
          </View>

          <View style={{ flexDirection: "row", alignSelf: "center", height: 30, justifyContent: "flex-end" }}>
            <Text >Nao possui conta?</Text>
            <TouchableHighlight >
              <Text style={{ color: "#EB6458", marginLeft: 5 }}>Cadastre-se</Text>
            </TouchableHighlight>
          </View>

        </View>

      </View>

    </ScrollView>


  )
};


export default Cadastro
