import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IResponse} from "../types";

interface IInitialState {
    photos: IResponse[],
    searchQuery: string
}

const initialState: IInitialState = {
    photos: [],
    searchQuery: ''
}

const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        setPhotos(state, action: PayloadAction<IResponse[]>) {
            if(!action.payload.length) {
                state.photos = []
            } else {
                state.photos = [...state.photos, ...action.payload]
            }
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload
        }
    }
})

export const {setPhotos, setSearchQuery} = photosSlice.actions
export default photosSlice.reducer