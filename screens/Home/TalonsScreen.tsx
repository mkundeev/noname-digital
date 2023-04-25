import { View, StyleSheet } from "react-native";
import { useContext } from "react";
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
import { AuthContext } from "../../contexts/AuthContext";

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeStackParamList, "Talons">,
  CompositeScreenProps<
    NativeStackScreenProps<MaineStackParamList>,
    NativeStackScreenProps<AuthStackParamList>
  >
>;
export default function TalonsScreen({ navigation }: Props) {
  const { userId } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {!userId ? (
        <View>
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
      ) : (
        <View>
          <CustomText style={styles.text}>Ваші талони</CustomText>
        </View>
      )}
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
