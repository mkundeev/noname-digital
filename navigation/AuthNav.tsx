import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet, ImageBackground } from "react-native";
import InputPhoneScreen from "../screens/Authorization/InputPhoneScreen";
import { AuthStackParamList } from "../types/root.types";

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
          screenOptions={{
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerShown: false,
            contentStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          <AuthStack.Screen
            name="InputPhoneScreen"
            component={InputPhoneScreen}
          />
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
