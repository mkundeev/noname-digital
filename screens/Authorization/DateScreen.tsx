import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import WhiteContainer from "../../components/WhiteContainer";
import { COLORS } from "../../theme";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import {
  AuthStackParamList,
  MaineStackParamList,
  HomeStackParamList,
} from "../../types/root.types";
import { Entypo } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { auth } from "../../firebase/configFB";
import { setUserData } from "../../firebase/firebaseAPi";
import type { CompositeScreenProps } from "@react-navigation/native";

type Props = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, "DateScreen">,
  CompositeScreenProps<
    NativeStackScreenProps<MaineStackParamList>,
    DrawerScreenProps<HomeStackParamList>
  >
>;

export default function DateScreen({ navigation, route }: Props) {
  const { name, surname } = route.params;
  const [date, setDate] = useState(new Date());
  const [isChecked, setChecked] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { setUserId } = useContext(AuthContext);

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (user?.uid) {
      await setUserData(
        user?.uid,
        name,
        surname,
        date.toLocaleDateString("en-GB").replaceAll("/", ".")
      );
      setUserId(user?.uid);
      navigation.navigate("HomeNav", { screen: "Home" });
    }
  };
  const onClose = () => {
    setOpen(false);
  };

  const onConfirm = (date: Date) => {
    onClose();
    setDate(date);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setOpen(false)}>
      <View style={styles.container}>
        <View style={styles.topWrap}>
          <Image
            source={require("../../assets/logoX.png")}
            style={{ width: 67, height: 91 }}
          />
          <CustomText style={styles.text}>процес реєстраціЇ</CustomText>
          <View style={styles.inputWrap}>
            <CustomText>Ваше ім’я</CustomText>
            <TouchableOpacity
              onPress={() => setOpen(!isOpen)}
              activeOpacity={1}
            >
              <WhiteContainer
                styleContent={styles.inputContainer}
                styleContainer={{ marginTop: 12, height: 44 }}
              >
                <TextInput
                  style={styles.input}
                  value={date.toLocaleDateString("en-GB").replaceAll("/", ".")}
                  editable={false}
                />
              </WhiteContainer>
            </TouchableOpacity>
            <View style={styles.checkboxWrap}>
              <View
                style={{
                  borderBottomColor: COLORS.text,
                  borderBottomWidth: 1,
                }}
              >
                <CustomText style={{ lineHeight: 30 }}>
                  Я погоджуюсь з правилами програми
                </CustomText>
              </View>
              <TouchableOpacity
                onPress={() => setChecked(!isChecked)}
                activeOpacity={1}
              >
                <View
                  style={{
                    ...styles.checkboxIner,
                    backgroundColor: isChecked ? COLORS.accent : COLORS.white,
                    borderColor: isChecked ? COLORS.white : COLORS.accent,
                  }}
                >
                  <Entypo name="check" size={22} color={COLORS.white} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <CustomButton
            onPress={handleSubmit}
            title="далі"
            styleBtn={styles.btn}
            styleTitle={styles.btnText}
            disabled={!(date && isChecked)}
          ></CustomButton>
        </View>
        <DateTimePickerModal
          isVisible={isOpen}
          mode="date"
          onConfirm={onConfirm}
          onCancel={onClose}
          date={date}
          maximumDate={new Date()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 76,
    paddingHorizontal: 32,
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
    borderRadius: 15,
    paddingLeft: 13,
    alignSelf: "flex-start",
  },
  input: {
    color: COLORS.text,
    fontFamily: "MusticaPro",
    fontSize: 14,
  },
  btn: {
    marginTop: 105,
    height: 44,
  },
  btnText: {
    textTransform: "uppercase",
  },
  checkboxIner: {
    margin: 8,
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.white,
    borderWidth: 2,
  },
  checkboxWrap: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 29,
  },
});
