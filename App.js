import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import ScreenView from "./app/components/ScreenView";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScreenView>
      <HomeScreen />
      <StatusBar style="auto" />
    </ScreenView>
  );
}
