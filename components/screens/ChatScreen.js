import React, { useLayoutEffect, useState } from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { View, Text } from "react-native";
import { Avatar, Input } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import styles from "../Style/styles";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";
import { auth, db } from "../firebase/firebase";
import * as firebase from "firebase";
import { SnapshotViewIOSComponent } from "react-native";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  const sendMessage = () => {
    Keyboard.dismiss();

    db.collection("chats").doc(route.params.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    });

    setInput("");
  };

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessage(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return unsubscribe;
  }, [route]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerTitleAlign: "left",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri:
                message[0]?.data.photoURL ||
                "https://sdk.bitmoji.com/render/panel/abc63329-c482-413d-adb0-1119243878a9-b93dde4d-c80d-4c9f-a0af-70cbc082671e-v1.png?transparent=1&palette=1",
            }}
          />
          <Text style={{ color: "black", marginLeft: 10, fontWeight: "700" }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={22} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, message]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="inverted" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        style={styles.containerChat}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
              {message.map(({ id, data }) =>
                data.email === auth.currentUser.email ? (
                  <View key={id} style={styles.reciever}>
                    <Avatar
                      //web
                      containerStyle={{
                        position: "absolute",
                        bottom: -15,
                        right: -5,
                      }}
                      //regular
                      position="absolute"
                      bottom={-15}
                      right={-5}
                      rounded
                      size={25}
                      source={{
                        uri: data.photoURL,
                      }}
                    />
                    <Text style={styles.revieverText}>{data.message}</Text>
                  </View>
                ) : (
                  <View key={id} style={styles.sender}>
                    <Avatar
                      //web
                      containerStyle={{
                        position: "absolute",
                        bottom: -15,
                        right: -5,
                      }}
                      //regular
                      position="absolute"
                      bottom={-15}
                      right={-5}
                      rounded
                      size={25}
                      source={{
                        uri: data.photoURL,
                      }}
                    />
                    <Text style={styles.senderText}>{data.message}</Text>
                    <Text style={styles.senderName}>{data.displayName}</Text>
                  </View>
                )
              )}
            </ScrollView>
            <View style={styles.footerChat}>
              <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                style={styles.chatInputField}
                placeholder="Enter a message"
                onSubmitEditing={sendMessage}
              />
              <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                <Ionicons name="send" size={22} color="black" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
