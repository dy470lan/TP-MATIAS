import  { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginBottom: 40,
    backgroundColor: '#fff'
  }
});