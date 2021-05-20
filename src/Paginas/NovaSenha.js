import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import style from "../Styles/StyleNovaSenha"


const NovaSenha = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) => {
        setNewPassword(txtPassword)
    }

    const onChangeConfPassword = (txtConfPassword) => {
        setConfPassword(txtConfPassword)
    }

    async function sendForm() {
        if (confPassword == newPassword) {
            let response = await fetch("http://192.168.43.223:3000/TrocarSenha", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: email,
                    password: newPassword,
                    confirmacao: confPassword

                })

            }

            )


            window.alert("Senha trocada com sucesso")
        } else (
            window.alert("verifique se as senhas estão iguais")
        )

    }

    return (

        <ScrollView style={style.container}>

            <View style={style.header} >

                <Text style={style.titulo1}>Partiu</Text>
                <Text style={style.titulo2}>Trips</Text>

            </View>

            <View style={style.login}>

                <View style={{ flex: 1, marginTop: 20 }}>

                    <View style={{ height: "70%" }}>

                        <Text style={{ color: "white", fontSize: 28, marginLeft: 24 }}>Nova Senha</Text>

                        <View style={{ flex: 1, justifyContent: "space-around" }}>
                            <TextInput style={style.input} placeholder="Usuario" placeholderTextColor="#fff" onChangeText={txtEmail => onChangeEmail(txtEmail)} />
                            <TextInput style={style.input} placeholder="Nova senha" placeholderTextColor="#fff" onChangeText={txtPassword => onChangePassword(txtPassword)} />
                            <TextInput style={style.input} placeholder="Escreva novamente a nova senha" placeholderTextColor="#fff" onChangeText={txtConfPassword => onChangeConfPassword(txtConfPassword)} />
                        </View>

                    </View>

                    <View style={{ height: "13%", justifyContent: "flex-end", marginTop: 10 }} >
                        <Button
                            buttonStyle={style.botao}
                            title="Trocar Senha"
                            onPress={sendForm}
                            titleStyle={{ fontSize: 23 }}
                        />
                    </View>

                </View>

            </View>

        </ScrollView>


    )
};


export default NovaSenha