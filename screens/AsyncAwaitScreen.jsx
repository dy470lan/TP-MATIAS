import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button, ActivityIndicator, FlatList } from "react-native";
import ExplicacionBlock from "../components/ExplicacionBlock";

export default function AsyncAwaitScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(false);

  // Simulación de una API
  const obtenerUsuarios = async () => {
    setCargando(true);
    try {
      const resultado = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              { id: 1, nombre: "Ana" },
              { id: 2, nombre: "Lucas" },
              { id: 3, nombre: "Martina" },
            ]),
          2000
        )
      );
      setUsuarios(resultado);
    } catch (error) {
      console.error("Error al cargar usuarios", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <ScrollView style={{ padding: 15 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>
        🚀 Async / Await en acción
      </Text>

      <ExplicacionBlock
        titulo="Async/Await"
        descripcion="Maneja operaciones asíncronas, como llamadas a APIs o tareas demoradas."
        codigo={`const obtenerUsuarios = async () => {
  try {
    const resultado = await new Promise((resolve) =>
      setTimeout(() => resolve(["Ana", "Lucas", "Martina"]), 2000)
    );
    console.log(resultado);
  } catch (error) {
    console.error("Error:", error);
  }
};`}
        ejemplo="Ideal para cargar datos de una API sin bloquear la interfaz."
        notas="La palabra clave 'await' solo puede usarse dentro de funciones 'async'."
      />

      <View style={{ marginTop: 20 }}>
        <Button title="🔄 Recargar usuarios" onPress={obtenerUsuarios} />
      </View>

      {cargando ? (
        <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          style={{ marginTop: 20 }}
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 18, padding: 5 }}>
              👤 {item.id} - {item.nombre}
            </Text>
          )}
        />
      )}
    </ScrollView>
  );
}
