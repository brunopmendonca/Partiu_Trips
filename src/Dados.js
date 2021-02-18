import React, {useState} from 'react';
import {  Text, View, StyleSheet, Image, TextInput,ScrollView  } from 'react-native';
import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../Firebaseconection'


const Dados = ({navigation}) =>{
  
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState ('')


  const onChangeEmail = (txtEmail) => {
      setEmail(txtEmail)
  }
  const onChangePassword = (txtPassword) =>{
      setPassword(txtPassword)
  }

  const onChangeConfPassword = (txtConfPassword) =>{
    setConfPassword(txtConfPassword)
}


  const cadastration = () =>{
    if(confPassword == password){
      firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        
    }).catch(()=>{
        window.alert("login nao funcionou")
    })
    }else(
      window.alert("senha nao bate")
    )
    }

 
 
 
 
 
 
 
 
 
  return ( 
  

<ScrollView style= {style.container}>

<View style= {style.header} >

    
    <Image source={require("../icons/simbolo.png")}/>
    <Text style={{fontSize:28, color:"#1E7987", textAlign:"center"}}>Dados da Viagem</Text>
    <Text style={{fontSize:28, color:"#1E7987", textAlign:"center"}}></Text>
    

</View>


      <View style= {style.login}>

              <View style= {{flex:1, marginBottom:20,marginTop:20, }}>
          
                      
                        
                       
                        <View style={style.input}>
                            <TextInput style={{borderBottomWidth: 1,borderColor: "#fff",fontSize:20,height:"30%", marginBottom:20}}  placeholder= "Email"  placeholderTextColor="#fff" onChangeText={txtEmail => onChangeEmail(txtEmail)}/>
                            <TextInput style={{borderBottomWidth: 1,borderColor: "#fff",fontSize:20, height:"30%"}}  placeholder= "Senha"  placeholderTextColor="#fff" onChangeText={txtPassword => onChangePassword(txtPassword)}/>
                        </View>
                       
                        <View style={{height:"50%", flexDirection:"row",justifyContent:"center", alignItems:"center"}}>

                            <View style={{flexDirection:"column"}}>

                            
                                 <TouchableHighlight style={{ margin:10, borderRadius:20}} onPress = {()=> navigation.navigate('Bemvindo')} underlayColor="#1E7987">
                                    <Image   source={require("../icons/praia.png")}/>
                                 </TouchableHighlight>
                            
                                 <TouchableHighlight style={{ margin:10, borderRadius:20}} onPress = {()=> navigation.navigate('Bemvindo')} underlayColor="#1E7987">
                                    <Image   source={require("../icons/inverno.png")}/>
                                 </TouchableHighlight>
                            
                            

                            </View>

                           
                            <View style={{flexDirection:"column"}}>

                            <TouchableHighlight style={{  margin:10, borderRadius:20}} onPress = {()=> navigation.navigate('Bemvindo')} underlayColor="#1E7987">
                                    <Image   source={require("../icons/montanha.png")}/>
                            </TouchableHighlight>
                                
                            <TouchableHighlight style={{ margin:10, borderRadius:20}} onPress = {()=> navigation.navigate('Bemvindo')} underlayColor="#1E7987">
                                    <Image   source={require("../icons/cidade.png")}/>
                            </TouchableHighlight>  

                            </View>

                        </View>


                      <View style={{ flex:1,justifyContent:"center"}} >
                      <Button 
                            buttonStyle = {style.botao}
                            title="Cadastrar"
                            onPress = {cadastration}
                            titleStyle={{fontSize:23}}
                            />
                      </View>
          


                      

              </View>

      </View>
  


</ScrollView>
  

  )};

  const style = StyleSheet.create({

    container1:{
      flexDirection:"column", 
      height:"100%"
    },

    header:{
      flexDirection:"row",
      backgroundColor:"#FBF8F8",
      height:"15%",
      alignItems:"baseline",
      justifyContent:"space-around",
      paddingTop:30

     },


    simbolo:{
        
    
        alignItems:"baseline",
        justifyContent:"center",
        alignItems:"baseline",
        

    },


     input:{
      //  backgroundColor:"#fff", 
       width:"80%",
       height:"20%",
       alignSelf:"center",
       justifyContent:"center" ,
       marginBottom:30

      },

     botao:{

      alignSelf:"center",
      justifyContent:"center",
      backgroundColor: "#EB6458",
      width:"80%",
      height:"55%",
      borderRadius: 40,
      


     }, 

    login: {
      backgroundColor: "#1E7987",
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
      height:784

    }

  })


  export default Dados