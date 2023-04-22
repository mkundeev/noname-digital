import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../../components/CustomText";
export default function InputPhoneScreen() {
  return (
    <View style={styles.container}>
      <CustomText>Input phone</CustomText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginHorizontal: 20,
  },
});
