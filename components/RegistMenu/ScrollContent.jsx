import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import ItemAdd from "./ItemAdd";
const EntryContent = (props) => {
  const [notes, setNotes] = useState("");
  return (
    <ScrollView style={styles.bodyContainer}>
      <Text style={styles.noteTitle}>Registo do dia</Text>
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
