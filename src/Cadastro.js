import React from 'react';
import {  Text, View, StyleSheet, Image, TextInput,ScrollView  } from 'react-native';
import {Button} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';

const Cadastro = ({navigation}) => ( 
  

<View style= {style.container}>

      <View style= {style.header} >

          <Text style={style.titulo1}>Partiu</Text>
          <Text style= {style.titulo2}>Trips</Text>

      </View>



      <View style= {style.login}>

              <View style= {{flex:1, marginBottom:20,marginTop:10}}>
          
                      <View style={{height:"50%"}}>
                        
                        <Text style={{color: "white", fontSize:28, marginLeft:24 }}>Login In</Text>
                       
                        <View style={{flex:1, justifyContent:"space-around"}}>
                            <TextInput style={style.input} placeholder= "Email"  placeholderTextColor="#fff"/>
                            <TextInput style={style.input} placeholder= "Senha"  placeholderTextColor="#fff"/>
                            <TextInput style={style.input} placeholder= "Senha"  placeholderTextColor="#fff"/>
                            <TouchableHighlight onPress= {()=>{alert("nada")}} underlayColor="#1E7987">
                                <Text style={{ alignSelf:"flex-end",color:"#fff", fontSize:15, marginRight:"6%"}}>Esqueci minha senha</Text>
                            </TouchableHighlight>
                        </View>
                       
                      </View>


                      <View style={{height:"15%", justifyContent:"flex-end"}} >
                      <Button 
                            buttonStyle = {style.botao}
                            title="Entrar"
                            onPress = {()=> navigation.navigate('Vpim')}
                            />
                      </View>
          

                      <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                        <View style={{backgroundColor: "#fff", height:1, marginTop:27, width:"25%"}}></View>
                        <Text style={{marginTop:22, color:"#fff", fontSize:15}}>Entrar com</Text>
                        <View style={{backgroundColor: "#fff", height:1, marginTop:27, width:"25%"}}></View>
                      </View>

                      <View style={{height:"20%",alignItems:"center", justifyContent:"center" }}>
                        <Image  source={require("../icons/image_5.png")}/>
                      </View>

                      <View style={{flexDirection:"row", alignSelf:"center", height:30, justifyContent:"flex-end"}}>
                        <Text >Nao possui conta?</Text>
                        <TouchableHighlight style={{flex:1}} >
                          <Text style={{color:"#EB6458", marginLeft:5}}>Cadastre-se</Text>
                        </TouchableHighlight>
                      </View>

                      

              </View>

      </View>
  


</View>
  

  );

  const style = StyleSheet.create({

    container1:{
      flex:1,
      flexDirection:"column", 
    },

    header:{
      backgroundColor:"#FBF8F8",
      height:"33%",
      alignItems:"center",
      justifyContent:"center"

     },

     titulo1:{
      fontSize: 55,
      color: "#EB6458"
     },

     titulo2:{

      fontSize:50,
      color: "#1E7987"

     },

     loginIn:{

      marginLeft:24

     },

     input:{
      //  backgroundColor:"#fff", 
       width:"88%",
       height:"30%", 
       alignSelf:"center",
       borderBottomWidth: 3,
       borderColor: "#fff",
       fontSize:20

      },

     botao:{

      alignSelf:"center",
      justifyContent:"center",
      backgroundColor: "#EB6458",
      width:"80%",
      height:"90%",
      borderRadius: 40,

     }, 

    login: {
      backgroundColor: "#1E7987",
      height: "67%",
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45

    }

  })


  export default Cadastro