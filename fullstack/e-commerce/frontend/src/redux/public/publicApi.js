import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const publicApi = createApi({
    reducerPath: "publicApi",

    baseQuery: fetchBaseQuery({
        //                                            👇from backend > index.js
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/public`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            getPublicProduct: builder.query({
                query: () => {
                    return {
                        url: "/products", //👈 from public.route.js
                        method: "GET"
                    }
                },
            }),
            getPublicProductDetails: builder.query({
                query: (arg) => {
                    return {
                        url: `/product-details/${arg}`, //👈 from public.route.js
                        method: "GET"
                    }
                },
                transformResponse: data => data.result
            })

        }
    }
})

export const {
    useGetPublicProductQuery,
    useGetPublicProductDetailsQuery
} = publicApi
