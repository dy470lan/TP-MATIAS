import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
  TextInput,
  Image,
  Switch,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ExplicacionBlock from "../components/ExplicacionBlock";
import ModalDemo from "../components/ModalDemo";
import data from "../data/componentData.json";

export default function ComponentesScreen() {
  const [componentes, setComponentes] = useState([]);
  const [inputTexto, setInputTexto] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setComponentes(data);
    };
    cargarDatos();
  }, []);

  const navigation = useNavigation();

  const obtenerDemoVisual = (nombre) => {
    switch (nombre) {
      case "Button":
        return (
          <Button
            title="Presioname"
            onPress={() => alert("¡Botón presionado!")}
          />
        );
      case "TextInput":
        return (
          <TextInput
            placeholder="Escribe aquí"
            value={inputTexto}
            onChangeText={setInputTexto}
            style={{
              borderColor: "gray",
              borderWidth: 1,
              padding: 8,
              width: "100%",
            }}
          />
        );
      case "Image":
        return (
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={{ width: 50, height: 50 }}
          />
        );
      case "Switch":
        const [isEnabled, setIsEnabled] = useState(false);
        return (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ marginRight: 10 }}>
              {isEnabled ? "Activado" : "Desactivado"}
            </Text>
            <Switch value={isEnabled} onValueChange={setIsEnabled} />
          </View>
        );

case "FlatList":
  return (
    <Button
      title="Ver ejemplo de FlatList"
      onPress={() => navigation.navigate("FlatListDemo")}
    />
  );
      case "TouchableOpacity":
        return (
          <TouchableOpacity
            onPress={() => alert("¡Tocado!")}
            style={{ backgroundColor: "#4caf50", padding: 10, borderRadius: 5 }}
          >
            <Text style={{ color: "white" }}>Tocar aquí</Text>
          </TouchableOpacity>
        );
      case "ScrollView":
        return (
          <ScrollView style={{ maxHeight: 100 }}>
            <Text style={{ fontSize: 16 }}>
              Este es un ScrollView con mucho texto.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
              amet.
            </Text>
            <Text>
              Praesent suscipit tincidunt nulla, at tristique neque imperdiet
              sed.
            </Text>
            <Text>
              Mauris porta, elit a varius fermentum, elit nulla cursus felis.
            </Text>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  if (componentes.length === 0) {
    return (
      <ActivityIndicator size="large" color="blue" style={{ marginTop: 50 }} />
    );
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      <View
        style={{
          marginBottom: 30,
          backgroundColor: "#e1f5fe",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          🧠 Fundamentos de React Native
        </Text>
        <Text style={{ marginBottom: 5 }}>
          • React Native permite crear apps móviles con JavaScript y React.
        </Text>
        <Text style={{ marginBottom: 5 }}>
          • Los componentes como{" "}
          <Text style={{ fontWeight: "bold" }}>View</Text>,{" "}
          <Text style={{ fontWeight: "bold" }}>Text</Text> y{" "}
          <Text style={{ fontWeight: "bold" }}>Button</Text> forman la UI.
        </Text>
        <Text style={{ marginBottom: 5 }}>
          • El estilo se define con objetos JS, similar a CSS pero con
          camelCase.
        </Text>
        <Text style={{ marginBottom: 5 }}>
          • El hook <Text style={{ fontWeight: "bold" }}>useState</Text> permite
          manejar datos dinámicos.
        </Text>
        <Text style={{ marginBottom: 5 }}>
          • <Text style={{ fontWeight: "bold" }}>useEffect</Text> se usa para
          manejar efectos como cargar datos.
        </Text>
        <Text style={{ marginBottom: 5 }}>
          • La navegación entre pantallas se maneja con librerías como{" "}
          <Text style={{ fontWeight: "bold" }}>React Navigation</Text>.
        </Text>
        <Text>
          • Todo el contenido debe estar envuelto en{" "}
          <Text style={{ fontWeight: "bold" }}>SafeAreaView</Text> para evitar
          solaparse con elementos del sistema.
        </Text>
      </View>

      {componentes.map((item) => (
        <View key={item.id} style={{ marginBottom: 50 }}>
          <ExplicacionBlock
            titulo={item.nombre}
            descripcion={item.descripcion}
            codigo={item.codigo}
            ejemplo={item.ejemplo}
            notas={item.notas}
            renderDemo={obtenerDemoVisual(item.nombre)}
          />
          {item.nombre === "Modal" && <ModalDemo />}
        </View>
      ))}
    </ScrollView>
  );
}
