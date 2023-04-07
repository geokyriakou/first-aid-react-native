import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Box from "./Box.js";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>EverydAid</Text>
      <Text style={styles.logoText}>Your every day First Aid app</Text>
      <Box navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoImage: {
    width: "100%",
    height: "20%",
  },
  logoText: {
    fontSize: 18,
    textAlign: "center",
    fontStyle: "italic",
  },
});
