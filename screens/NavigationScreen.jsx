import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native';
import ExplicacionBlock from '../components/ExplicacionBlock';
import data from '../data/navigationData.json';

export default function NavigationScreen() {
  const [navegaciones, setNavegaciones] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setNavegaciones(data);
    };
    cargarDatos();
  }, []);

  if (navegaciones.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="purple" />
        <Text style={{ marginTop: 10 }}>Cargando tipos de navegación...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>🧭 Tipos de Navegación en React Native</Text>
      <Text style={styles.descripcion}>
        En esta pantalla vas a conocer los distintos tipos de navegación que podés usar en React Native.
        Las navegaciones permiten moverte entre pantallas o secciones de una app. Por ejemplo, desde un menú principal hacia los detalles de un elemento.
      </Text>

      {navegaciones.map((item) => (
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
