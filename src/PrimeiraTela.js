import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { Appbar, Avatar, Card, Title, Paragraph } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel';



const PrimeiraTela = ({ route, navigation }) => {

    const [dados, setDados] = useState(route.params.nome)

    console.log(dados)

    return (

        <View style={style.container1}>

            <View style={style.simbolo}>
                <Image source={require('../icons/simbolo.png')} />
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
                onPress={() => { navigation.navigate("Dados") }}
            />
            <Button
                buttonStyle={style.botao}
                title="Minhas Viagens"
                onPress={() => { navigation.navigate("Bemvindo") }}
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
        // justifyContent: "center",
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