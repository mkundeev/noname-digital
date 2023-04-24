import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import CustomText from "../../components/CustomText";
import SvgPercent from "../../components/svg/SvgPercent";
import SvgScreen from "../../components/svg/SvgScreen";
import SvgFuel from "../../components/svg/SvgFuel";
import SvgCard from "../../components/svg/SvgCard";
import MapComponent from "../../components/MapComponent";
import { COLORS } from "../../theme";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={require("../../assets/slider.jpg")}
          style={styles.slider}
        />
        <CustomText style={styles.text}>Слідкуй за знижками</CustomText>
        <View style={styles.whiteContainer}>
          <View style={styles.greyCircle}>
            <SvgPercent />
          </View>
          <CustomText style={styles.cardText}>
            Отримати персональну знижку
          </CustomText>
        </View>
        <View style={styles.wrap}>
          <View style={styles.whiteContainer}>
            <View style={styles.greyCircle}>
              <SvgScreen />
            </View>
            <CustomText style={styles.cardText}>Придбати пальне</CustomText>
          </View>
          <View style={styles.whiteContainer}>
            <View style={styles.greyCircle}>
              <SvgFuel />
            </View>
            <CustomText style={styles.cardText}>Ціни на пальне</CustomText>
          </View>
        </View>
        <CustomText style={styles.text}>Паливна картка</CustomText>
        <View
          style={{ ...styles.whiteContainer, justifyContent: "space-between" }}
        >
          <View style={styles.greyCircle}>
            <SvgCard />
          </View>
          <CustomText style={styles.balance}>1205.80 грн</CustomText>
          <Image
            source={require("../../assets/barcode.jpg")}
            style={styles.barcode}
          />
        </View>
        <CustomText style={styles.text}>Карта АЗК САН</CustomText>
        <MapComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  scrollView: {
    paddingHorizontal: 22,
  },
  text: {
    marginTop: 18,
  },
  slider: {
    borderRadius: 16,
    borderColor: COLORS.white,
    borderWidth: 1,
  },
  whiteContainer: {
    flex: 1,
    height: 59,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: "rgba(38, 38, 38, 1)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 0.07,
    paddingHorizontal: 10,
  },
  greyCircle: {
    width: 33,
    height: 33,
    backgroundColor: "#f7f7f7",
    borderRadius: 16.5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    marginLeft: 12,
    flex: 1,
  },
  balance: {
    marginLeft: 7,
    fontSize: 18,
  },
  wrap: {
    flexDirection: "row",
    gap: 7,
  },
  barcode: {
    marginLeft: 16,
  },
});
