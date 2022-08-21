import { configureStore } from '@reduxjs/toolkit';
import photosSlice from './photos/photos-slice';
import {photosApi} from "./photos/photos-api-slice";


export const store = configureStore({
    reducer: {
        [photosApi.reducerPath]: photosApi.reducer,
        photos: photosSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(photosApi.middleware)

});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch