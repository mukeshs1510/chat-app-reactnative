import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f7f7f7",
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
