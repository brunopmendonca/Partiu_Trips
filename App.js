import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';


import Login from './src/Paginas/Login';
import Cadastro from './src/Paginas/Cadastro';
import Bemvindo from './src/Paginas/Bemvindo';
import Dados from './src/Paginas/Dados';
import Funcionalidades from "./src/Paginas/Funcionalidades"
import Gastos from "./src/Paginas/Gastos"
import Arquivos from "./src/Paginas/Arquivos"
import PrimeiraTela from "./src/Paginas/PrimeiraTela"
import NovaSenha from "./src/Paginas/NovaSenha"

const Stack = createStackNavigator()

export default function App() {
  return (

    < NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ title: "Home" }} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Bemvindo' component={Bemvindo} />
        <Stack.Screen name='Dados' component={Dados} />
        <Stack.Screen name='Funcionalidades' component={Funcionalidades} />
        <Stack.Screen name='Gastos' component={Gastos} />
        <Stack.Screen name='Arquivos' component={Arquivos} />
        <Stack.Screen name='PrimeiraTela' component={PrimeiraTela} />
        <Stack.Screen name='NovaSenha' component={NovaSenha} />
      </Stack.Navigator>
    </NavigationContainer >


  );
}
