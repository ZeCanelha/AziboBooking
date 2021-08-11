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

import { Checkbox } from "react-native-paper";

import {
  cancelItemEntry as cancel,
  updateItemDuration,
  updateItemMinute,
  updateItemHour,
  updateItemStatus,
} from "../../data/actions/rentActions";
const Item = ({ book, bookingIndex, itemIndex, dispatch }) => {
  const updateNewDuration = (duration) => {
    dispatch(updateItemDuration(duration, itemIndex, bookingIndex));
  };
  const updateNewHour = (hour) => {
    dispatch(updateItemHour(hour, itemIndex, bookingIndex));
  };
  const updateNewMinute = (minute) => {
    dispatch(updateItemMinute(minute, itemIndex, bookingIndex));
  };
  const updateNewStatus = () => {
    dispatch(updateItemStatus(itemIndex, bookingIndex));
  };

  const cancelItemEntry = () => {
    dispatch(cancel(itemIndex, bookingIndex));
    setModalVisible(!modalVisible);
  };

  // const displayHours = (hours, minutes, duration) => {
  //   if (duration < 1 || duration == "30") {
  //     const durationInMinutes = 30;
  //     if (minutes + durationInMinutes > 60) {
  //       return `${parseInt(hours) + 1}:${
  //         (parseInt(minutes) + durationInMinutes) % 60
  //       } `;
  //     }
  //   } else {
  //     return `${
  //       ((parseInt(hours) || 0) + (parseInt(duration) || 0)) % 24
  //     }:${minutes}`;
  //   }
  // };

  const displayHours = (hours, minutes, duration) => {
    const currentHoursToMins = parseInt(hours) * 60;
    const inputTimeInMins = currentHoursToMins + parseInt(minutes);
    const durationInMins = parseFloat(duration) * 60;
    const totalTimeInMins = inputTimeInMins + durationInMins;

    const chours = parseInt(totalTimeInMins / 60);

    const cminutes = totalTimeInMins % 60;

    return `${chours || hours}:${
      cminutes < 10 ? "0" + cminutes : cminutes || 0
    }`;
  };

  const [modalVisible, setModalVisible] = useState(false);

  displayHours(book.time.hours, book.time.minutes, book.duration);
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
      <Pressable
        style={{ flexDirection: "row" }}
        onLongPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.itemContainer}>
          <View
            style={[
              styles.inputText,
              styles.inputSize,
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
          <View
            style={[
              styles.inputSize,
              { flexDirection: "row", justifyContent: "space-around" },
            ]}
          >
            <TextInput
              maxLength={3}
              style={[styles.inputText__editable, styles.textStyle]}
              keyboardType="numeric"
              value={book.duration}
              onChangeText={(duration) => updateNewDuration(duration)}
            ></TextInput>
          </View>
          <View style={styles.inputSize}>
            <Text style={[styles.inputText, styles.textStyle]}>
              {displayHours(book.time.hours, book.time.minutes, book.duration)}
            </Text>
          </View>

          <View
            style={[
              styles.inputSize,
              { flexDirection: "row", justifyContent: "space-around" },
            ]}
          >
            <Checkbox
              status={book.completed ? "checked" : "unchecked"}
              color="#486B73"
              onPress={() => updateNewStatus()}
            ></Checkbox>
          </View>
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
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputSize: {
    flexBasis: "20%",
    flexShrink: 1,
    flexGrow: 1,
    marginHorizontal: 5,
  },
  inputText: {
    textAlign: "center",
  },
  inputText__editable: {
    backgroundColor: "#C1CECF9E",
    borderRadius: 5,
    textAlign: "center",
    flexGrow: 1,
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
