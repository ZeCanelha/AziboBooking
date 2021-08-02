import React, { useEffect, useContext } from "react";
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { AppContext } from "../../data/Store";
import { cancelRegist } from "../../data/actions/rentActions";

const Results = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      navigation.navigate("MainScreen");
      return true;
    });
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => {
        navigation.navigate("MainScreen");
        return true;
      });
  }, []);

  const { state, dispatch } = useContext(AppContext);

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
    return state.rentItems.map((item) => {
      return (
        <View style={styles.displayBox} key={item.id}>
          <Text style={styles.resultsText}>{item.name}</Text>
          <Text style={styles.resultsText}>{item.bookings.length}</Text>
          <Text style={styles.resultsText}>
            {calculateIncome(item.bookings, item.price) + "€"}
          </Text>
        </View>
      );
    });
  };

  const navigateAndClear = () => {
    dispatch(cancelRegist());
    navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.textHeader}>Tour</Text>
          <Text style={[styles.textHeader, styles.textHeaderInverse]}>
            Azibo
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigateAndClear()}>
          <Text style={styles.buttonPrimary}>Menu Inicial</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.textHeaderResults}>Resultados de hoje</Text>
        <View style={styles.displayBox}>
          <Text style={styles.textHeaderTitle}>Gaivota</Text>
          <Text style={styles.textHeaderTitle}>Nº Saídas</Text>
          <Text style={styles.textHeaderTitle}>Total</Text>
        </View>
        <ScrollView>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {mapResults()}
          </View>
        </ScrollView>
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
  },
  headerContainer: {
    height: "10%",
    marginTop: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderColor: "#486B73",
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
    width: "32%",
    padding: 10,
  },
  resultsText: {
    fontFamily: "Roboto_700Bold",
    color: "#5D8E92B8",
    fontSize: 15,
    textAlign: "center",
    width: "32%",
    padding: 10,
  },
  buttonPrimary: {
    color: "#3CA7E2",
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
  displayBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Results;
