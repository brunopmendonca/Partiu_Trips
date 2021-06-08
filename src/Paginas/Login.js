import React, { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import style from '../Styles/StyleLogin'
import config from '../../config/config.json'


const Login = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail)
  }
  const onChangePassword = (txtPassword) => {
    setPassword(txtPassword)
  }

  async function sendForm() {

    let response = await fetch(`${config.urlRoot}login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'responseType': 'text'
      },
      body: JSON.stringify({
        name: email,
        password: password

      })

    })

    let json = await response.json()
    console.log(json)

    if (json == null) {
      window.alert("nao possui cadastro")
    }
    else (
      navigation.navigate("PrimeiraTela", json)
    )

  }


  return (

    <ScrollView>

      <View style={style.header} >

        <View style={style.simbolo}>
          <Image source={require("../../icons/simbolo.png")} />
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={style.titulo1}>Partiu</Text>
          <Text style={style.titulo2}>Trips</Text>
        </View>

      </View>

      <View style={style.login}>

        <Text style={{ color: "white", fontSize: 28, marginLeft: 24 }}>Login</Text>

        <View style={{ marginTop: 7 }}>
          <TextInput onChangeText={txtEmail => onChangeEmail(txtEmail)} style={style.input} placeholder="Email" placeholderTextColor="#fff" />
          <TextInput onChangeText={txtPassword => onChangePassword(txtPassword)} style={style.input} placeholder="Senha" placeholderTextColor="#fff" />
          <TouchableHighlight onPress={() => navigation.navigate("NovaSenha")} underlayColor="#1E7987">
            <Text style={{ alignSelf: "flex-end", color: "#fff", fontSize: 15, marginRight: "10%", marginTop: 10 }}>Esqueci minha senha</Text>
          </TouchableHighlight>
        </View>

        <View style={{ height: "13%", justifyContent: "flex-end", marginTop: 30 }} >
          <Button
            buttonStyle={style.botao}
            title="Entrar"
            onPress={sendForm}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <View style={{ backgroundColor: "#fff", height: 1, marginTop: 27, width: "15%" }}></View>
          <Text style={{ marginTop: 22, color: "#fff", fontSize: 15 }}>Entrar com</Text>
          <View style={{ backgroundColor: "#fff", height: 1, marginTop: 27, width: "15%" }}></View>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image style={{ backgroundColor: "#fff", height: 60, width: 60, borderRadius: 50, marginBottom: 20, marginTop: 20 }} source={require("../../icons/image_5.png")} />
        </View>

        <View style={{ flexDirection: "row", alignSelf: "center", flex: 1, justifyContent: "flex-end", marginBottom: 100 }}>
          <Text >Nao possui conta?</Text>
          <TouchableHighlight onPress={() => navigation.navigate('Cadastro')}>
            <Text style={{ color: "#EB6458", marginLeft: 5 }}>Cadastre-se</Text>
          </TouchableHighlight>
        </View>

      </View>

    </ScrollView>
  )
};



export default Login