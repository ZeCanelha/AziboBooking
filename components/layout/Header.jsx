import React from "react";

import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/TAIcon.png")}
          style={{ width: 50, height: 50, padding: 5 }}
        ></Image>
        <Text style={styles.textHeader}>Tour</Text>
        <Text style={[styles.textHeader, styles.textHeaderInverse]}>Azibo</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigate()}>
        <Text style={styles.buttonPrimary}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: "10%",
    marginTop: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#6cafb5",
  },

  buttonPrimary: {
    color: "#6cafb5",
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
    textTransform: "uppercase",
  },
  textHeader: {
    color: "#486B73",
    fontSize: 20,
  },
  textHeaderInverse: {
    color: "#5D8E92B8",
  },
});

export default Header;
