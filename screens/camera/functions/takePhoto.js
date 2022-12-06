import * as MediaLibrary from "expo-media-library";
import { ToastAndroid } from "react-native";

export default async function takePhoto(camera) {
  if (camera) {
    const photo = await camera.current.takePictureAsync();
    await MediaLibrary.createAssetAsync(photo.uri);
    ToastAndroid.showWithGravity(
      "Photo was taken",
      ToastAndroid.SHORT,
      ToastAndroid.TOP
    );
  }
}
