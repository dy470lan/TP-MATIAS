import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import artists from "../data/artists";

export default function LibraryScreen({ navigation }) {

  const [search, setSearch] = useState("");

  const filtered = artists.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Buscador</Text>

      {/* Barra de búsqueda */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={22} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Buscar artista..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate("Player", { artist: item })}
          >
            <Image source={{ uri: item.image }} style={styles.img}/>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  title: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    marginTop: 10
  },
  searchBar: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10
  },
  list: {
    padding: 10
  },
  card: {
    flex: 1,
    backgroundColor: "#00364d",
    margin: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 100
  },
  name: {
    color: "#fff",
    marginTop: 5,
    fontSize: 16
  }
});
