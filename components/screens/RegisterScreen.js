import React, { useLayoutEffect, useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import styles from "../Style/styles";
import { Button, Input, Image } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase/firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerBackTitle: "Back",
  //   });
  // }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.update({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://sdk.bitmoji.com/render/panel/abc63329-c482-413d-adb0-1119243878a9-b93dde4d-c80d-4c9f-a0af-70cbc082671e-v1.png?transparent=1&palette=1",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.h1Text}>Create a account</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="E-mail address"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile picture URL (optional)"
          type="url"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <TouchableOpacity style={styles.actualBtn} onPress={register}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            color: "blue",
            marginTop: 50,
          }}
        >
          Already have an account?
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
