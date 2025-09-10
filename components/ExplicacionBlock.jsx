// En ExplicacionBlock.jsx
import { View, Text, StyleSheet } from 'react-native';

export default function ExplicacionBlock({ titulo, descripcion, codigo, ejemplo, notas, renderDemo }) {
  return (
    <View style={styles.block}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
      {ejemplo && <Text style={styles.ejemplo}>💡 Ejemplo: {ejemplo}</Text>}
      {notas && <Text style={styles.notas}>📝 Notas: {notas}</Text>}
      {renderDemo && <View style={styles.demo}>{renderDemo}</View>}
      <Text style={styles.codigo}>📦 Código:</Text>
      <Text style={styles.codigoTexto}>{codigo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 25,
    padding: 16,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  descripcion: {
    fontSize: 15,
    marginBottom: 4,
  },
  ejemplo: {
    fontStyle: 'italic',
    marginBottom: 4,
  },
  notas: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  demo: {
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  codigo: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  codigoTexto: {
    fontFamily: 'monospace',
    backgroundColor: '#eaeaea',
    padding: 8,
    borderRadius: 6,
    marginTop: 4,
  },
});
