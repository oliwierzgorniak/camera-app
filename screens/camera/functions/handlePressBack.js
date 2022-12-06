import getAndSetPhotos from "../../gallery/functions/getAndSetPhotos";

export default function handlePressBack(goBack) {
  getAndSetPhotos();
  goBack();
  return true;
}
