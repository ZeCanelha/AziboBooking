import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
  Platform,
} from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const logginFailed = () => {
    ToastAndroid.show("Autenticação falhada!", ToastAndroid.SHORT);
  };

  const login = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.status === 200) {
        setLoggedIn(true);
        navigation.navigate("AdminScreen");
      } else {
        // Pop toast
        logginFailed();
        setLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
      logginFailed();
    } finally {
      setLoading(false);
      setLoggedIn(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../../assets/azibo_bg.jpeg")}
        resizeMode="cover"
      >
        <View style={styles.loginContainer}>
          <TextInput
            placeholder={"Username"}
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
          ></TextInput>
          <TextInput
            placeholder={"Password"}
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={(pass) => setPassword(pass)}
          ></TextInput>
          {isLoading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <TouchableOpacity style={styles.button} onPress={login}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          )}
          {/* 
          {Platform.OS && loggedIn ? null : (
            <Text
              style={{ fontWeight: "bold", marginVertical: 10, color: "red" }}
            >
              Autenticação falhada!
            </Text>
          )} */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loginContainer: {
    width: "90%",
    justifyContent: "space-evenly",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#486B73",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    marginBottom: 10,
    color: "#486B73",
    backgroundColor: "#FFF",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6cafb5",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#fff",
    textTransform: "uppercase",
  },
});

export default Login;
