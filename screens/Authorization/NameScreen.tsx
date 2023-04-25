import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import WhiteContainer from "../../components/WhiteContainer";
import { COLORS } from "../../theme";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/root.types";

type Props = NativeStackScreenProps<AuthStackParamList, "NameScreen">;

export default function NameScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.topWrap}>
            <Image
              source={require("../../assets/logoX.png")}
              style={{ width: 67, height: 91, alignSelf: "center" }}
            />
            <CustomText style={styles.text}>процес реєстраціЇ</CustomText>
            <View style={styles.inputWrap}>
              <CustomText>Ваше ім’я</CustomText>
              <WhiteContainer
                styleContent={styles.inputContainer}
                styleContainer={{ marginTop: 12, height: 44 }}
              >
                <TextInput
                  style={styles.input}
                  autoFocus
                  inputMode="text"
                  value={name}
                  onChangeText={setName}
                  cursorColor={COLORS.text}
                />
              </WhiteContainer>
              <CustomText style={{ marginTop: 24 }}>Ваше прізвище</CustomText>
              <WhiteContainer
                styleContent={styles.inputContainer}
                styleContainer={{ marginTop: 12, height: 44 }}
              >
                <TextInput
                  style={styles.input}
                  inputMode="text"
                  value={surname}
                  onChangeText={setSurname}
                  cursorColor={COLORS.text}
                />
              </WhiteContainer>
            </View>
          </View>
          <CustomButton
            onPress={() => navigation.navigate("DateScreen", { name, surname })}
            title="далі"
            styleBtn={styles.btn}
            styleTitle={styles.btnText}
            disabled={!(name && surname)}
          />
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
    alignItems: "center",
  },
  text: {
    textTransform: "uppercase",
    marginTop: 39,
    textAlign: "center",
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
    paddingLeft: 13,
    flexDirection: "row",
  },
  input: {
    color: COLORS.text,
    fontFamily: "MusticaPro",
    fontSize: 14,
    width: "100%",
  },
  btn: {
    height: 44,
    marginBottom: 18,
    marginTop: 71,
  },
  btnText: {
    textTransform: "uppercase",
  },
});
