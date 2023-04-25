import React from "react";
import InsetShadow from "react-native-inset-shadow";
import { StyleSheet, View, TextStyle } from "react-native";
import { COLORS } from "../theme";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  styleContainer?: TextStyle | TextStyle[];
  styleContent?: TextStyle | TextStyle[];
};
export default function WhiteContainer({
  children,
  styleContainer,
  styleContent,
}: Props) {
  return (
    <View style={{ ...styles.container, ...styleContainer }}>
      <InsetShadow
        containerStyle={styles.shadow}
        shadowRadius={4}
        shadowOffset={2}
        elevation={2}
        shadowOpacity={0.05}
        color="rgb(0,0,0)"
        right={false}
        bottom={false}
        left={false}
      >
        <View style={{ ...styles.innerContainer, ...styleContent }}>
          {children}
        </View>
      </InsetShadow>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 59,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  shadow: {
    borderRadius: 15,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
