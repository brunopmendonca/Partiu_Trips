import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements'


const PrimeiraTela = ({ route, navigation }) => {

    const [dados, setDados] = useState(route.params.nome)
    const [dados2, setDados2] = useState(route.params.id)

    console.log(dados)

    async function sendForm() {

        let response = await fetch("http://192.168.43.223:3000/viagens", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: route.params.nome,
                id: route.params.id,

            })

        })

        let json = await response.json()
        console.log(json)
        navigation.navigate("Bemvindo", [json, route.params.id])
    }

    return (

        <View style={style.container1}>

            <View style={style.simbolo}>
                <Image source={require('../../icons/simbolo.png')} />
            </View>


            <View style={style.titulo}>
                <Text style={{ fontSize: 28, color: "#1E7987" }}>{dados}</Text>
                <Text style={{ fontSize: 28, color: "#1E7987", marginTop: 20, marginBottom: 20 }}>
                    Deseja:
                </Text>

            </View>

            <Button
                buttonStyle={style.botao}
                title="Nova Viagem"
                onPress={() => { navigation.navigate("Dados", { id: dados2 }) }}
            />
            <Button
                buttonStyle={style.botao}
                title="Minhas Viagens"
                onPress={sendForm}
            />


        </View>

    )
};


const style = StyleSheet.create({

    container1: {
        flex: 1
    },

    simbolo: {
        height: "10%",
        alignItems: "baseline",
        justifyContent: "center",
        paddingLeft: 25

    },

    titulo: {
        height: "15%",
        alignItems: "center",
        justifyContent: "center",

    },

    figura: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },

    botao: {
        alignSelf: "center",
        backgroundColor: "#EB6458",
        width: "80%",
        height: "35%",
        borderRadius: 40,
    },


    title: {
        color: "blue",
        fontSize: 20
    },

    imagem: {
        alignSelf: "center",

    },


})


export default PrimeiraTela