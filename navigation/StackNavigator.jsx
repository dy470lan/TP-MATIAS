// navigation/StackNavigator.jsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ComponentesScreen from '../screens/ComponentScreen';
import HooksScreen from '../screens/HookScreen';
import NavigationScreen from '../screens/NavigationScreen';
import EstilosScreen from '../screens/EstiloScreen';
import ContextScreen from '../screens/ContextScreen';
import ApiScreen from '../screens/ApiScreen'; // ajustá la ruta si está en otra carpeta
//import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Componentes" component={ComponentesScreen} />
      <Stack.Screen name="Hooks" component={HooksScreen} />
      <Stack.Screen name="API"  component={ApiScreen}  options={{ title: 'APIs del Dispositivo' }}/>
      <Stack.Screen name="Navegación" component={NavigationScreen} />
      <Stack.Screen name="Contexto" component={ContextScreen} />
      <Stack.Screen name="Estilos" component={EstilosScreen} />
     {/*  <Stack.Screen name="Details" component={DetailScreen} />*/} 
    </Stack.Navigator>
  );
}
