import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const accessKey = "pcvkVuOYDk8gORTWlURL-4AHNaVgJ2wo3sJCumo6Zro"

export const photosApi = createApi({
    reducerPath: "photosApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.unsplash.com"
    }),
    endpoints: (builder) => ({
        getPhotosByName: builder.mutation<any, { searchStr: string, page: number }>({
            query: (searcher) => `search/photos/?page=${searcher.page}&query=${searcher.searchStr}&client_id=${accessKey}`,
        }),
        getPhotoById: builder.mutation<any, string>({
            query: (id) =>  `photos/${id}?client_id=${accessKey}`
        })
    })
})

export const {
    useGetPhotosByNameMutation,
    useGetPhotoByIdMutation
} = photosApi
