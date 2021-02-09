import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import styles from "../Style/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase/firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isUserLoggedIn = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return isUserLoggedIn;
  }, []);
  const signIn = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="dark" />
      <Image
        source={{
          uri:
            "https://sdk.bitmoji.com/render/panel/abc63329-c482-413d-adb0-1119243878a9-b93dde4d-c80d-4c9f-a0af-70cbc082671e-v1.png?transparent=1&palette=1",
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          style={{ marginTop: 20 }}
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.actualBtn} onPress={signIn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.outlineBtn}
        onPress={signIn}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.outlineBtnText}>Register</Text>
      </TouchableOpacity>
      <View style={{ height: 20 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
