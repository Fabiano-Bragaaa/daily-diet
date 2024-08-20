import theme from "./src/theme";
import React from "react";

import { ThemeProvider } from "styled-components";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

import { Loading } from "./src/components/Loading";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
