import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f7f7f7",
  },
  containerAddChat: {
    height: "100%",
    padding: 30,
    backgroundColor: "white",
  },
  containerChat: {
    flex: 1,
  },
  footerChat: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  chatInputField: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
  revieverText: {
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
  },
  senderText: {
    color: "white",
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 15,
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: "white",
  },
  reciever: {
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  sender: {
    padding: 15,
    backgroundColor: "#2B68E6",
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
  },
  containerFull: {
    height: "100%",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 10,
  },
  actualBtn: {
    width: 300,
    height: 50,
    backgroundColor: "#191f1b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  outlineBtn: {
    width: 300,
    height: 50,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
    borderRadius: 8,
  },
  outlineBtnText: {
    color: "#191f1b",
  },
  text: {
    color: "white",
  },
  h1Text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default styles;
