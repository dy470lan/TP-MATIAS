import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function PlayerScreen({ route }) {
  const { artist } = route.params;

  const [sound, setSound] = useState(null);
  const [isPlaying, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  async function playSound() {
    try {
      setLoading(true);

      if (!sound) {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: artist.song },
          { shouldPlay: true }
        );

        // 🔥 Detecta cuando la canción termina
        newSound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            setPlaying(false);
            newSound.stopAsync();
          }
        });

        setSound(newSound);
      } else {
        await sound.playAsync();
      }

      setPlaying(true);
    } catch (err) {
      Alert.alert("Error", "No se pudo reproducir el audio.");
      console.log("ERROR:", err);
    } finally {
      setLoading(false);
    }
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setPlaying(false);
    }
  }

  // 🔥 Limpieza al salir de la pantalla
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <View style={styles.container}>
      
      <Image source={{ uri: artist.image }} style={styles.img} />
      <Text style={styles.name}>{artist.name}</Text>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-back" size={32} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={isPlaying ? pauseSound : playSound}
          disabled={loading}
        >
          <Ionicons 
            name={isPlaying ? "pause" : "play"} 
            size={45} 
            color={loading ? "#777" : "#fff"} 
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-forward" size={32} color="#fff" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#00131f",
    alignItems: "center",
    padding: 20 
  },

  img: { 
    width: 250, 
    height: 250, 
    marginTop: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#00344d"
  },

  name: { 
    fontSize: 28, 
    marginVertical: 20, 
    fontWeight: "bold",
    color: "#fff"
  },

  controls: { 
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
    marginTop: 30
  }
});
