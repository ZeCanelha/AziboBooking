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
    return state.rentItems.map((item, index) => {
      return (
        <View key={item.id}>
          <EntryHeader
            name={item.name}
            price={item.price}
            index={index}
            dispatch={dispatch}
          >
            {renderBookings(item.bookings, index)}
          </EntryHeader>
          <View style={styles.buttonNewEntry}>
            <EntryAdd index={index} dispatch={dispatch}></EntryAdd>
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
      <Header navigation={navigation} dispatch={dispatch}></Header>
      <ScrollContent navigation={navigation} dispatch={dispatch}>
        {renderItems()}
      </ScrollContent>
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
