
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    container1: {
        flexDirection: "column",
        height: "100%"
    },

    header: {
        flexDirection: "row",
        backgroundColor: "#FBF8F8",
        height: "15%",
        alignItems: "baseline",
        justifyContent: "space-around",
        paddingTop: 30

    },

    simbolo: {
        alignItems: "baseline",
        justifyContent: "center",
        alignItems: "baseline",

    },

    input: {
        //  backgroundColor:"#fff", 
        width: "80%",
        height: "20%",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 30

    },

    botao: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#EB6458",
        width: "80%",
        height: "55%",
        borderRadius: 40,

    },

    login: {
        backgroundColor: "#1E7987",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        height: 784

    }

})


export default style