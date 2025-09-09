import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, ActivityIndicator, Button, TextInput, Image, Switch } from 'react-native';
import ExplicacionBlock from '../components/ExplicacionBlock';
import ModalDemo from '../components/ModalDemo';
import data from '../data/componentData.json';

export default function ComponentesScreen() {
  const [componentes, setComponentes] = useState([]);
  const [inputTexto, setInputTexto] = useState('');

  useEffect(() => {
    const cargarDatos = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setComponentes(data);
    };
    cargarDatos();
  }, []);

  const obtenerDemoVisual = (nombre) => {
    switch (nombre) {
      case 'Button':
        return <Button title="Presioname" onPress={() => alert('¡Botón presionado!')} />;
      case 'TextInput':
        return (
          <TextInput
            placeholder="Escribe aquí"
            value={inputTexto}
            onChangeText={setInputTexto}
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              padding: 8,
              width: '100%',
            }}
          />
        );
      case 'Image':
        return (
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={{ width: 50, height: 50 }}
          />
        );
      case 'Switch':
        return <Switch value={true} />;
      default:
        return null;
    }
  };

  if (componentes.length === 0) {
    return <ActivityIndicator size="large" color="blue" style={{ marginTop: 50 }} />;
  }

  return (
    <ScrollView style={{ padding: 10 }}>
   {componentes.map((item) => (
  <View key={item.id} style={{ marginBottom: 50 }}>
    <ExplicacionBlock
      titulo={item.nombre}
      descripcion={item.descripcion}
      codigo={item.codigo}
      ejemplo={item.ejemplo}
      notas={item.notas}
    />
    {item.nombre === "Modal" && <ModalDemo />}
  </View>
))}

      
    </ScrollView>
  );
}
