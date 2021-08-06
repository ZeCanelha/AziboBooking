import React, { useContext } from "react";

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

import { AppContext } from "../../data/Store";
import { newRegist } from "../../data/actions/rentActions";

const MainMenu = ({ navigation }) => {
  const { dispatch } = useContext(AppContext);

  const navigateToLoginScreen = () => {
    navigation.navigate("LoginScreen");
  };

  const navigateToRentScreen = () => {
    dispatch(newRegist());
    navigation.navigate("RentScreen");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/azibo_bg.jpeg")}
        resizeMode={"cover"}
        style={styles.imageStyle}
      >
        <View style={styles.iconStlye}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../../assets/TAIcon.png")}
          ></Image>
        </View>
        <View style={styles.navigationContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonInverse]}
            onPress={() => navigateToLoginScreen()}
          >
            <Text style={[styles.text, styles.textInverse]}>Histórico</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToRentScreen()}
          >
            <Text style={styles.text}>Registo</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconStlye: {
    alignSelf: "center",
    transform: [{ translateY: -250 }],
  },
  imageStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  navigationContainer: {
    height: "15%",
    padding: 10,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6cafb5",
    padding: 15,
    borderRadius: 5,
    width: "40%",
  },
  buttonInverse: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#6cafb5",
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#fff",
    textTransform: "uppercase",
  },
  textInverse: {
    color: "#6cafb5",
  },
});

export default MainMenu;
