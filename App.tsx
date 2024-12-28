import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import RootRouter from "@/router";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <SafeAreaProvider
      style={styles.container}
      initialMetrics={initialWindowMetrics}
    >
      <RootRouter />
      <Toast />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
