import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, BackHandler } from "react-native";

import EntryHeader from "./EntryHeader";
import EntryItem from "./EntryItem";
import EntryAdd from "./EntryAdd";
import ScrollContent from "./ScrollContent";
import Header from "./Header";

import { AppContext } from "../../data/Store";

const RentMenu = () => {
  // Disable back button

  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", () => true);
  //   return () =>
  //     BackHandler.removeEventListener("hardwareBackPress", () => true);
  // }, []);

  // Importar o contexto: estado actual e o dispatch

  const { state, dispatch } = useContext(AppContext);

  // Renderizar os barcos alugados + titulo
  const renderItems = () => {
    console.log(state);
    return state.rentItems.map((item, index) => {
      return (
        <View key={item.id}>
          <EntryHeader name={item.name} index={index} updateName={dispatch}>
            {renderBookings(item.bookings, index)}
          </EntryHeader>
          <View style={styles.buttonNewEntry}>
            <EntryAdd index={index} addNewBooking={dispatch}></EntryAdd>
          </View>
        </View>
      );
    });
  };

  // Renderizar os bookings

  const renderBookings = (bookings, itemIndex) => {
    return bookings.map((book, index) => {
      return (
        <EntryItem
          key={index}
          itemIndex={itemIndex}
          bookingIndex={index}
          book={book}
          dispatch={dispatch}
        ></EntryItem>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <ScrollContent addItem={dispatch}>{renderItems()}</ScrollContent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    fontFamily: "Roboto_400Regular",
  },
  buttonNewEntry: { width: "100%", alignItems: "center", marginTop: 10 },
});

export default RentMenu;
