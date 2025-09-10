import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const secciones = [
    { titulo: 'Explorar Fundamentos', ruta: 'Componentes' },
    { titulo: 'Explorar APIs', ruta: 'API' },
    { titulo: 'Explorar Hooks', ruta: 'Hooks' },
    { titulo: 'Explorar Navegacion', ruta: 'Navegación' },
    { titulo: 'Explorar Estilos', ruta: 'Estilos' },
    { titulo: 'Explorar Context API', ruta: 'Contexto' },
    { titulo: 'Explorar Async/Await', ruta: 'AsyncAwait' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>📱 Tutorial Interactivo de React-Native</Text>
        {secciones.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.boton}
            onPress={() => navigation.navigate(item.ruta)}
          >
            <Text style={styles.botonTexto}>{item.titulo}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#073c79ff',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginBottom: 16,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  botonTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
