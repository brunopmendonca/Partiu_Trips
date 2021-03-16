import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { Appbar, Avatar, Card, Title, Paragraph } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel';



const Gastos = ({ route, navigation }) => {

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

    console.log(Data)

    const renderItem = ({ item }) => (
        <View>
            <Text>
                {item.valor}
            </Text>
            <Text>
                {item.item}
            </Text>
        </View>

        // < title={item.item} />
    );


    return (

        <ScrollView style={style.container} >

            <Input placeholder="Item" onChangeText={onChangeItem} />
            <Input placeholder="valor" onChangeText={onChangeValor} />
            <Button title="marcar" onPress={handButton} />

            <View>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={item => item.item}
                />
            </View>


        </ScrollView>

    )
};


const style = StyleSheet.create({

    container: {
        flex: 1
    }



})



export default Gastos