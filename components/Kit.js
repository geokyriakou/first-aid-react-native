import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 80,
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 0.5,
  },
  iconStyle: {
    justifyContent: "flex-start",
    width: 70,
    objectFit: "contain",
    height: 60,
    borderRadius: 10,
  },
  paragraph: {
    marginLeft: 15,
    fontSize: 30,
  },
});

const Kit = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            id: "HeartAttack",
            key: "Καρδιακή Προσβολή",
            img: require("./peristatika/kard.jpg"),
          },
          {
            id: "Bleeding",
            key: "Αιμορραγία",
            img: require("./peristatika/aim.jpg"),
          },
          {
            id: "Stroke",
            key: "Εγκεφαλικό Επεισόδιο",
            img: require("./peristatika/egkef.jpg"),
          },
          { id: "Burn", key: "Έγκαυμα", img: require("./peristatika/egk.png") },
          {
            id: "Shock",
            key: "Ηλεκτροπληξία",
            img: require("./peristatika/hl.png"),
          },
          {
            id: "Faint",
            key: "Λιποθυμία",
            img: require("./peristatika/lip.jpg"),
          },
          {
            id: "Choking",
            key: "Πνιγμός",
            img: require("./peristatika/pn.jpg"),
          },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.key)}>
            <View style={styles.item}>
              <Image source={item.img} style={styles.iconStyle} />
              <Text style={styles.paragraph}>{item.key}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Kit;
