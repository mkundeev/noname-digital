import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
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

type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};
export default function CustomDrawer(props: Props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={styles.container}
      contentContainerStyle={{ justifyContent: "space-between", flex: 1 }}
    >
      <View>
        <DrawerItemList {...props} />
      </View>
      <TouchableOpacity
        style={styles.exit}
        onPress={() => props.navigation.closeDrawer()}
      >
        <CustomText style={{ color: COLORS.white, fontSize: 18 }}>
          Вийти
        </CustomText>
        <AntDesign name="arrowright" size={19} color={COLORS.white} />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.accent,
    paddingLeft: 28,
    paddingTop: 110,
    paddingBottom: 50,
    minHeight: "100%",
  },
  exit: {
    width: 88,
    flexDirection: "row",
    alignItems: "center",
  },
});
