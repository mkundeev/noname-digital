import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home/Home";
import ProfileScreen from "../screens/Home/ProfileScreen";
import TalonsScreen from "../screens/Home/TalonsScreen";
import PriceScreen from "../screens/Home/PriceScreen";
import PromotionScreen from "../screens/Home/PromotionsScreen";
import MapScreen from "../screens/Home/MapScreen";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../theme";
import CustomText from "../components/CustomText";
import CustomDrawer from "../components/CustomDrawer";
import SvgMenu from "../components/svg/SvgMenu";
import SvgMap from "../components/svg/SvgMap";
import SvgUser from "../components/svg/SvgUser";
import SvgPrice from "../components/svg/SvgPrice";
import SvgPercent from "../components/svg/SvgPercent";
import SvgCard from "../components/svg/SvgCard";
import { HomeStackParamList } from "../types/root.types";

const HomeStack = createDrawerNavigator<HomeStackParamList>();
export default function HomeNav() {
  return (
    <HomeStack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        sceneContainerStyle: {
          backgroundColor: "transparent",
        },
        headerStyle: {
          backgroundColor: "transparent",
          height: 112,
        },
        headerShadowVisible: false,
        drawerPosition: "right",
        drawerType: "front",
        drawerLabelStyle: {
          color: COLORS.white,
          fontSize: 18,
        },
        headerRight: () => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ marginRight: 22 }}
            onPress={() => navigation.openDrawer()}
          >
            <SvgMenu />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={COLORS.text}
            style={{ marginLeft: 22 }}
            onPress={() => navigation.navigate("Home")}
          />
        ),
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          drawerItemStyle: { display: "none" },
          headerLeft: () => (
            <MaterialCommunityIcons
              name="bell"
              size={22}
              color={COLORS.text}
              style={{ marginLeft: 22 }}
            />
          ),
          headerTitle: () => (
            <View
              style={{
                paddingVertical: 23,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/logo.png")}
                style={{ width: 34, height: 46 }}
              />
              <CustomText style={{ marginTop: 7 }}>CAH</CustomText>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => (
            <View style={styles.circle}>
              <SvgUser />
            </View>
          ),
          drawerLabel: "Мій кабінет",
          title: "Мій кабінет",
        }}
      />
      <HomeStack.Screen
        name="Talons"
        component={TalonsScreen}
        options={{
          drawerIcon: () => (
            <View style={styles.circle}>
              <SvgCard />
            </View>
          ),
          drawerLabel: "Мої талони",
          title: "Мої талони",
        }}
      />
      <HomeStack.Screen
        name="Prices"
        component={PriceScreen}
        options={{
          drawerIcon: () => (
            <View style={styles.circle}>
              <SvgPrice />
            </View>
          ),
          drawerLabel: "Ціни",
          title: "Ціни",
        }}
      />
      <HomeStack.Screen
        name="Promotions"
        component={PromotionScreen}
        options={{
          drawerIcon: () => (
            <View style={styles.circle}>
              <SvgPercent />
            </View>
          ),
          drawerLabel: "Акції",
          title: "Акції",
        }}
      />
      <HomeStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          drawerIcon: () => (
            <View style={styles.circle}>
              <SvgMap />
            </View>
          ),
          drawerLabel: "Карта АЗС",
          title: "Карта АЗС",
        }}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 33,
    height: 33,
    backgroundColor: COLORS.white,
    borderRadius: 16.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
