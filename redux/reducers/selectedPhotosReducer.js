import { createSlice } from "@reduxjs/toolkit";

const selectedPhotosSlice = createSlice({
  name: "slectedPhotos",
  initialState: {
    value: [],
  },
  reducers: {
    setSelectedPhotos: (state, action) => {
      const newPhotos = action.payload;
      state.value = newPhotos;
    },
    addSelectedPhoto: (state, action) => {
      const photo = action.payload;
      state.value.push(photo);
    },
    removeSelectedPhoto: (state, action) => {
      const photoId = action.payload;
      const newPhotos = state.value.filter((p) => p.id != photoId);
      state.value = newPhotos;
    },
  },
});

export const { setSelectedPhotos, addSelectedPhoto, removeSelectedPhoto } =
  selectedPhotosSlice.actions;
export default selectedPhotosSlice.reducer;
