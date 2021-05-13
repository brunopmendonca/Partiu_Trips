import { StyleSheet } from "react-native"



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
        justifyContent: "center",
        padding: 5

    },

    entradas: {
        marginTop: 20
    },

    lista: {
        backgroundColor: "#fff"
    },

    resultados: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6
    }



})

export default style