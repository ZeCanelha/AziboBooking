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
  Image,
} from "react-native";

import { baseURL } from "../../config/urls";

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
      const response = await fetch(baseURL + "/user/login", {
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
          <View style={styles.iconStlye}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require("../../assets/TAIcon.png")}
            ></Image>
          </View>

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
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
  },
  iconStlye: {
    alignSelf: "center",
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#486B73",
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    marginBottom: 10,
    color: "#486B73",
    backgroundColor: "#FFF",
    width: "90%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6cafb5",
    padding: 15,
    borderRadius: 5,
    width: "90%",
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#fff",
    textTransform: "uppercase",
  },
});

export default Login;
