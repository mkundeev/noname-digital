import { useContext, useEffect, useState } from "react";
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
import { UserData } from "../../types/user.types";
import { getUserData } from "../../firebase/firebaseAPi";
import { AuthContext } from "../../contexts/AuthContext";

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeStackParamList, "Profile">,
  CompositeScreenProps<
    NativeStackScreenProps<MaineStackParamList>,
    NativeStackScreenProps<AuthStackParamList>
  >
>;

export default function ProfileScreen({ navigation }: Props) {
  const { userId } = useContext(AuthContext);
  const [userDate, setUserData] = useState<UserData>();
  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        const data = await getUserData(userId);
        data && setUserData(data);
      };
      fetchData();
    }
  }, [userId]);

  return (
    <View style={styles.container}>
      {!userId ? (
        <View>
          <CustomText style={styles.text}>
            Зареєструйстесь для створення власного кабінету
          </CustomText>
          <CustomButton
            styleBtn={{ height: 58 }}
            onPress={() => {
              navigation.navigate("AuthNav", { screen: "InputPhoneScreen" });
            }}
            title="Зареєструватись"
          />
        </View>
      ) : (
        <View>
          <CustomText style={styles.text}>Дані користувача</CustomText>
          {userDate?.name && <CustomText>Імя: {userDate?.name}</CustomText>}
          {userDate?.surname && (
            <CustomText>Прізвище: {userDate?.surname}</CustomText>
          )}
          {userDate?.date && (
            <CustomText>Дата народження: {userDate?.date}</CustomText>
          )}
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
