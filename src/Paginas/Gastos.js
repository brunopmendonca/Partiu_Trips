import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Modal, ScrollView, TouchableOpacity, FlatList, TouchableHighlight, SafeAreaView, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { Appbar, Card, Title, Paragraph, List } from 'react-native-paper'
import axios from 'axios';

import style from '../Styles/StyleGastos'

const Gastos = ({ route }) => {

    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const [item, setItem] = useState(" ")
    const [valor, setValor] = useState(0)
    const [api, setApi] = useState([])
    const [moeda, setMoeda] = useState(1)
    const [quantidade, setQuantidade] = useState(1)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [moedaSelecionada, setMoedaSelecionada] = useState()
    const [dadosApi, setDadosApi] = useState(route.params)
    const [viagemId, setViagemId] = useState(dadosApi[1])
    const [BancoDeDados, setBancoDeDados] = useState(dadosApi[0])
    const [valorTotal, setValorTotal] = useState(dadosApi[2])

    console.log(dadosApi)

    async function restart() {

        let response = await fetch("https://partiu-trips.herokuapp.com/restart", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: viagemId
            })

        })

        var json = await response.json()

        setBancoDeDados(json)
        gastosTotal()

    }

    async function gastosTotal() {

        let response = await fetch("https://partiu-trips.herokuapp.com/gastoTotal", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: viagemId
            })

        })

        var json = await response.json()
        console.log(json)
        setValorTotal(json)

    }

    async function sendForm2() {

        let response = await fetch("https://partiu-trips.herokuapp.com/enviarGasto", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lista: item,
                viagemId: viagemId,
                valor: valor,
                valorInicial: valor,
                quantidade: quantidade
            })

        })

        let json = await response.json()
        restart()

    }

    async function deleteSendForm(parametro, paramentro2) {

        let response = await fetch("https://partiu-trips.herokuapp.com/deletarGasto", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: parametro,
                viagemId: paramentro2,


            })

        })

        let json = await response.json()
        console.log(json)
        restart()
    }

    async function adicionarQuantidade(parametro1, paramentro2, paramentro3) {

        let response = await fetch("https://partiu-trips.herokuapp.com/adicionarQuantidade", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: parametro1,
                viagemId: paramentro2,
                valorInicial: paramentro3

            })

        })

        let json = await response.json()
        console.log(json)
        restart()

    }

    async function retirarQuantidade(parametro1, paramentro2, paramentro3) {

        let response = await fetch("https://partiu-trips.herokuapp.com/retirarQuantidade", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: parametro1,
                viagemId: paramentro2,
                valorInicial: paramentro3

            })

        })

        let json = await response.json()
        console.log(json)
        restart()

    }

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



    const onChangeItem = (e) => {
        setItem(e)
    }

    const onChangeValor = (e) => {
        setValor(parseFloat(e))


    }

    const Handbotton = async () => {

        if (item.length > 0 && valor > 0) {

            sendForm2()

        }
        else (
            window.alert("Preencha todos os campos")
        )

    }

    const renderItem = ({ item }) => {

        return (
            <View style={style.resultados}>
                <Text style={{ fontSize: 18 }}>
                    {item.lista}
                </Text>
                <View style={{ fontSize: 18, flexDirection: "row", }}>


                    <Text style={{ alignSelf: "center", padding: 10, }} >
                        {item.quantidade}
                    </Text>


                    <Button title="+"
                        onPress={() => {

                            adicionarQuantidade(item.id, item.viagemId, item.valor)

                        }} />

                    <Text style={{ alignSelf: "center", padding: 10, }} >
                        {item.valorInicial}
                    </Text>

                    <Button title="-"
                        buttonStyle={{ marginRight: 20 }}
                        onPress={() => {

                            retirarQuantidade(item.id, item.viagemId, item.valor)
                            setValorTotal(BancoDeDados.reduce((total, preco) => total + preco.valor, 0))

                        }} />

                    <Button title="deletar"
                        buttonStyle={{ alignSelf: "center", marginRight: 10 }}
                        onPress={() => { deleteSendForm(item.id, item.viagemId) }} />
                </View>

            </View>

        )

    }
    return (

        <ScrollView style={style.container} >


            <View style={style.header} >
                <Image source={require("../../icons/simbolo.png")} />
                <Text style={{ fontSize: 28, color: "#1E7987", textAlign: "center" }}>Viagem</Text>
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </View>


            <View style={style.body}>

                <View style={style.entradasGrupo}>
                    <Input style={style.entradas} placeholder="Item" onChangeText={onChangeItem} placeholderTextColor="#fff" />
                    <Input style={style.entradas} placeholder="valor" onChangeText={onChangeValor} keyboardType="numeric" placeholderTextColor="#fff" />
                </View>

                <Button buttonStyle={style.botao} title="marcar" onPress={Handbotton} />

                <View style={style.modal}>
                    <View style={style.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible1}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={style.centeredView}>
                                <View style={style.modalView}>
                                    <Text style={style.modalText}>Escolha a moeda que ira utilizar nessa viagem</Text>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            setMoedaSelecionada("Dolar")
                                        }}>
                                        <Text>Dolar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            setMoedaSelecionada("Euro")
                                        }}>
                                        <Text>Euro</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            setMoedaSelecionada("Libra")
                                        }}>
                                        <Text>Libra</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            setMoedaSelecionada("Peso")
                                        }}>
                                        <Text>Peso Argentino</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            setMoedaSelecionada("Dolar (C)")
                                        }}>
                                        <Text>Dolar Canadense</Text>
                                    </TouchableOpacity>

                                    <TouchableHighlight

                                        style={{ ...style.openButton, backgroundColor: '#2196F3' }}
                                        onPress={() => {
                                            setModalVisible1(!modalVisible1);
                                        }}>
                                        <Text style={style.textStyle}>Fechar</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        <TouchableHighlight
                            style={style.openButton}
                            onPress={() => {
                                setModalVisible1(true);
                            }}>
                            <Text style={style.textStyle}>Selecione a Moeda</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={style.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={style.centeredView}>
                                <View style={style.modalView}>
                                    <Text style={style.modalText}>Sua moeda utilizado foi {moedaSelecionada}. Desesa converter para qual moeda?</Text>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            window.alert((valorTotal * api[0].dolar).toFixed(2))
                                        }}>
                                        <Text>Dolar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            window.alert((valorTotal * api[0].euro).toFixed(2))
                                        }}>
                                        <Text>Euro</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            window.alert((valorTotal * api[0].pesoArgentino).toFixed(2))
                                        }}>
                                        <Text>Peso</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            window.alert((valorTotal * api[0].libra).toFixed(2))
                                        }}>
                                        <Text>Libra</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={style.opçoesMoeda}
                                        onPress={() => {
                                            window.alert((valorTotal * api[0].dolarCanadense).toFixed(2))
                                        }}>
                                        <Text>Dolar (C)</Text>
                                    </TouchableOpacity>


                                    <TouchableHighlight
                                        style={{ ...style.openButton, backgroundColor: '#2196F3' }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <Text style={style.textStyle}>Fechar</Text>
                                    </TouchableHighlight>

                                </View>
                            </View>
                        </Modal>



                        <TouchableHighlight
                            style={style.openButton}
                            onPress={() => {
                                setModalVisible(true);
                            }}>
                            <Text style={style.textStyle}>Converter para Real</Text>
                        </TouchableHighlight>
                    </View>

                </View>

                <Card style={style.card}>
                    <Card.Content>
                        <Title style={style.title} >Valor em: {moedaSelecionada}</Title>
                        <Paragraph> {valorTotal} </Paragraph>
                        <View style={style.lista} >
                            <FlatList
                                data={BancoDeDados}
                                renderItem={renderItem}
                                keyExtractor={item => item.item}
                            />
                        </View>
                    </Card.Content>
                </Card>
            </View>


        </ScrollView >

    )
};


export default Gastos

