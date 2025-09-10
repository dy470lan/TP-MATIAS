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

  const obtenerDemoVisual = (nombre) => {
  switch (nombre) {
    case "Colores y fondo":
      return (
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "red" }}>Texto en rojo</Text>
          <View style={{ backgroundColor: "lightblue", padding: 10, marginTop: 5 }}>
            <Text>Fondo azul con padding</Text>
          </View>
        </View>
      );
    case "Tipografía":
      return (
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Título grande y bold</Text>
          <Text style={{ fontSize: 18, fontStyle: "italic" }}>Subtítulo en cursiva</Text>
        </View>
      );
    case "Espaciado (margin y padding)":
      return (
        <View style={{ backgroundColor: "#eee", margin: 10, padding: 15 }}>
          <Text>Caja con margen y padding</Text>
        </View>
      );
    case "Bordes":
      return (
        <View style={{ borderWidth: 2, borderColor: "black", borderRadius: 10, padding: 10 }}>
          <Text>Con borde y esquinas redondeadas</Text>
        </View>
      );
    case "Flexbox (alineación)":
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
          <Text>⬅️ Izquierda</Text>
          <Text>➡️ Derecha</Text>
        </View>
      );
    case "Estilos combinados":
      return (
        <Text style={{ color: "red", fontSize: 22, marginTop: 10 }}>
          Texto rojo y grande
        </Text>
      );
    default:
      return null;
  }
};


  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.titulo}>🎨 Estilos en React Native</Text>
      <Text style={styles.descripcion}>
        En esta sección aprenderás a personalizar la apariencia de tus componentes usando 
        <Text style={{ fontWeight: 'bold' }}> StyleSheet</Text>. 
        A diferencia de la pantalla de Fundamentos, aquí vamos a profundizar en ejemplos prácticos 
        como colores, tamaños de texto, márgenes, alineación y estilos reutilizables.
      </Text>

      <View style={styles.demoContainer}>
        <Text style={styles.demoTitulo}>Ejemplo de Estilo Básico:</Text>
        <Text style={styles.textoRojo}>Este texto está en rojo</Text>
        <Text style={styles.textoGrande}>Este texto es más grande</Text>
        <Text style={[styles.textoRojo, styles.textoGrande]}>
          Combinación: Rojo y grande
        </Text>
      </View>

      {estilos.map((item) => (
        <ExplicacionBlock
          key={item.id}
          titulo={item.nombre}
          descripcion={item.descripcion}
          codigo={item.codigo}
          notas={item.notas}
          renderDemo={obtenerDemoVisual(item.nombre)}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50'
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  demoContainer: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
  },
  demoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textoRojo: {
    color: 'red',
  },
  textoGrande: {
    fontSize: 22,
  },
});
