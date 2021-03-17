import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { Appbar, Avatar, Card, Title, Paragraph } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel';



const Gastos = ({ route, navigation }) => {

    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const [item, setItem] = useState()
    const [valor, setValor] = useState()
    const [Data, setData] = useState([])

    const onChangeItem = (e) => {
        setItem(e)
    }

    const onChangeValor = (e) => {
        setValor(e)
    }

    const handButton = () => {
        Data.push({
            valor: valor,
            item: item
        })
    }


    useEffect(() => {

        const renderItem = ({ item }) => (
            <View style={style.resultados}>
                <Text style={{ fontSize: 18 }}>
                    {item.valor}
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {item.item}
                </Text>
            </View>

            // < title={item.item} />
        );

    }, [Data])



    console.log(Data)



    return (

        <ScrollView style={style.container} >


            <View style={style.header} >
                <Image source={require("../icons/simbolo.png")} />
                <Text style={{ fontSize: 28, color: "#1E7987", textAlign: "center" }}>Viagem</Text>
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </View>


            <View style={style.entradas}>
                <Input placeholder="Item" onChangeText={onChangeItem} />
                <Input placeholder="valor" onChangeText={onChangeValor} />
                <Button title="marcar" onPress={handButton} />
            </View>


            <Card style={style.card}>
                <Card.Content>
                    <Title style={style.title} >Valor (Real)</Title>
                    <View style={style.lista} >
                        <FlatList
                            data={Data}
                            renderItem={renderItem}
                            keyExtractor={item => item.item}
                        />
                    </View>
                </Card.Content>
            </Card>


        </ScrollView>

    )
};


const style = StyleSheet.create({

    container: {
        flex: 1
    },

    header: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        marginTop: 20

    },

    title: {
        backgroundColor: "#E1F6BE",
        justifyContent: "center",
        color: "#55BC4C"
    },

    card: {

        backgroundColor: "#E1F6BE",
        marginTop: 20,
        justifyContent: "center"

    },

    entradas: {
        marginTop: 20
    },

    lista: {
        backgroundColor: "#fff"
    },

    resultados: {
        flexDirection: "row",
        justifyContent: "space-between"
    }



})



export default Gastos