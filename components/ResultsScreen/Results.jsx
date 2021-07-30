import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Results = (props) => {
  return (
    <View style={styles.resultsContainer}>
      <Text style={styles.textHeader}>Resultados de hoje</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontFamily: "Roboto_700Bold",
    color: "#5D8E92B8",
    fontSize: 24,
  },
});

export default Results;
