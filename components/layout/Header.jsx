import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <View>
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
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#486B73",
  },

  buttonPrimary: {
    color: "#3CA7E2",
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
