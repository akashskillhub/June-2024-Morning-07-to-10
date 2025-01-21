import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/admin`,
        credentials: "include"
    }),
    tagTypes: ["info"],
    endpoints: (builder) => {
        return {
            adminGetResturant: builder.query({
                query: () => {
                    return {
                        url: "/get-resturant",
                        method: "GET"
                    }
                },
                providesTags: ["info"]
            }),

            adminGetCustomer: builder.query({
                query: () => {
                    return {
                        url: "/get-customer",
                        method: "GET"
                    }
                },
                providesTags: ["info"]
            }),

            adminGetOrder: builder.query({
                query: pagiData => {
                    return {
                        url: "/get-order",
                        method: "GET",
                        params: pagiData
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["info"]
            }),


        }
    }
})

export const {
    useLazyAdminGetCustomerQuery,
    useLazyAdminGetResturantQuery,
    useLazyAdminGetOrderQuery

} = adminApi