import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const publicApi = createApi({
    reducerPath: "publicApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => {
        return {
            getPublicProducts: builder.query({
                query: () => {
                    return {
                        url: "/products",
                        method: "GET",
                        params: { isAvailable: true }
                    }
                },
            }),
            getPublicProductDetails: builder.query({
                query: (pid) => {
                    return {
                        url: "/products",
                        method: "GET",
                        params: { id: pid }
                    }
                },
                transformResponse: data => data[0]
            }),


        }
    }
})

export const { useGetPublicProductsQuery, useGetPublicProductDetailsQuery } = publicApi
