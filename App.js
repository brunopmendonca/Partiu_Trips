import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import Login from './src/Login';
import Cadastro from './src/Cadastro';

const Stack = createStackNavigator()

export default function App() {
  return (
            
 <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name= 'Login' component = {Login} options={ {title:"", headerStyle:{height:0}}} />
     <Stack.Screen name= 'Cadastro' component = {Cadastro}  />
   </Stack.Navigator>
 </NavigationContainer>
   
      
  );
}
