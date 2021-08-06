import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Header from "../layout/Header";

import { FontAwesome } from "@expo/vector-icons";

import { baseURL } from "../../config/urls";

const Card = ({ item, onPress }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{item.name}</Text>
      <TouchableOpacity onPress={onPress}>
        <FontAwesome name="chevron-right" size={24} color="#29767D" />
      </TouchableOpacity>
    </View>
  );
};

const Dashboard = ({ navigation }) => {
  const [data, setData] = useState(null);

  const navigate = () => {
    navigation.navigate("MainScreen");
  };

  const openRegist = (name, bookings) => {
    navigation.navigate("ResultsScreen", {
      bookings,
      name,
    });
  };

  const renderItem = ({ item }) => {
    return (
      <Card
        item={item}
        onPress={() => openRegist(item.name, item.bookings)}
      ></Card>
    );
  };

  useEffect(() => {
    if (!URL) return;
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL + "\bookings");
        const data = await response.json();
        setData(data);
      } catch (error) {
        setData(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header navigate={navigate} buttonText={"Menu Inicial"}></Header>
      <View style={styles.bodyContainer}>
        <Text style={styles.textHeader}>Histórico</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textHeader: {
    marginVertical: 15,
    fontFamily: "Roboto_700Bold",
    alignSelf: "center",
    fontSize: 24,
    color: "#486B73",
    textTransform: "uppercase",
  },
  cardContainer: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#D3EEF1",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#9FD2D7",
    flex: 1,
  },
  cardText: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    color: "#486B73",
  },
});

export default Dashboard;
