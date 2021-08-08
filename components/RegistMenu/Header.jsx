import React, { useState, useContext } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  ToastAndroid,
  Pressable,
  Image,
} from "react-native";

import { cancelRegist } from "../../data/actions/rentActions";

import { AppContext } from "../../data/Store";

import { baseURL } from "../../config/urls";

const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const postFailed = () => {
    ToastAndroid.show(
      "Não foi possível enviar os resultados!",
      ToastAndroid.SHORT
    );
  };

  const { state } = useContext(AppContext);

  const concludeAndNavigate = () => {
    setLoading(true);
    axios
      .post(baseURL + "/bookings", state)
      .then((response) => {
        if (response.status === 201) {
          setLoading(false);
          setModalVisible(!modalVisible);
          props.dispatch(cancelRegist());
          props.navigation.navigate("MainScreen");
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setModalVisible(!modalVisible);
        postFailed();
      })
      .finally(() => {
        setLoading(false);
        setModalVisible(!modalVisible);
      });
  };

  return (
    <View style={styles.container}>
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
            <Text style={styles.modalText}>Concluir Registo?</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[styles.textStyle, styles.buttonClose]}>Não</Text>
            </Pressable>
            <Pressable
              style={[styles.button]}
              onPress={() => concludeAndNavigate()}
            >
              {loading ? (
                <ActivityIndicator size="large" color="#FFF" />
              ) : (
                <Text style={[styles.textStyle, styles.buttonClose]}>Sim</Text>
              )}
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/TAIcon.png")}
            style={{ width: 50, height: 50, padding: 5 }}
          ></Image>
          <Text style={styles.textHeader}>Tour</Text>
          <Text style={[styles.textHeader, styles.textHeaderInverse]}>
            Azibo
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.buttonPrimary}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "10%",
    flexDirection: "column",
    marginTop: 50,
  },
  headerContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderColor: "#6cafb5",
  },
  buttonPrimary: {
    color: "#6cafb5",
    fontFamily: "Roboto_500Medium",
    fontSize: 20,
    textTransform: "uppercase",
  },
  textHeader: {
    color: "#486B73",
    fontSize: 20,
  },
  textHeaderInverse: {
    color: "#5D8E92B8",
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

export default Header;
