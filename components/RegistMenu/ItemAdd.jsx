import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  Alert,
} from "react-native";

import { addNewItem, cancelRegist } from "../../data/actions/rentActions";

const ItemAdd = (props) => {
  const cancelRegistAndNavigateHome = () => {
    props.dispatch(cancelRegist());
    setModalVisible(!modalVisible);
    props.navigation.navigate("MainScreen");
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Cancelar registo?</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[styles.textStyle, styles.buttonClose]}>Não</Text>
            </Pressable>
            <Pressable
              style={[styles.button]}
              onPress={() => cancelRegistAndNavigateHome()}
            >
              <Text style={[styles.textStyle, styles.buttonClose]}>Sim</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.itemAddContainer}>
        <TouchableOpacity onPress={() => props.dispatch(addNewItem())}>
          <Text style={styles.itemAddText}>Adicionar Gaivota</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={[styles.itemAddText, styles.itemAddText__cancel]}>
            Cancelar Registo
          </Text>
        </TouchableOpacity>
      </View>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 15,
    backgroundColor: "#000",
    elevation: 2,
  },
  buttonClose: {
    color: "white",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#3CA7E2",
    fontFamily: "Roboto_700Bold",
    fontSize: 18,
  },
});

export default ItemAdd;
