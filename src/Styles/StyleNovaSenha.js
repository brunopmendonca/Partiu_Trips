import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    container1: {
        flexDirection: "column",
    },

    header: {
        backgroundColor: "#FBF8F8",
        alignItems: "center",
        justifyContent: "center",
        height: 226

    },

    titulo1: {
        fontSize: 55,
        color: "#EB6458"
    },

    titulo2: {

        fontSize: 50,
        color: "#1E7987"

    },

    loginIn: {

        marginLeft: 24

    },

    input: {
        //  backgroundColor:"#fff", 
        width: "80%",
        height: "20%",
        alignSelf: "center",
        borderBottomWidth: 1,
        borderColor: "#fff",
        fontSize: 20,

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
        height: 600

    }

})


export default style