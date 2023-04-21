import { Text, StyleSheet, TextStyle } from "react-native";
import { COLORS } from "../theme";
type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  children: string | string[];
};
export default function CustomText({ children, style }: CustomTextProps) {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "MusticaPro",
    color: COLORS.text,
    flex: 1,
  },
});
