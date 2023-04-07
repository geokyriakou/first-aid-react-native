import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Linking, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Phones = () => {
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/EmergencyNumberAPI/data/master/data.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFilteredData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = data.data.filter(function (item) {
        const itemData = item.Country.Name
          ? item.Country.Name.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(data.data);
      setSearch(text);
    }
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              paddingLeft: 20,
              margin: 5,
              borderColor: "#009688",
              backgroundColor: "#FFFFFF",
            }}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <FlatList
            data={search ? filteredData : data.data}
            keyExtractor={({ item }, index) => index.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 10,
                  fontSize: 18,
                  height: 60,
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 0.2,
                }}
                key={item}
              >
                <Text style={{ fontSize: 20 }}>{item.Country.Name}</Text>

                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(`tel:${item.Ambulance.All[0]}`);
                  }}
                >
                  <Icon name="phone" size={30} color="green" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
  s;
};

export default Phones;
