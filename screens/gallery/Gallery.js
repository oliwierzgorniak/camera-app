import { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as MediaLibrary from "expo-media-library";

import styles from "./styles";

import ListItem from "../../components/listItem/ListItem";

import getAndSetPhotos from "./functions/getAndSetPhotos";
import switchLayout from "./functions/switchLayout";

export default ({ navigation }) => {
  const [numColumns, setNumColumns] = useState(5);
  const photos = useSelector((state) => state.photos.value);
  const selectedPhotos = useSelector((state) => state.selectedPhotos.value);
  const dispatch = useDispatch();

  useEffect(() => {
    getAndSetPhotos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity
          onPress={() => switchLayout(numColumns, setNumColumns)}
        >
          <Text>Layout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Camera");
          }}
        >
          <Text>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            await MediaLibrary.deleteAssetsAsync(selectedPhotos);
            getAndSetPhotos();
          }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        key={numColumns}
        numColumns={numColumns}
        data={photos}
        renderItem={({ item }) => (
          <ListItem
            photo={item}
            navigation={navigation}
            numColumns={numColumns}
          />
        )}
        style={styles.list}
      />
    </View>
  );
};
