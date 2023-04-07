import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home.js";
import Phones from "./components/Phones";
import Kit from "./components/Kit";
import Hospitals from "./components/Hospitals";
import Defibril from "./components/Defibril";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeartAttack from "./components/kitScreens/HeartAttack";
import Bleeding from "./components/kitScreens/Bleeding";
import Faint from "./components/kitScreens/Faint";
import Choking from "./components/kitScreens/Choking";
import Stroke from "./components/kitScreens/Stroke";
import Shock from "./components/kitScreens/Shock";
import Burn from "./components/kitScreens/Burn";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Emergencies" component={Kit} />
        <Stack.Screen name="Emergency Calls" component={Phones} />
        <Stack.Screen name="Hospitals" component={Hospitals} />
        <Stack.Screen name="Defibrillators" component={Defibril} />
        <Stack.Screen name="Αιμορραγία" component={Bleeding} />
        <Stack.Screen name="Εγκεφαλικό Επεισόδιο" component={Stroke} />
        <Stack.Screen name="Έγκαυμα" component={Burn} />
        <Stack.Screen name="Ηλεκτροπληξία" component={Shock} />
        <Stack.Screen name="Καρδιακή Προσβολή" component={HeartAttack} />
        <Stack.Screen name="Πνιγμός" component={Choking} />
        <Stack.Screen name="Λιποθυμία" component={Faint} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
