import { useState, Fragment, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import WhiteContainer from "../../components/WhiteContainer";
import { COLORS } from "../../theme";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/root.types";
import { Octicons } from "@expo/vector-icons";
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { verifyCode } from "../../firebase/firebaseAPi";

type Props = NativeStackScreenProps<AuthStackParamList, "ConfirmPhoneScreen">;

export default function ConfirmPhoneScreen({ navigation, route }: Props) {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELLCOUNT = 6;
  const ref = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) ref.current.focus();
    }, 100);
  }, []);

  const handleChange = (value: string) => {
    setIsValid(false);
    if (value.length === CELLCOUNT) setIsValid(true);
    setValue(value);
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();
    try {
      await verifyCode(route.params.userId, value);

      navigation.navigate("NameScreen");
    } catch (err) {
      setIsValid(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.topWrap}>
            <Image
              source={require("../../assets/logoX.png")}
              style={{ width: 67, height: 91 }}
            />
            <CustomText style={styles.text}>процес реєстраціЇ</CustomText>
            <View style={styles.inputWrap}>
              <CustomText>Ваш номер телефону</CustomText>
              <WhiteContainer
                styleContent={styles.inputContainer}
                styleContainer={{ marginTop: 12, height: 44 }}
              >
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
                  disabled={value.length === CELLCOUNT}
                  style={{
                    ...styles.pen,
                    backgroundColor:
                      value.length === CELLCOUNT ? "#ccc" : COLORS.accent,
                  }}
                  onPress={handleSubmit}
                >
                  <Octicons name="pencil" size={10} color={COLORS.white} />
                </TouchableOpacity>
              </WhiteContainer>
              <CustomText style={{ marginTop: 24 }}>
                Введіть код з SMS
              </CustomText>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={handleChange}
                cellCount={CELLCOUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Fragment key={index}>
                    <Text
                      key={`value-${index}`}
                      style={[
                        styles.inputSMSContainer,
                        isValid && value.length === CELLCOUNT && styles.isValid,
                        !isValid &&
                          value.length === CELLCOUNT &&
                          styles.isInvalid,
                      ]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  </Fragment>
                )}
              />
            </View>
            <TouchableOpacity style={{ marginTop: 28 }}>
              <CustomText>Надіслати код повторно</CustomText>
            </TouchableOpacity>
          </View>
          <CustomButton
            onPress={handleSubmit}
            title="далі"
            styleBtn={styles.btn}
            styleTitle={styles.btnText}
            disabled={!(value.length === 6)}
          ></CustomButton>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 76,
    paddingHorizontal: 32,
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
    paddingLeft: 45,
    position: "relative",
    flexDirection: "row",
  },
  inputSMSContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    height: 44,
    flex: 1,
    textAlign: "center",
    lineHeight: 44,
    overflow: "hidden",
  },
  input: {
    color: COLORS.text,
    fontFamily: "MusticaPro",
    fontSize: 14,
    width: "100%",
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
    marginBottom: 18,
    marginTop: 28,
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
