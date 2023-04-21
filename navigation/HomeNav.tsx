import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import SvgMenu from "../components/svg/SvgMenu";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../theme";
import CustomText from "../components/CustomText";
import CustomDrawer from "../components/CustomDrawer";
import ProfileScreen from "../screens/ProfileScreen";
import SvgUser from "../components/svg/SvgUser";
import TalonsScreen from "../screens/TalonsScreen";
import SvgCard from "../components/svg/SvgCard";
import PriceScreen from "../screens/PriceScreen";
import SvgPrice from "../components/svg/SvgPrice";
import SvgPercent from "../components/svg/SvgPercent";
import PromotionScreen from "../screens/PromotionsScreen";
import MapScreen from "../screens/MapScreen";
import SvgMap from "../components/svg/SvgMap";
import { FontAwesome5 } from "@expo/vector-icons";

const HomeStack = createDrawerNavigator();
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
          height: 130,
        },
        drawerPosition: "right",
        drawerType: "front",
        drawerLabelStyle: {
          color: COLORS.white,
          fontSize: 18,
        },
        drawerItemStyle: {
          marginLeft: -10,
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
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => (
            <View style={styles.circle}>
              <FontAwesome5 name="home" size={18} color={COLORS.accent} />
            </View>
          ),
          drawerLabel: "Головна",
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
                paddingTop: 23,
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
