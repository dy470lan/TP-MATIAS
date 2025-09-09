import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native';
import ExplicacionBlock from '../components/ExplicacionBlock';
import data from '../data/hooksData.json';

export default function HooksScreen() {
  const [hooks, setHooks] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulación de carga
      setHooks(data);
    };

    cargarDatos();
  }, []);

  if (hooks.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="green" />
        <Text style={{ marginTop: 10 }}>Cargando hooks...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>🔧 Introducción a los Hooks</Text>
      <Text style={styles.descripcion}>
        Los Hooks son funciones especiales que te permiten “engancharte” a funcionalidades de React como el estado y el ciclo de vida desde componentes funcionales.
      </Text>

      {hooks.map((item) => (
        <ExplicacionBlock
          key={item.id}
          titulo={item.nombre}
          descripcion={item.descripcion}
          codigo={item.codigo}
          ejemplo={item.ejemplo}
          notas={item.notas}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 30,
    paddingBottom: 60, // Este es el extra importante para que el contenido no quede cortado
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
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
