import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";
import ItemAdd from "./ItemAdd";

import { AppContext } from "../../data/Store";
import { updateNotesText } from "../../data/actions/rentActions";

const EntryContent = (props) => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <ScrollView style={styles.bodyContainer}>
      <Text style={styles.noteTitle}>{state.name}</Text>
      <TextInput
        placeholder={"Notas do dia"}
        value={state.notes}
        multiline={true}
        onChangeText={(text) => dispatch(updateNotesText(text))}
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
    color: "#5D8E92",
    fontSize: 16,
    textAlignVertical: "top",
  },
});

export default EntryContent;
