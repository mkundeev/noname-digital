import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNav from "./navigation/MainNav";
import * as Font from "expo-font";

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
        <>
          <StatusBar style="auto" />
          <NavigationContainer>
            <MainNav />
          </NavigationContainer>
        </>
      )}
    </>
  );
}
