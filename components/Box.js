import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

export default function Box({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardrow}>
        <Card
          style={styles.cardStyle}
          onPress={() => navigation.navigate("Emergencies")}
        >
          <Card.Cover
            style={styles.logoImage}
            source={require("./imgs/kit.png")}
          ></Card.Cover>
          <Text style={styles.textStyle}>First Aid Basics</Text>
        </Card>
        <Card
          style={styles.cardStyle}
          onPress={() => navigation.navigate("Hospitals")}
        >
          <Card.Cover
            style={styles.logoImage}
            source={require("./imgs/hospital.png")}
          ></Card.Cover>
          <Text style={styles.textStyle}>Hospitals</Text>
        </Card>
      </View>
      <View style={styles.cardrow2}>
        <Card
          style={styles.cardStyle}
          onPress={() => navigation.navigate("Emergency Calls")}
        >
          <Card.Cover
            style={styles.logoImage}
            source={require("./imgs/phone.jpg")}
          ></Card.Cover>
          <Text style={styles.textStyle}>Emergency Calls</Text>
        </Card>
        <Card
          style={styles.cardStyle}
          onPress={() => navigation.navigate("Defibrillators")}
        >
          <Card.Cover
            style={styles.logoImage}
            source={require("./imgs/heart.jpg")}
          ></Card.Cover>
          <Text style={styles.textStyle}>Defibrillators</Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
  },
  cardrow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardrow2: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logoImage: {
    width: "80%" /* or any custom size */,
    height: "80%",
    objectFit: "contain",
    alignSelf: "center",
  },
  cardStyle: {
    width: 180,
    height: 180,
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
  },
});
