import * as MediaLibrary from "expo-media-library";
import { setPhotos } from "../../../redux/reducers/photosReducer";
import store from "../../../redux/store";

export default async function getAndSetPhotos() {
  await MediaLibrary.getPermissionsAsync();
  const obj = await MediaLibrary.getAssetsAsync({
    first: 100,
    createdAfter: new Date("December 1, 2022 03:24:00"),
    mediaType: "photo",
  });
  const photos = obj.assets;

  store.dispatch(setPhotos(photos));
}
