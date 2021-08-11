import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import EntryHeader from "./EntryHeader";
import EntryItem from "./EntryItem";
import EntryAdd from "./EntryAdd";
import ScrollContent from "./ScrollContent";
import Header from "./Header";

import { AppContext } from "../../data/Store";

const RentMenu = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);

  // Renderizar os barcos alugados + titulo
  const renderItems = () => {
    return state.bookings.map((item, index) => {
      return (
        <View style={styles.cardContainer} key={item.id}>
          <EntryHeader
            name={item.name}
            price={item.price}
            index={index}
            dispatch={dispatch}
          >
            {renderBookings(item.bookings, index)}
          </EntryHeader>
          <View style={styles.buttonNewEntry}>
            <EntryAdd index={index}></EntryAdd>
          </View>
        </View>
      );
    });
  };

  // Renderizar os bookings

  const renderBookings = (bookings, itemIndex) => {
    return bookings.map((book, index) => {
      if (!book.completed) {
        return (
          <EntryItem
            key={index}
            itemIndex={itemIndex}
            bookingIndex={index}
            book={book}
            dispatch={dispatch}
          ></EntryItem>
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} dispatch={dispatch}></Header>
      <ScrollContent navigation={navigation}>{renderItems()}</ScrollContent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    fontFamily: "Roboto_400Regular",
  },
  cardContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#29767D",
  },
  buttonNewEntry: { width: "100%", alignItems: "center", marginTop: 10 },
});

export default RentMenu;
