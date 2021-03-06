import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import {
  updateItemName,
  updateItemPrice,
} from "../../data/actions/rentActions";

const EntryHeader = (props) => {
  const onNameChange = (name) => {
    props.dispatch(updateItemName(props.index, name));
  };

  const onPriceChange = (price) => {
    props.dispatch(updateItemPrice(props.index, price));
  };

  return (
    <View>
      <View style={styles.rowContainer}>
        <TextInput
          onChangeText={(name) => onNameChange(name)}
          style={styles.titleText}
          value={props.name}
        ></TextInput>
        <View style={styles.rowContainer}>
          <TextInput
            onChangeText={(price) => onPriceChange(price)}
            style={styles.titleText}
            value={props.price}
            keyboardType="numeric"
          ></TextInput>
          <Text style={styles.titleText}>€</Text>
        </View>
      </View>
      <View style={styles.headerContainer}>
        {/* <Text style={styles.textHeader}>Nº Saída</Text> */}
        <Text style={styles.textHeader}>Saída</Text>
        <Text style={styles.textHeader}>Duração</Text>
        <Text style={styles.textHeader}>Chegada</Text>
        <Text style={styles.textHeader}>Concluído</Text>
      </View>
      <View>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
    color: "#5D8E92BA",
    marginTop: 10,
  },
  textHeader: {
    textTransform: "uppercase",
    color: "#3CA7E2",
    letterSpacing: 1,
    fontFamily: "Roboto_700Bold",
    fontSize: 12,
    textAlign: "center",
    flexBasis: "20%",
    flexShrink: 1,
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconeStyle: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
});

export default EntryHeader;
