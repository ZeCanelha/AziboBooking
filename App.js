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
import CardScreen from "./components/AdminScreen/Card";
import Login from "./components/LoginScreen/Login";
import Dashboard from "./components/AdminScreen/Dashboard";

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
              name="AdminScreen"
              options={{ headerShown: false }}
              component={Dashboard}
            />

            <Stack.Screen
              name="RentScreen"
              options={{ headerShown: false }}
              component={RentMenu}
            />
            <Stack.Screen
              name="ResultsScreen"
              options={{ headerShown: false }}
              component={CardScreen}
            />
            <Stack.Screen
              name="LoginScreen"
              options={{ headerShown: false }}
              component={Login}
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
