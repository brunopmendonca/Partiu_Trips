import React from 'react'
import { Appbar, Avatar, Card, Title, Paragraph } from 'react-native-paper';
import style from '../Styles/StyleFuncionalidades'



const Cards = (ida, volta, lugar) => {

    return (

        <Card style={style.card}>
            <Card.Cover style={style.imagem} source={imagem} />
            <Card.Content>
                <Title>{lugar}</Title>
                <View style={style.datas}>
                    <Paragraph>{ida}</Paragraph>
                    <Paragraph> até </Paragraph>
                    <Paragraph> {volta} </Paragraph>
                </View>
            </Card.Content>
        </Card>
    )


}

export default Cards