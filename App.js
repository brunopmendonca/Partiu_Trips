import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import Inicial from './src/Inicial';
import Login from './src/Login';
import Cadastro from './src/Cadastro';

const Stack = createStackNavigator()

export default function App() {
  return (
            
 <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name= 'Inicial' component = {Inicial}  />
     <Stack.Screen name= 'Login' component = {Login}  />
     <Stack.Screen name= 'Cadastro' component = {Cadastro}  />
   </Stack.Navigator>
 </NavigationContainer>
   
      
  );
}
