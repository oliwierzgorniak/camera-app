import { StyleSheet } from "react-native";

const colors = {
  red: "#ff3b30",
  blue: "#007aff",
  green: "#34c759",
  background: "#fff",
};

const buttonContainer = {
  fontSize: 17,
  borderRadius: 7,
  backgroundColor: colors.green,
  width: 130,
  paddingVertical: 14,
  marginRight: 15,
};

const buttonText = {
  textAlign: "center",
  color: "#ffffff",
  fontWeight: "500",
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  topButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  saveButtonContainer: buttonContainer,
  saveButtonText: buttonText,
  deleteButtonContainer: {
    ...buttonContainer,
    borderColor: colors.red,
    borderWidth: 1,
    backgroundColor: "transparent",
    marginRight: 20,
  },
  deleteButtonText: { ...buttonText, color: colors.red },
  showButtonContainer: {
    backgroundColor: colors.blue,
    paddingTop: 16,
    paddingBottom: 21,
    width: "100%",
  },
  showButtonText: buttonText,
  list: {
    width: "100%",
  },
});
