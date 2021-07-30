import React, { useContext } from "react";

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { AppContext } from "../../data/Store";
import { newRegist } from "../../data/actions/rentActions";

const MainMenu = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);

  const navigateToRentScreen = () => {
    dispatch(newRegist());
    navigation.navigate("RentScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/azibo_bg.jpeg")}
          resizeMode={"cover"}
          style={styles.imageStyle}
        ></ImageBackground>
      </View>
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonInverse]}>
          <Text style={[styles.text, styles.textInverse]}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToRentScreen()}
        >
          <Text style={styles.text}>
            {state.sessionActive ? "Continuar" : "Registo"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 4.5,
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  navigationContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#486B73",
    padding: 15,
    borderRadius: 5,
    width: "40%",
  },
  buttonInverse: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#486B73",
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#fff",
    textTransform: "uppercase",
  },
  textInverse: {
    color: "#486B73",
  },
});

export default MainMenu;
