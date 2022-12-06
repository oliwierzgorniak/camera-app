import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

import {
  addSelectedPhoto,
  removeSelectedPhoto,
} from "../../redux/reducers/selectedPhotosReducer";
import store from "../../redux/store";
import { useState } from "react";

export default function ListItem({ photo, navigation, numColumns }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      style={{ ...styles.container, maxWidth: numColumns > 1 ? "20%" : null }}
      onPress={() =>
        navigation.navigate("Photo", {
          photo: photo,
          goBack: navigation.goBack,
        })
      }
      onLongPress={() => {
        if (isSelected) {
          store.dispatch(removeSelectedPhoto(photo.id));
        } else {
          store.dispatch(addSelectedPhoto(photo));
        }
        setIsSelected(!isSelected);
      }}
    >
      <Image source={{ uri: photo.uri }} style={styles.image} />
      <Text style={styles.text}>{photo.id}</Text>
      {isSelected && (
        <Image
          style={styles.selectedIndicatorImage}
          source={require("../../assets/check.png")}
        />
      )}
    </TouchableOpacity>
  );
}
