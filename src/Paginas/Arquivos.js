import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, FlatList, DatePickerAndroid } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { Appbar, Avatar, Card, Title, Paragraph, List } from 'react-native-paper'
import style from "../Styles/StyleArquivo"

const Arquivos = ({ route, navigation }) => {

    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const [item, setItem] = useState(" ")
    const [valor, setValor] = useState(0)
    const [Data, setData] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    const [nada, setNada] = useState(0)
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);


    const onChangeItem = (e) => {
        setItem(e)
    }

    const onChangeValor = (e) => {
        setValor(parseFloat(e))
    }

    console.log(item.length)
    console.log(valor)

    const Handbotton = () => {

        if (item.length > 0 && valor > 0) {
            Data.push({
                item: item,
                valor: valor,
            })

            let total = Data.reduce((total, preco) => total + preco.valor, 0)
            setValorTotal(total.toFixed(2))
        }
        else (
            window.alert("Preencha todos os campos")
        )

    }

    console.log(Data)

    const renderItem = ({ item }) => {

        const ide = Data.findIndex(a => {
            return a === item
        })

        console.log(ide)

        return (
            <View style={style.resultados}>
                <Text style={{ fontSize: 18 }}>
                    {item.item}
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {item.valor}
                </Text>

                <Button title="excluir" onPress={() => {
                    Data.splice(ide, 1)
                    let total = Data.reduce((total, preco) => total + preco.valor, 0)
                    setValorTotal(total.toFixed(2))
                    setNada(nada)

                }} />
            </View>

        )
    }

    console.log(Data)

    return (

        <ScrollView style={style.container} >


            <View style={style.header} >
                <Image source={require("../../icons/simbolo.png")} />
                <Text style={{ fontSize: 28, color: "#1E7987", textAlign: "center" }}>Viagem</Text>
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </View>


            <View style={style.entradas}>
                <Input placeholder="Item" onChangeText={onChangeItem} />
                <Input placeholder="valor" onChangeText={onChangeValor} keyboardType="numeric" />
                <Button title="marcar" onPress={Handbotton} />
            </View>


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


        </ScrollView>

    )
};


export default Arquivos