import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { loadAsync } from "expo-font";
import styles from "./styles";
import { useEffect, useState } from "react";

export default ({ navigation }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    const loadAndManageFont = async () => {
      await loadAsync({
        karla: require("../../assets/fonts/Karla/karla.ttf"),
      });
      setIsFontLoaded(true);
    };
    loadAndManageFont();
  }, []);

  return isFontLoaded ? (
    <TouchableOpacity
      onPress={() => navigation.navigate("Gallery")}
      style={styles.container}
    >
      <Text style={styles.title}>CameraApp</Text>
      <Image style={styles.image} source={require("../../assets/camera.png")} />
    </TouchableOpacity>
  ) : (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator />
    </View>
  );
};
