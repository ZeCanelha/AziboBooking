import React, { useState, useEffect } from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import EntryHeader from "./EntryHeader";
import EntryItem from "./EntryItem";
import EntryAdd from "./EntryAdd";
import ScrollContent from "./ScrollContent";
import Header from "./Header";

const RentMenu = () => {
  // Disable back button

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => true);
  }, []);

  const defaultState = {
    id: Math.random(Math.floor(1 + 100) * 100 - 1),
    name: "Gaivota",
    price: 10,
    bookings: [
      {
        time: {
          hours: new Date().getHours().toString(),
          minutes: new Date().getMinutes().toString(),
        },
        duration: "1",
      },
    ],
  };

  const addNewItem = () => {
    updateItems((prevItems) => {
      return [...prevItems, defaultState];
    });
  };

  const addNewBooking = (index) => {
    let newState = [...items];
    newState[index].bookings.push({
      time: {
        hours: new Date().getHours().toString(),
        minutes: new Date().getMinutes().toString(),
      },
      duration: "1",
    });

    updateItems(newState);
  };

  const updateItemName = (name, index) => {
    let newState = [...items];
    newState[index].name = name;
    updateItems(newState);
  };

  const cancelItemEntry = (index, bookingIndex) => {
    let newState = [...items];
    newState[index].bookings.splice(bookingIndex, 1);
    updateItems(newState);
  };

  const updateItemDuration = (duration, itemIndex, bookingIndex) => {
    let newState = [...items];
    newState[itemIndex].bookings[bookingIndex].duration = duration;
    updateItems(newState);
  };
  const updateItemHour = (hours, itemIndex, bookingIndex) => {
    let newState = [...items];
    newState[itemIndex].bookings[bookingIndex].time.hours = hours;
    updateItems(newState);
  };
  const updateItemMinute = (minutes, itemIndex, bookingIndex) => {
    let newState = [...items];
    newState[itemIndex].bookings[bookingIndex].time.minutes = minutes;
    updateItems(newState);
  };

  const [items, updateItems] = useState([]);

  // Renderizar os barcos alugados + titulo
  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <View key={item.id}>
          <EntryHeader
            name={item.name}
            index={index}
            updateName={updateItemName}
          >
            {renderBookings(item.bookings, index)}
          </EntryHeader>
          <View style={styles.buttonNewEntry}>
            <EntryAdd index={index} addNewBooking={addNewBooking}></EntryAdd>
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
          updateDuration={updateItemDuration}
          updateHour={updateItemHour}
          updateMinute={updateItemMinute}
          cancelEntry={cancelItemEntry}
        ></EntryItem>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header></Header>
      <ScrollContent addItem={addNewItem}>{renderItems()}</ScrollContent>
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
