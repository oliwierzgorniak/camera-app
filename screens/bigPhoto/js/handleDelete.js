import * as MediaLibrary from "expo-media-library";
import { removePhoto } from "../../../redux/reducers/photosReducer";
import store from "../../../redux/store";

export default async function handleDelete(id, goBack) {
  await MediaLibrary.deleteAssetsAsync([id]);

  store.dispatch(removePhoto(id));
}
