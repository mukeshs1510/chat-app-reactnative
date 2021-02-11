import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import LoginScreen from "./components/screens/LoginScreen";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import RegisterScreen from "./components/screens/RegisterScreen";
import HomeScreen from "./components/screens/HomeScreen";
import AddChat from "./components/screens/AddChat";
import ChatScreen from "./components/screens/ChatScreen";

const Stack = createStackNavigator();

const globleScreebOption = {
  headerStyle: { backgroundColor: "#141414" },
  headerTitleStyle: { color: "#fff" },
  headerTintColor: "#fff",
  headerTitleAlign: "center",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globleScreebOption}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChat} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
