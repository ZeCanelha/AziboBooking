import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ItemAdd = (props) => {
  return (
    <View style={styles.itemAddContainer}>
      <TouchableOpacity onPress={() => props.addItem()}>
        <Text style={styles.itemAddText}>Adicionar Gaivota</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[styles.itemAddText, styles.itemAddText__cancel]}>
          Cancelar Registo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemAddContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  itemAddText: {
    fontSize: 18,
    letterSpacing: 0.5,
    fontFamily: "Roboto_700Bold",
    textDecorationLine: "underline",
    color: "#3CA7E2",
  },
  itemAddText__cancel: {
    color: "#CF1818",
    textDecorationLine: "none",
    fontSize: 16,
  },
});

export default ItemAdd;
