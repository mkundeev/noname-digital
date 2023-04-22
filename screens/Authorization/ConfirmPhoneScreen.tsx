import { useState, Fragment } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import { COLORS } from "../../theme";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/root.types";
import { Octicons } from "@expo/vector-icons";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

type Props = NativeStackScreenProps<AuthStackParamList, "ConfirmPhoneScreen">;

export default function ConfirmPhoneScreen({ navigation, route }: Props) {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");
  const [code, setCode] = useState(route.params.code);
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleChange = (value: string) => {
    setIsValid(false);
    if (value === code) setIsValid(true);
    setValue(value);
  };

  const changeCode = () => {
    setCode("1111");
  };

  const onSubmit = () => {
    console.log(value === route.params.code);
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
            <CustomText>Ваш номер телефону</CustomText>
            <View style={styles.inputContainer}>
              <View style={styles.flag}>
                <Image
                  source={require("../../assets/flag.png")}
                  style={{ width: 21, height: 21 }}
                />
              </View>
              <TextInput
                style={styles.input}
                value={route.params.phone}
                editable={false}
              />
              <TouchableOpacity
                disabled={value.length === 4}
                style={{
                  ...styles.pen,
                  backgroundColor: value.length === 4 ? "#ccc" : COLORS.accent,
                }}
                onPress={() => navigation.navigate("InputPhoneScreen")}
              >
                <Octicons name="pencil" size={10} color={COLORS.white} />
              </TouchableOpacity>
            </View>
            <CustomText style={{ marginTop: 24 }}>Введіть код з SMS</CustomText>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={handleChange}
              cellCount={4}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Fragment key={index}>
                  <Text
                    key={`value-${index}`}
                    style={[
                      styles.inputSMSContainer,
                      isValid && value.length === 4 && styles.isValid,
                      !isValid && value.length === 4 && styles.isInvalid,
                    ]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </Fragment>
              )}
            />
          </View>
          <TouchableOpacity style={{ marginTop: 28 }} onPress={changeCode}>
            <CustomText>Надіслати код повторно</CustomText>
          </TouchableOpacity>
        </View>
        <CustomButton
          onPress={() => navigation.navigate("NameScreen")}
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
    flex: 0,
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
    flex: 0,
  },
  inputSMSContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    height: 44,
    flex: 1,
    textAlign: "center",
    lineHeight: 44,
  },
  input: {
    color: COLORS.text,
    fontFamily: "MusticaPro",
    fontSize: 14,
  },
  pen: {
    width: 16,
    height: 16,
    position: "absolute",
    right: 14,
    top: 14,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    position: "absolute",
    left: 12,
    top: 12,
  },
  btn: {
    height: 44,
  },
  btnText: {
    textTransform: "uppercase",
  },
  root: { padding: 20, minHeight: 300 },
  codeFieldRoot: { marginTop: 20, gap: 12 },
  isValid: {
    borderColor: COLORS.accent,
    borderWidth: 1,
  },
  isInvalid: {
    borderColor: "rgba(220, 0, 0, 0.5)",
    borderWidth: 1,
  },
});
