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
  const { bookings, name } = route.params;

  const navigate = () => {
    navigation.navigate("AdminScreen");
  };

  let totalAcumulative = 0;

  const calculateIncome = (bookings, price) => {
    let totalIncome = 0;
    bookings.forEach((book) => {
      totalIncome += parseInt(book.duration) * parseInt(price);
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
        <View>
          <View style={styles.displayBox}>
            <Text style={styles.textHeaderTitle}>Gaivota</Text>
            <Text style={styles.textHeaderTitle}>Nº Saídas</Text>
            <Text style={styles.textHeaderTitle}>Total</Text>
          </View>
          <ScrollView>{mapResults()}</ScrollView>
        </View>
        <View style={styles.displayBox}>
          <Text style={styles.textHeaderResults}>Total:</Text>
          <Text style={styles.textHeaderResults}>{totalAcumulative + "€"}</Text>
        </View>
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
  displayBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
    padding: 5,
  },
});

export default CardScreen;