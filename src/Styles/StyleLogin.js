import { StyleSheet } from 'react-native';


const style = StyleSheet.create({

    simbolo: {
        height: "20%",
        alignItems: "baseline",
        justifyContent: "center",
        alignItems: "baseline",
        paddingLeft: 25,

    },

    header: {
        backgroundColor: "#FBF8F8",
        height: "30%"

    },

    titulo1: {
        fontSize: 55,
        color: "#EB6458",
    },

    titulo2: {
        fontSize: 50,
        color: "#1E7987",
    },

    loginIn: {
        marginLeft: 24
    },

    input: {

        width: "80%",
        alignSelf: "center",
        borderBottomWidth: 1,
        borderColor: "#fff",
        fontSize: 20,
        marginTop: 50
    },

    botao: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#EB6458",
        width: "80%",
        height: "80%",
        borderRadius: 40,
    },

    login: {
        backgroundColor: "#1E7987",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingTop: 10,
        paddingBottom: 50,
        height: 700
    }

})


export default style