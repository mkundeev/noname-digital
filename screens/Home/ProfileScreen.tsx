import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import {
  MaineStackParamList,
  HomeStackParamList,
  AuthStackParamList,
} from "../../types/root.types";
import { COLORS } from "../../theme";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeStackParamList, "Profile">,
  CompositeScreenProps<
    NativeStackScreenProps<MaineStackParamList>,
    NativeStackScreenProps<AuthStackParamList>
  >
>;

export default function ProfileScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>
        Зареєструйстесь для створення власного кабінету
      </CustomText>
      <CustomButton
        onPress={() => {
          navigation.navigate("AuthNav", { screen: "InputPhoneScreen" });
        }}
        title="Зареєструватись"
      />
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
