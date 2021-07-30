import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { addNewBooking } from "../../data/actions/rentActions";
const EntryAdd = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.addNewBooking(addNewBooking(props.index))}
    >
      <Text style={styles.textAddNew}>Nova entrada</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textAddNew: {
    color: "#3CA7E2",
    fontSize: 14,
    textTransform: "uppercase",
  },
});

export default EntryAdd;
