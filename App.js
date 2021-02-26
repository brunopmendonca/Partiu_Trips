import {NavigationContainer, StackActions, safe} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView, SafeAreaViewComponent} from 'react-native';
import React from 'react';

import Login from './src/Login';
import Cadastro from './src/Cadastro';
import Bemvindo from './src/Bemvindo';
import Dados from './src/Dados';

const Stack = createStackNavigator()

export default function App() {
  return (

 
 <NavigationContainer  >
   <Stack.Navigator>
     <Stack.Screen name= 'Login' component = {Login} options={{title:"Home"}} />
     <Stack.Screen name= 'Cadastro' component = {Cadastro}  />
     <Stack.Screen name= 'Bemvindo' component = {Bemvindo}  />
     <Stack.Screen name= 'Dados' component = {Dados}  />
   </Stack.Navigator>
 </NavigationContainer>

  );
}
