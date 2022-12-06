import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    value: [],
  },
  reducers: {
    setPhotos: (state, action) => {
      state.value = action.payload;
    },
    removePhoto: {
      reducer(state, action) {
        const { photoId } = action.payload;
        const newPhotos = state.value.filter((p) => p.id !== photoId);
        state.value = newPhotos;
      },
      prepare(photoId) {
        return {
          payload: {
            id: nanoid(),
            photoId,
          },
        };
      },
    },
  },
});

export const { setPhotos, removePhoto } = photosSlice.actions;
export default photosSlice.reducer;
