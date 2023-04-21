import React from "react";
import MapView from "react-native-maps";
import { View, StyleSheet } from "react-native";

export default function MapComponent() {
  return (
    <View style={styles.container}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 50.45466,
          longitude: 30.5238,
          latitudeDelta: 0.01,
          longitudeDelta: 0.05,
        }}
      ></MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 18,
    height: 118,
    borderRadius: 16,
    borderColor: "#FCFFFE",
    borderWidth: 1,
    overflow: "hidden",
  },
});
