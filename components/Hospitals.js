import { View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Hospitals = () => {
  var markers = [
    {
      latitude: 39.35370926362529,
      longitude: 22.96151098465706,
      title: "Foo Place",
      subtitle: "1234 Foo Drive",
    },
  ];

  return (
    <View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 39.3624,
          longitude: 22.94558,
          latitudeDelta: 0.18,
          longitudeDelta: 0.08,
        }}
      >
        <Marker
          coordinate={{
            latitude: 39.35285167441051,
            longitude: 22.96181787269124,
          }}
          title={"Γενικό Νοσοκομείο Βόλου Αχιλλοπούλειο"}
          description={"2421 351804"}
        >
          <Image
            source={require("./imgs/marker.png")}
            style={{ height: 50, width: 50 }}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: 39.367183445584644,
            longitude: 22.936479615342943,
          }}
          title={"Κέντρο Υγείας Βόλου"}
          description={"2421035333"}
        >
          <Image
            source={require("./imgs/marker.png")}
            style={{ height: 50, width: 50 }}
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default Hospitals;
