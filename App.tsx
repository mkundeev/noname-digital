import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import HomeNav from "./navigation/HomeNav";
import * as Font from "expo-font";
import { View, StyleSheet, ImageBackground } from "react-native";

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
            <StatusBar style="auto" />
            <NavigationContainer>
              <HomeNav />
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
