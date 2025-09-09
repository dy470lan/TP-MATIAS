import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const datos = [
  { id: '1', nombre: 'React' },
  { id: '2', nombre: 'Native' },
  { id: '3', nombre: 'es' },
  { id: '4', nombre: 'genial' },
  { id: '5', nombre: '🎉' },
];

export default function FlatListDemoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejemplo de FlatList</Text>
      <FlatList
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>🔹 {item.nombre}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});
