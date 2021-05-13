
import { StyleSheet } from 'react-native'

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

    modal: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    opçoesMoeda: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        width: 200,
        height: 40,
        borderRadius: 20,
        marginTop: 20
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
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around"
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

    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        flexDirection: "column",
        alignItems: "stretch",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#EB6458',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 20
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },


})



export default style