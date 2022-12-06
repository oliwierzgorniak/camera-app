import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";

import styles from "./styles";

import switchCamera from "./functions/switchCamera";
import takePhoto from "./functions/takePhoto";
import handlePressBack from "./functions/handlePressBack";

export default ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null);

  useEffect(() => {
    async function setPermission() {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    }
    setPermission();

    BackHandler.addEventListener("hardwareBackPress", () =>
      handlePressBack(navigation.goBack)
    );
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handlePressBack);
    };
  }, []);

  if (hasPermission === null) {
    return <View />;
  } else if (hasPermission === false) {
    return <Text>No access to the camera</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Camera ref={camera} style={styles.camera} type={type}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => switchCamera(type, setType)}>
              <Text>Rotate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => takePhoto(camera)}>
              <Text>Take photo</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
};
