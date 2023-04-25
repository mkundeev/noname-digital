import { StyleSheet, TextStyle, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { COLORS } from "../theme";
type CustomTextProps = {
  styleBtn?: TextStyle | TextStyle[];
  styleTitle?: TextStyle | TextStyle[];
  onPress: () => void;
  title: string;
  disabled?: boolean;
};
export default function CustomButton({
  styleBtn,
  styleTitle,
  onPress,
  title,
  disabled,
}: CustomTextProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...styles.btn,
        backgroundColor: disabled ? "#ccc" : COLORS.accent,
        ...styleBtn,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <CustomText style={{ ...styles.btnText, ...styleTitle }}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    marginTop: 32,
    borderRadius: 15,
    height: 44,
    alignItems: "center",
    flexDirection: "row",
  },
  btnText: {
    color: COLORS.white,
    fontSize: 18,
    textAlign: "center",
    flex: 1,
  },
});
