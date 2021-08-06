import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import ItemAdd from "./ItemAdd";

import { AppContext } from "../../data/Store";

const EntryContent = (props) => {
  const [notes, setNotes] = useState("");
  const { state } = useContext(AppContext);
  return (
    <ScrollView style={styles.bodyContainer}>
      <Text style={styles.noteTitle}>{state.name}</Text>
      <TextInput
        placeholder={"Notas do dia"}
        onChangeText={(text) => setNotes(text)}
        style={styles.textInput}
      ></TextInput>
      {props.children}
      <ItemAdd {...props}></ItemAdd>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  noteTitle: {
    color: "#486B73",
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    marginBottom: 5,
  },
  textInput: {
    width: "95%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#C1CECF",
    color: "#fff",
  },
});

export default EntryContent;
