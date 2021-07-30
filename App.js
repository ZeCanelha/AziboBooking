import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";

import MainMenu from "./components/MainMenu/MainMenu";
import RentMenu from "./components/RegistMenu/RentMenu";
import Results from "./components/ResultsScreen/Results";

import Store from "./data/Store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const Stack = createStackNavigator();

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
  } else {
    return (
      <Store>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="MainScreen"
              options={{ headerShown: false }}
              component={MainMenu}
            />
            <Stack.Screen
              name="RentScreen"
              options={{ headerShown: false }}
              component={RentMenu}
            />
            <Stack.Screen
              name="ResultsScreen"
              options={{ headerShown: false }}
              component={Results}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Store>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto_400Regular",
  },
});
