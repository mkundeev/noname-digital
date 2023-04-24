import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNav from "./HomeNav";
import AuthNav from "./AuthNav";
import { MaineStackParamList } from "../types/root.types";

const MainStack = createNativeStackNavigator<MaineStackParamList>();
export default function MainNav() {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false, animation: "none" }}
    >
      <MainStack.Screen name="HomeNav" component={HomeNav} />
      <MainStack.Screen name="AuthNav" component={AuthNav} />
    </MainStack.Navigator>
  );
}
