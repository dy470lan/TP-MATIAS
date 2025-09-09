import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native';
import ExplicacionBlock from '../components/ExplicacionBlock';
import data from '../data/estilosData.json';

export default function EstilosScreen() {
  const [estilos, setEstilos] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setEstilos(data);
    };
    cargarDatos();
  }, []);

  if (estilos.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="orange" />
        <Text style={{ marginTop: 10 }}>Cargando estilos...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.titulo}>🎨 Estilos en React Native</Text>
      <Text style={styles.descripcion}>
        En esta pantalla vas a aprender cómo aplicar estilos a tus componentes utilizando <Text style={{ fontWeight: 'bold' }}>StyleSheet</Text>. 
        React Native permite crear estilos de forma similar a CSS pero usando objetos de JavaScript.
      </Text>

      {estilos.map((item) => (
        <ExplicacionBlock
          key={item.id}
          titulo={item.nombre}
          descripcion={item.descripcion}
          codigo={item.codigo}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 30,
    paddingBottom: 60,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  
  descripcion: {
    fontSize: 16,
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

