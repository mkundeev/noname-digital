import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../../components/CustomText";
import { COLORS } from "../../theme";
export default function PromotionScreen() {
  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>Акції</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 22,
    paddingTop: 57,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    flex: 0,
  },
});
