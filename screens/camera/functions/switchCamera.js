import { Camera } from "expo-camera";

export default function switchCamera(type, setType) {
  const newType =
    type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back;

  setType(newType);
}
