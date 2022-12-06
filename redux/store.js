import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./reducers/photosReducer";
import selectedPhotosReducer from "./reducers/selectedPhotosReducer";

export default configureStore({
  reducer: {
    photos: photosReducer,
    selectedPhotos: selectedPhotosReducer,
  },
});
