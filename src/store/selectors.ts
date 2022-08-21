import {RootState} from "./store";

export const selectPhotos = (state: RootState) => state.photos.photos
export const searchString = (state: RootState) => state.photos.searchQuery