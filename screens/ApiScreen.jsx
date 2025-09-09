import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

export default function ApiScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [permisoOtorgado, setPermisoOtorgado] = useState(false);

  // Paso 1: Solicitar permiso y obtener ubicación
  const obtenerUbicacion = async () => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('❌ No se otorgaron permisos para acceder a la ubicación.');
        setLoading(false);
        return;
      }

      setPermisoOtorgado(true); // ✅ Permiso otorgado
      const ubicacion = await Location.getCurrentPositionAsync({});
      setLocation(ubicacion.coords);
    } catch (error) {
      setErrorMsg('⚠️ Error al obtener la ubicación.');
    } finally {
      setLoading(false);
    }
  };

  // Ejecuta al iniciar la pantalla
  useEffect(() => {
    obtenerUbicacion();
  }, []);

  return (
    <View style={styles.container}>
      {/* Título y descripción didáctica */}
      <Text style={styles.titulo}>📍 API de Ubicación en Tiempo Real</Text>
      <Text style={styles.descripcion}>
        Esta pantalla te muestra cómo acceder a la ubicación del dispositivo utilizando una <Text style={{ fontWeight: 'bold' }}>API</Text>.
        Una API es una herramienta que permite a una app comunicarse con servicios del dispositivo
        (como el GPS, la cámara, el micrófono, etc).
      </Text>

      {/* Botón para volver a intentar */}
      <Button title="📲 Obtener mi ubicación" onPress={obtenerUbicacion} />

      {/* Mensajes de carga o error */}
      {loading && <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />}

      {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}

      {/* Resultado */}
      {permisoOtorgado && location && (
        <View style={styles.resultado}>
          <Text style={styles.etiqueta}>✅ Permisos otorgados</Text>
          <Text style={styles.coordenada}>Latitud: {location.latitude}</Text>
          <Text style={styles.coordenada}>Longitud: {location.longitude}</Text>
        </View>
      )}

      {/* Resumen didáctico */}
      <Text style={styles.footer}>
        🔍 Recordá que toda API necesita permiso del usuario para acceder a datos privados como la
        ubicación. ¡Siempre preguntá primero!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  descripcion: { fontSize: 15, textAlign: 'center', marginBottom: 20 },
  resultado: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    alignItems: 'center',
  },
  etiqueta: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: 'green',
  },
  coordenada: { fontSize: 14 },
  error: { color: 'red', marginTop: 20, textAlign: 'center' },
  footer: {
    marginTop: 40,
    fontStyle: 'italic',
    fontSize: 13,
    textAlign: 'center',
    color: '#555',
  },
});
