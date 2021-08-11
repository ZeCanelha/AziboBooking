import React from "react";
import { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { addNewBooking } from "../../data/actions/rentActions";
import { AppContext } from "../../data/Store";

const EntryAdd = (props) => {
  const { dispatch } = useContext(AppContext);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(addNewBooking(props.index))}
    >
      <Text style={styles.textAddNew}>Nova entrada</Text>
      <FontAwesome name="plus-circle" size={18} color="#29767D" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textAddNew: {
    color: "#3CA7E2",
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "uppercase",
  },
  button: {
    width: "45%",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default EntryAdd;
