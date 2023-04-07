import { View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";

const Defibril = () => {
  var markers = [
    {
      latitude: 39.3400663812361,
      longitude: 23.008001955819328,
      title: "Αγριά",
    },
    {
      latitude: 39.35552128320412,
      longitude: 22.993280041864626,
      title: "Αλμυρός",
    },
    {
      latitude: 39.18449901828555,
      longitude: 22.770681909659533,
      title: "ΑΓΕΤ",
    },
    {
      latitude: 39.360186409837084,
      longitude: 22.94809847850345,
      title: "Απέναντι από rainbow",
    },
    {
      latitude: 39.36090790985888,
      longitude: 22.94912374782141,
      title: "Άγιος Νικόλαος",
    },
    {
      latitude: 39.36010769847468,
      longitude: 22.944658939867946,
      title: "Πάρκινγκ λιµάνι",
    },
    {
      latitude: 39.358586184569525,
      longitude: 22.934999963161427,
      title: "Εμπορικό λιµάνι",
    },
    {
      latitude: 39.378175544730624,
      longitude: 22.931068147830516,
      title: "Στρατόπεδο",
    },
    {
      latitude: 39.38360672648543,
      longitude: 22.931603439880085,
      title: "Κολυµβητήριο Ν.Ιωνία",
    },
    {
      latitude: 39.37723031601234,
      longitude: 22.95989152510068,
      title: "Άγνωστη τοποθεσία",
    },
    {
      latitude: 39.313997036432696,
      longitude: 23.079209578479325,
      title: "Μαλάκι",
    },
    {
      latitude: 39.31031956129975,
      longitude: 23.099722163136313,
      title: "Κάτω Γατζέα",
    },
    {
      latitude: 39.30587519926856,
      longitude: 23.11978538642818,
      title: "Καλά νερά",
    },
    {
      latitude: 39.286174316311644,
      longitude: 23.26057577107664,
      title: "Σύκη",
    },
    {
      latitude: 39.54363791564166,
      longitude: 22.981709578598863,
      title: "Βένετο",
    },
  ];

  return (
    <View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 39.3624,
          longitude: 22.94558,
          latitudeDelta: 0.6,
          longitudeDelta: 0.5,
        }}
      >
        {markers.map((marker) => (
          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            key={marker.title}
            title={marker.title}
          >
            <Image
              source={require("./imgs/marker.png")}
              style={{ height: 25, width: 25 }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Defibril;
