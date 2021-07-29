import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Item = ({ book, index }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={[styles.inputText, styles.textStyle]}>{index + 1}</Text>
      <View
        style={[
          styles.inputText,
          { flexDirection: "row", justifyContent: "space-around" },
        ]}
      >
        <TextInput
          maxLength={2}
          style={[styles.inputText__editable, styles.textStyle]}
          value={book.time.hours.toString()}
          keyboardType="numeric"
        ></TextInput>
        <Text style={[styles.textStyle, styles.textStyle]}>{":"}</Text>
        <TextInput
          maxLength={2}
          style={[styles.inputText__editable, styles.textStyle]}
          value={book.time.minutes.toString()}
          keyboardType="numeric"
        ></TextInput>
      </View>
      <TextInput
        maxLength={1}
        style={[styles.inputText__editable, styles.inputText, styles.textStyle]}
        keyboardType="numeric"
        value={book.duration}
      ></TextInput>
      <Text style={[styles.inputText, styles.textStyle]}>
        {`${book.time.hours + parseInt(book.duration)}:${book.time.minutes}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    color: "#5D8E92B8",
    fontSize: 24,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  inputText: {
    width: "22.5%",
    textAlign: "center",
  },

  inputText__editable: {
    backgroundColor: "#C1CECF9E",
    borderRadius: 5,
    width: "45%",
    textAlign: "center",
  },
  textStyle: {
    fontFamily: "Roboto_700Bold",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#5D8E92BA",
  },
});

export default Item;
