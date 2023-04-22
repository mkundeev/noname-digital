import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet, ImageBackground } from "react-native";
import InputPhoneScreen from "../screens/Authorization/InputPhoneScreen";
import { AuthStackParamList } from "../types/root.types";
import ConfirmPhoneScreen from "../screens/Authorization/ConfirmPhoneScreen";
import { COLORS } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import NameScreen from "../screens/Authorization/NameScreen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
export default function AuthNav() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <AuthStack.Navigator
          screenOptions={({ navigation }) => ({
            headerTransparent: true,
            headerBackVisible: false,

            headerTitle: () => <View></View>,
            headerLeft: () => (
              <MaterialIcons
                name="arrow-back-ios"
                size={24}
                color={COLORS.text}
                style={{ marginLeft: 20 }}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        >
          <AuthStack.Screen
            name="InputPhoneScreen"
            component={InputPhoneScreen}
            options={{ headerLeft: () => <View></View> }}
          />
          <AuthStack.Screen
            name="ConfirmPhoneScreen"
            component={ConfirmPhoneScreen}
          />
          <AuthStack.Screen name="NameScreen" component={NameScreen} />
        </AuthStack.Navigator>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    borderColor: "#FCFFFE",
    borderWidth: 1,
  },
});
