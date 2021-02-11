import React, { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const ChatScreen = ({ navigation, route }) => {
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
  }, [navigation]);

  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  );
};

export default ChatScreen;
