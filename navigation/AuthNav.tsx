import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import InputPhoneScreen from "../screens/Authorization/InputPhoneScreen";
import { AuthStackParamList } from "../types/root.types";
import ConfirmPhoneScreen from "../screens/Authorization/ConfirmPhoneScreen";
import { COLORS } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import NameScreen from "../screens/Authorization/NameScreen";
import DateScreen from "../screens/Authorization/DateScreen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
export default function AuthNav() {
  return (
    <AuthStack.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerBackVisible: false,
        animation: "fade",

        headerTitle: () => <View></View>,
        headerLeft: () => (
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={COLORS.text}
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
      <AuthStack.Screen name="DateScreen" component={DateScreen} />
    </AuthStack.Navigator>
  );
}
