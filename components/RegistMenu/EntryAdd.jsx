import React from "react";
import { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { addNewBooking } from "../../data/actions/rentActions";
import { AppContext } from "../../data/Store";

const EntryAdd = (props) => {
  const { dispatch } = useContext(AppContext);

  return (
    <TouchableOpacity onPress={() => dispatch(addNewBooking(props.index))}>
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
