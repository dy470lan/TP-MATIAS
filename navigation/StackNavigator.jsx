import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LibraryScreen from "../screens/LibraryScreen";
import PlayerScreen from "../screens/PlayerScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "MusicAI" }}/>
      <Stack.Screen name="Library" component={LibraryScreen} options={{ title: "Mi Biblioteca" }}/>
      <Stack.Screen name="Player" component={PlayerScreen} options={{ title: "Reproductor" }}/>
    </Stack.Navigator>
  );
}
