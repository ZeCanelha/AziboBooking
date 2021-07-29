import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import EntryHeader from "./EntryHeader";
import EntryItem from "./EntryItem";
import EntryAdd from "./EntryAdd";
import ScrollContent from "./ScrollContent";
import Header from "./Header";

const RentMenu = () => {
  const defaultState = {
    id: Math.random(Math.floor(1 + 100) * 100 - 1),
    name: "Gaivota",
    price: 10,
    bookings: [
      {
        time: {
          hours: new Date().getHours(),
          minutes: new Date().getMinutes(),
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

  const updateItemName = (name, index) => {
    let newState = [...items];
    newState[index].name = name;
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
            {renderBookings(item.bookings)}
          </EntryHeader>
          <View style={{ width: "100%", alignItems: "center" }}>
            <EntryAdd></EntryAdd>
          </View>
        </View>
      );
    });
  };

  // Renderizar os bookings

  const renderBookings = (bookings) => {
    return bookings.map((book, index) => {
      return <EntryItem key={index} index={index} book={book}></EntryItem>;
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
});

export default RentMenu;
