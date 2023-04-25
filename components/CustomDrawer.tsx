import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { COLORS } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { DrawerNavigationState } from "@react-navigation/routers";
import { ParamListBase } from "@react-navigation/routers";
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import { logOut } from "../firebase/firebaseAPi";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};
export default function CustomDrawer(props: Props) {
  const { userId, setUserId } = useContext(AuthContext);
  const handleLogout = async () => {
    await logOut();
    setUserId("");
    props.navigation.navigate("Home");
  };
  return (
    <DrawerContentScrollView
      {...props}
      style={styles.container}
      contentContainerStyle={{ justifyContent: "space-between", flex: 1 }}
    >
      <View>
        <DrawerItemList {...props} />
      </View>
      {userId ? (
        <TouchableOpacity style={styles.exit} onPress={handleLogout}>
          <CustomText style={{ color: COLORS.white, fontSize: 18 }}>
            Вийти
          </CustomText>
          <AntDesign
            name="arrowright"
            size={19}
            color={COLORS.white}
            style={{ marginLeft: 14 }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ ...styles.exit, width: "100%" }}
          onPress={() =>
            props.navigation.navigate("AuthNav", { screen: "InputPhoneScreen" })
          }
        >
          <CustomText
            style={{
              color: COLORS.white,
              fontSize: 18,
            }}
          >
            Зареєструватися
          </CustomText>
          <AntDesign
            name="arrowright"
            size={19}
            color={COLORS.white}
            style={{ marginLeft: 14 }}
          />
        </TouchableOpacity>
      )}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accent,
    paddingLeft: 10,
    paddingTop: 110,
    paddingBottom: 50,
    minHeight: "100%",
  },
  exit: {
    width: 88,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 28,
  },
});
