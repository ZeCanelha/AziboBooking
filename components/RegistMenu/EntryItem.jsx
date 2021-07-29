import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Alert,
} from "react-native";

const Item = ({
  book,
  bookingIndex,
  itemIndex,
  updateDuration,
  updateHour,
  updateMinute,
  cancelEntry,
}) => {
  const updateNewDuration = (duration) => {
    updateDuration(duration, itemIndex, bookingIndex);
  };
  const updateNewHour = (hour) => {
    console.log("??");
    updateHour(hour, itemIndex, bookingIndex);
  };
  const updateNewMinute = (minute) => {
    updateMinute(minute, itemIndex, bookingIndex);
  };

  const cancelItemEntry = () => {
    cancelEntry(itemIndex, bookingIndex);
    setModalVisible(!modalVisible);
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ alignItems: "center" }}>
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
            <Text style={styles.modalText}>Cancelar entrada?</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[styles.textStyle, styles.buttonClose]}>Não</Text>
            </Pressable>
            <Pressable
              style={[styles.button]}
              onPress={() => cancelItemEntry()}
            >
              <Text style={[styles.textStyle, styles.buttonClose]}>Sim</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onLongPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.itemContainer}>
          <Text style={[styles.inputText, styles.textStyle]}>
            {bookingIndex + 1}
          </Text>
          <View
            style={[
              styles.inputText,
              { flexDirection: "row", justifyContent: "space-around" },
            ]}
          >
            <TextInput
              maxLength={2}
              style={[styles.inputText__editable, styles.textStyle]}
              value={book.time.hours}
              onChangeText={(hours) => updateNewHour(hours)}
              keyboardType="numeric"
            ></TextInput>
            <Text style={[styles.textStyle, styles.textStyle]}>{":"}</Text>
            <TextInput
              maxLength={2}
              style={[styles.inputText__editable, styles.textStyle]}
              value={book.time.minutes}
              onChangeText={(minute) => updateNewMinute(minute)}
              keyboardType="numeric"
            ></TextInput>
          </View>
          <TextInput
            maxLength={1}
            style={[
              styles.inputText__editable,
              styles.inputText,
              styles.textStyle,
            ]}
            keyboardType="numeric"
            value={book.duration}
            onChangeText={(duration) => updateNewDuration(duration)}
          ></TextInput>
          <Text style={[styles.inputText, styles.textStyle]}>
            {`${
              (parseInt(book.time.hours) || 0) + (parseInt(book.duration) || 0)
            }:${book.time.minutes}`}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    color: "#5D8E92B8",
    fontSize: 24,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginLeft: "2.5%",
  },
  inputText: {
    width: "22.5%",
    textAlign: "center",
  },

  inputText__editable: {
    backgroundColor: "#C1CECF9E",
    borderRadius: 5,
    width: "45%",
    textAlign: "center",
  },
  textStyle: {
    fontFamily: "Roboto_700Bold",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#5D8E92BA",
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

export default Item;
