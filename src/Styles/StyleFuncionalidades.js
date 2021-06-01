
import { StyleSheet } from 'react-native'


const style = StyleSheet.create({

    header: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
        marginTop: 20

    },

    simbolo: {
        alignItems: "baseline",
        justifyContent: "center",
        alignItems: "baseline",

    },

    titulo: {
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20

    },

    card: {
        marginTop: 20,
        borderRadius: 40,
        width: "90%",
        alignSelf: "center",
        padding: 20

    },

    card2: {
        marginTop: 20,
        borderRadius: 40,
        width: "90%",
        alignSelf: "center",
        padding: 20,
        marginBottom: 40

    },

    imagem: {
        width: "90%",
        alignSelf: "center",
        justifyContent: "center"

    },

    datas: {
        flexDirection: "row",
    },

    grupo: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 20,
        padding: 5
    },

    opcao: {
        backgroundColor: "#1E7987",
        height: 100,
        width: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"

    },

    textoOpcao: {
        color: "#fff"
    },

    iconi: {
        height: 40,
        width: 40
    },

    mapa: {
        width: 300,
        height: 300,
        alignSelf: "center",
        marginTop: 20
    },

    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    }

})



export default style