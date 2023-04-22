import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../theme";
import { AntDesign } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/root.types";

type Props = NativeStackScreenProps<AuthStackParamList, "InputPhoneScreen">;

export default function InputPhoneScreen({ navigation }: Props) {
  const [phone, setPhone] = useState("+38(0");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (value: string) => {
    let newValue = value;
    setIsValid(false);
    if (value[3] && value[3] !== "(") {
      newValue = value.slice(0, 3) + "(" + value.slice(3);
    }
    if (value[7] && value[7] !== ")") {
      newValue = value.slice(0, 7) + ")" + value.slice(7);
    }
    if (newValue.match(/^\+38\((0[5-9][0-9]\)\d{7})$/)) {
      setIsValid(true);
    }
    setPhone(newValue);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.topWrap}>
          <Image
            source={require("../../assets/logoX.png")}
            style={{ width: 67, height: 91 }}
          />
          <CustomText style={styles.text}>процес реєстраціЇ</CustomText>
          <View style={styles.inputWrap}>
            <CustomText>Введіть Ваш номер телефону</CustomText>
            <View style={styles.inputContainer}>
              <View style={styles.flag}>
                <Image
                  source={require("../../assets/flag.png")}
                  style={{ width: 21, height: 21 }}
                />
              </View>
              <TextInput
                style={styles.input}
                autoFocus
                inputMode="tel"
                value={phone}
                onChangeText={handleChange}
                cursorColor={COLORS.text}
                maxLength={15}
              />
              <TouchableOpacity
                style={styles.close}
                onPress={() => {
                  setIsValid(false);
                  setPhone("+38(0");
                }}
              >
                <AntDesign name="closecircle" size={16} color={COLORS.accent} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <CustomButton
          onPress={() =>
            navigation.navigate("ConfirmPhoneScreen", { phone, code: "1111" })
          }
          title="далі"
          styleBtn={styles.btn}
          styleTitle={styles.btnText}
          disabled={!isValid}
        ></CustomButton>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 76,
    paddingHorizontal: 32,
    justifyContent: "space-between",
    paddingBottom: 18,
  },
  text: {
    textTransform: "uppercase",
    marginTop: 39,
    flex: 0,
  },
  topWrap: {
    width: "100%",
    alignItems: "center",
  },
  inputWrap: {
    marginTop: 38,
    width: "100%",
  },
  inputContainer: {
    marginTop: 12,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    height: 44,
    paddingLeft: 45,
    position: "relative",
    flexDirection: "row",
  },
  input: {
    color: COLORS.text,
    fontFamily: "MusticaPro",
    fontSize: 14,
  },
  flag: {
    position: "absolute",
    left: 12,
    top: 12,
  },
  close: {
    width: 16,
    height: 16,
    position: "absolute",
    right: 14,
    top: 14,
  },
  btn: {
    height: 44,
  },
  btnText: {
    textTransform: "uppercase",
  },
});
