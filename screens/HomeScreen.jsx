import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Bienvenido a PresentaRN</Text>

        <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('Componentes')}>
        <Text style={styles.textoBoton}>Explorar Componentes</Text>
        </TouchableOpacity>
     
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('API')}>
        <Text style={styles.textoBoton}>Explorar APIs</Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.boton}
  onPress={() => navigation.navigate('Hooks')}
>
  <Text style={styles.textoBoton}>Explorar Hooks</Text>
</TouchableOpacity>
  
   <TouchableOpacity
  style={styles.boton}
  onPress={() => navigation.navigate('Navegación')}
>
  <Text style={styles.textoBoton}>Explorar Navegacion</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.boton}
  onPress={() => navigation.navigate('Estilos')}
>
  <Text style={styles.textoBoton}>Explorar Estilos</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.boton}
  onPress={() => navigation.navigate('Contexto')}
>
  <Text style={styles.textoBoton}>Explorar Context API</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
