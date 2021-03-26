import React, { useState, Component, useRef } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, FlatList, DatePickerAndroid, SafeAreaView } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { Appbar, Card, Title, Paragraph, List } from 'react-native-paper'
import axios from 'axios';
import ReactNativePickerModule from "react-native-picker-module"

const Gastos = () => {

    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const [item, setItem] = useState(" ")
    const [valor, setValor] = useState(0)
    const [Data, setData] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    const [expanded, setExpanded] = useState(true);
    const [api, setApi] = useState([])
    const [moeda, setMoeda] = useState(1)
    const [id, setId] = useState()
    const [quantidade, setQuantidade] = useState(1)
    const [lista, setLista] = useState([])





    let res = axios.get('https://economia.awesomeapi.com.br/json/all').then(response => {
        api.push({
            dolar: response.data.USD.bid,
            euro: response.data.EUR.bid,
            pesoArgentino: response.data.ARS.bid,
            libra: response.data.GBP.bid,
            dolarCanadense: response.data.CAD.bid


        })
    }).catch(() => {
        console.log('Error retrieving data')
    })

    // const handlePress = () => setExpanded(!expanded);

    const onChangeItem = (e) => {
        setItem(e)
    }

    const onChangeValor = (e) => {
        setValor(parseFloat(e))
        setId(Math.random())

    }

    const Handbotton = () => {

        if (item.length > 0 && valor > 0) {
            Data.push({
                valori: valor,
                item: item,
                valor: valor,
                id: Data.length,
                quantidade: quantidade
            })


            let total = Data.reduce((total, preco) => total + preco.valor, 0)
            setValorTotal(total.toFixed(2))

        }
        else (
            window.alert("Preencha todos os campos")
        )

    }

    console.log(Data)
    console.log(lista)

    const renderItem = ({ item }) => {

        const ide = Data.findIndex(a => {
            return a === item
        })


        // if (item.quantidade > 0) {
        //     var quantidade1 = item.quantidade
        // }


        return (
            <View style={style.resultados}>
                <Text style={{ fontSize: 18 }}>
                    {item.item}
                </Text>
                <View style={{ fontSize: 18, flexDirection: "row", }}>


                    <Text style={{ alignSelf: "center", padding: 10, }} >
                        {item.quantidade}
                    </Text>


                    <Button title="+"
                        onPress={() => {
                            Data.splice(ide, 0)
                            Data[ide] = {
                                valori: item.valori,
                                item: item.item,
                                valor: item.valor + item.valori,
                                id: Data.length,
                                quantidade: item.quantidade + 1
                            }

                            setValorTotal(Data.reduce((total, preco) => total + preco.valor, 0))

                        }} />

                    <Text style={{ alignSelf: "center", padding: 10, }} >
                        {item.valori}
                    </Text>

                    <Button title="-"
                        buttonStyle={{ marginRight: 20 }}
                        onPress={() => {
                            if (item.quantidade >= 2) {
                                Data.splice(ide, 0)
                                Data[ide] = {
                                    valori: item.valori,
                                    item: item.item,
                                    valor: item.valor - item.valori,
                                    id: Data.length,
                                    quantidade: item.quantidade - 1
                                }


                                setValorTotal(Data.reduce((total, preco) => total + preco.valor, 0))
                            }


                        }} />

                    <Button title="deletar"
                        buttonStyle={{ alignSelf: "center", marginRight: 10 }}
                        onPress={() => {
                            Data.splice(ide, 1)
                            let total = Data.reduce((total, preco) => total + preco.valor, 0)
                            setValorTotal(total.toFixed(2))
                        }} />
                </View>

            </View>

        )

    }
    return (

        <ScrollView style={style.container} >


            <View style={style.header} >
                <Image source={require("../icons/simbolo.png")} />
                <Text style={{ fontSize: 28, color: "#1E7987", textAlign: "center" }}>Viagem</Text>
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </View>


            <View style={style.body}>
                <View style={style.entradasGrupo}>
                    <Input style={style.entradas} placeholder="Item" onChangeText={onChangeItem} placeholderTextColor="#fff" />
                    <Input style={style.entradas} placeholder="valor" onChangeText={onChangeValor} keyboardType="numeric" placeholderTextColor="#fff" />
                </View>

                <Button buttonStyle={style.botao} title="marcar" onPress={Handbotton} />


                <Card style={style.card}>
                    <Card.Content>
                        <Title style={style.title} >Valor (Real)</Title>
                        <Paragraph> R$ {valorTotal} </Paragraph>
                        <View style={style.lista} >
                            <FlatList
                                data={Data}
                                renderItem={renderItem}
                                keyExtractor={item => item.item}
                            />
                        </View>
                    </Card.Content>
                </Card>


                <List.Section style={style.conversor} >
                    <List.Accordion style={style.textOptions}
                        title="Converter moeda"
                        left={props => <List.Icon {...props} />}>
                        <TouchableOpacity onPress={() => {
                            //setMoeda(api[0].dolar)
                            //   let total = Data.reduce((total, preco) => total + preco.valor, 0)
                            window.alert((valorTotal * api[0].dolar).toFixed(2))
                        }}>
                            <List.Item color="#fff" title="Dolar" />
                        </TouchableOpacity >

                        <TouchableOpacity
                            onPress={() => {
                                //  setMoeda(api[0].euro)
                                //  let total = Data.reduce((total, preco) => total + preco.valor, 0)
                                window.alert((valorTotal * api[0].euro).toFixed(2))
                            }}>
                            <List.Item title="Euro" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            // setMoeda(api[0].pesoArgentino)
                            // let total = Data.reduce((total, preco) => total + preco.valor, 0)
                            window.alert((valorTotal * api[0].pesoArgentino).toFixed(2))
                        }}>
                            <List.Item title="Peso Argentino" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            setMoeda(api[0].libra)
                            let total = Data.reduce((total, preco) => total + preco.valor, 0)
                            window.alert((valorTotal * api[0].libra).toFixed(2))
                        }}>
                            <List.Item title="libra" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            //  setMoeda(api[0].dolarCanadense)
                            // let total = Data.reduce((total, preco) => total + preco.valor, 0)
                            window.alert((valorTotal * api[0].dolarCanadense).toFixed(2))
                        }}>
                            <List.Item title="Dolar Canadense" />
                        </TouchableOpacity>

                    </List.Accordion>
                </List.Section>
            </View>


        </ScrollView >

    )
};


const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#1E7987"
    },

    header: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#FFF"

    },

    title: {
        backgroundColor: "#E1F6BE",
        justifyContent: "center",
        color: "#55BC4C"
    },

    body: {
        flex: 1,
        backgroundColor: "#1E7987",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        marginTop: 20

    },

    entradasGrupo: {
        width: "90%",
        alignSelf: "center"
    },

    card: {

        backgroundColor: "#FFF",
        marginTop: 20,
        justifyContent: "center",
        padding: 5,
        flex: 1



    },

    entradas: {
        marginTop: 20,
        alignSelf: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#fff",
        fontSize: 20,
        padding: 5
    },

    textOptions: {
        color: "#fff",
        flex: 1
    },

    conversor: {

        backgroundColor: "#1E7987",
        width: "80%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 40,
        flex: 1

    },

    lista: {
        backgroundColor: "#fff",
        flex: 1

    },

    resultados: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6
    },

    botao: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#EB6458",
        width: "80%",
        // height: 50,
        borderRadius: 40,
        padding: 5

    }



})



export default Gastos