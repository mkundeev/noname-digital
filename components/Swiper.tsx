import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { COLORS } from "../theme";

export default function SwiperComponent() {
  return (
    <View style={styles.slider}>
      <Swiper
        showsButtons={false}
        loop={true}
        paginationStyle={{
          bottom: 18,
          left: -225,
        }}
        dot={
          <View
            style={{
              backgroundColor: "rgba(48, 48, 48, 0.5)",
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3.5,
              marginRight: 3.5,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "rgba(48, 48, 48, 1)",
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3.5,
              marginRight: 3.5,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
      >
        <Image source={require("../assets/slider.jpg")} resizeMode="contain" />
        <Image source={require("../assets/slider.jpg")} resizeMode="contain" />
        <Image source={require("../assets/slider.jpg")} resizeMode="contain" />
        <Image source={require("../assets/slider.jpg")} resizeMode="contain" />
        <Image source={require("../assets/slider.jpg")} resizeMode="contain" />
        <Image source={require("../assets/slider.jpg")} resizeMode="contain" />
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    borderRadius: 16,
    borderColor: COLORS.white,
    borderWidth: 1,
    height: 160,
    width: 331,
    overflow: "hidden",
    alignSelf: "center",
  },
});
