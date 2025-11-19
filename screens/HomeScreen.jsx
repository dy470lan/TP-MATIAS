import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import artists from "../data/artists";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>

      {/* Botón Lupa */}
      <TouchableOpacity 
        style={styles.searchIcon}
        onPress={() => navigation.navigate("Library")}
      >
        <Ionicons name="search" size={28} color="#fff" />
      </TouchableOpacity>

      {/* FILA 1 */}
      <View style={styles.row}>
        {artists.slice(0, 2).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.smallCard}
            onPress={() => navigation.navigate("Player", { artist: item })}
          >
            <Image source={{ uri: item.image }} style={styles.smallImg} />
            <Text style={styles.smallName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* FILA 2 */}
      <View style={styles.row}>
        {artists.slice(2, 4).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.smallCard}
            onPress={() => navigation.navigate("Player", { artist: item })}
          >
            <Image source={{ uri: item.image }} style={styles.smallImg} />
            <Text style={styles.smallName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ESPACIO INVISIBLE */}
      <View style={styles.centerLine}></View>

      {/* TARJETAS GRANDES */}
      {artists.slice(0, 2).map((item, index) => (
        <TouchableOpacity 
          key={index}
          style={styles.bigCard}
          onPress={() => navigation.navigate("Player", { artist: item })}
        >
          <Image source={{ uri: item.image }} style={styles.bigImg} />

          <View style={styles.bigInfo}>
            <Text style={styles.bigName}>{item.name}</Text>

            <TouchableOpacity style={styles.listenBtn}>
              <Text style={styles.listenText}>Escuchar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001a2b",
    flex: 1,
    padding: 10,
  },

  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

smallCard: {
  width: "48%",
  backgroundColor: "#002a3a",
  flexDirection: "row",      // <-- ahora horizontal
  alignItems: "center",
  padding: 6,
  borderRadius: 10,
},

smallImg: {
  width: 45,
  height: 45,
  borderRadius: 6,
  marginRight: 10,           // separación del texto
},

smallName: {
  color: "#fff",
  fontSize: 14,
  flexShrink: 1,
},


  /* ESPACIO INVISIBLE DEL MEDIO */
  centerLine: {
    width: 1,
    height: 120,
    backgroundColor: "transparent", // ahora no se ve
    alignSelf: "center",
    marginVertical: 20,
  },

  bigCard: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#002a3a",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },

  bigImg: {
    width: "35%",
    height: 110,
  },

  bigInfo: {
    width: "65%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  bigName: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  listenBtn: {
    backgroundColor: "#003b52",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  listenText: {
    color: "#fff",
    fontSize: 14,
  },
});
