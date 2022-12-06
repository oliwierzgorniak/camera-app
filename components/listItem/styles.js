import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { aspectRatio: 1 },
  text: {
    position: "absolute",
    bottom: 2,
    right: 2,
    color: "#fff",
  },
  selectedIndicatorImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
