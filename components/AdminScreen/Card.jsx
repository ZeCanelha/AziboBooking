import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Header from "../layout/Header";

const CardScreen = ({ route, navigation }) => {
  const { bookings, name, notes } = route.params;

  const navigate = () => {
    navigation.navigate("AdminScreen");
  };

  let totalAcumulative = 0;

  const calculateIncome = (bookings, price) => {
    let totalIncome = 0;
    bookings.forEach((book) => {
      if (
        book.duration === "30" ||
        book.duration === "0.5" ||
        book.duration < 1
      )
        totalIncome += 0.5 * parseInt(price);
      else totalIncome += parseInt(book.duration) * parseInt(price);
    });
    totalAcumulative += totalIncome;

    return totalIncome;
  };

  const mapResults = () => {
    return bookings.map((item) => {
      return (
        <View style={styles.displayBox} key={item._id}>
          <Text style={styles.resultsText}>{item.name}</Text>
          <Text style={styles.resultsText}>{item.bookings.length}</Text>
          <Text style={styles.resultsText}>
            {calculateIncome(item.bookings, item.price) + "€"}
          </Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header navigate={navigate} buttonText={"Voltar"}></Header>
      <View style={styles.resultsContainer}>
        <Text style={styles.textHeaderResults}>{name}</Text>

        <ScrollView>
          <Text style={styles.textNotesHeader}>Notas do dia:</Text>
          <Text style={styles.textNotes}>{notes}</Text>
          <View style={styles.displayBox}>
            <Text style={styles.textHeaderTitle}>Gaivota</Text>
            <Text style={styles.textHeaderTitle}>Nº Saídas</Text>
            <Text style={styles.textHeaderTitle}>Total</Text>
          </View>
          <ScrollView>{mapResults()}</ScrollView>
          <View style={styles.displayBox}>
            <Text style={styles.textHeaderResults}>Total:</Text>
            <Text style={styles.textHeaderResults}>
              {totalAcumulative + "€"}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  resultsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textHeaderResults: {
    fontFamily: "Roboto_700Bold",
    color: "#5D8E92B8",
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 10,
  },
  textHeaderTitle: {
    textTransform: "uppercase",
    color: "#3CA7E2",
    letterSpacing: 2,
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  resultsText: {
    fontFamily: "Roboto_700Bold",
    color: "#5D8E92B8",
    fontSize: 15,
    padding: 10,
    flex: 1,
    textAlign: "center",
  },
  textNotesHeader: {
    fontFamily: "Roboto_700Bold",
    color: "#3CA7E2",
    textTransform: "uppercase",
    fontSize: 18,
    paddingVertical: 5,
    marginTop: 10,
  },
  textNotes: {
    color: "#5D8E92",
    fontSize: 15,
    flex: 1,
    padding: 5,
    backgroundColor: "#6cafb558",
    borderRadius: 5,
    marginBottom: 10,
  },
  displayBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomColor: "#6cafb5",
    borderBottomWidth: 1,
    flex: 1,
    padding: 5,
  },
});

export default CardScreen;
