import React, { useEffect, useState } from 'react';
import { ContadorProvider, useContador } from '../context/ContadorContext';
import { Button } from 'react-native';
import { View, ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native';
import ExplicacionBlock from '../components/ExplicacionBlock';
import data from '../data/contextData.json';

export default function ContextScreen() {
  const [contextos, setContextos] = useState([]);

  const MostrarContador = () => {
  const { contador } = useContador();
  return <Text style={styles.contador}>Contador actual: {contador}</Text>;
};

const BotonIncrementar = () => {
  const { incrementar } = useContador();
  return <Button title="Incrementar contador" onPress={incrementar} />;
};

  useEffect(() => {
    const cargarDatos = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setContextos(data);
    };
    cargarDatos();
  }, []);

  if (contextos.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="orange" />
        <Text style={{ marginTop: 10 }}>Cargando información sobre Context API...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🎯 Introducción al Context API</Text>
      <Text style={styles.descripcion}>
        El Context API en React permite compartir información entre componentes sin tener que pasar props manualmente por cada nivel del árbol.
      </Text>

      {contextos.map((item) => (
        <ExplicacionBlock
          key={item.id}
          titulo={item.nombre}
          descripcion={item.descripcion}
          codigo={item.codigo}
          ejemplo={item.ejemplo}
          notas={item.notas}
        />
      ))}

      <View style={styles.ejemploContainer}>
  <Text style={styles.titulo}>🧪 Ejemplo práctico interactivo</Text>
  <Text style={styles.descripcion}>
    A continuación podés ver un contador compartido entre componentes usando Context.
  </Text>

  <ContadorProvider>
    <MostrarContador />
    <BotonIncrementar />
  </ContadorProvider>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingBottom: 30,
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
    ejemploContainer: {
    marginTop: 30,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  contador: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },

});
