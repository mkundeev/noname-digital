import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { View, ImageBackground, StyleSheet } from "react-native";
import MainNav from "./navigation/MainNav";
import * as Font from "expo-font";
import { COLORS } from "./theme";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          MusticaPro: require("./assets/fonts/MusticaPro.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);
  return (
    <>
      {isReady && (
        <View style={styles.container}>
          <ImageBackground
            source={require("./assets/background.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <StatusBar style="dark" />
            <NavigationContainer theme={navTheme}>
              <MainNav />
            </NavigationContainer>
          </ImageBackground>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
    borderColor: "#FCFFFE",
    borderWidth: 1,
  },
});
