// components/ModalDemo.jsx
import React, { useState } from 'react';
import { View, Modal, Button, Text, StyleSheet } from 'react-native';

export default function ModalDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Mostrar Modal" onPress={() => setVisible(true)} />
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ marginBottom: 10 }}>🎉 Este es un Modal visual</Text>
            <Button title="Cerrar" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
});
