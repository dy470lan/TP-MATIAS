import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

export default function PromesasDemo() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');

  // Simulamos una promesa con setTimeout
  const cargarDatos = async () => {
    setMensaje('');
    setLoading(true);

    try {
      const resultado = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('✅ Datos cargados exitosamente');
        }, 2000);
      });

      setMensaje(resultado);
    } catch (error) {
      setMensaje('❌ Error al cargar datos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Cargar datos" onPress={cargarDatos} />
      {loading && <ActivityIndicator style={{ marginTop: 20 }} />}
      {mensaje !== '' && <Text style={styles.mensaje}>{mensaje}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  mensaje: {
    marginTop: 15,
    fontSize: 16,
  },
});
