import { TouchableOpacity, View, Image, Text } from "react-native";
import handleShare from "./js/handleShare";
import handleDelete from "./js/handleDelete";
import styles from "./styles";

export default ({ route }) => {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: photo.uri }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => handleShare(photo.uri)}>
          <Text>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(photo.uri)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
