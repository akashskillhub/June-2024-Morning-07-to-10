import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const riderApi = createApi({
    reducerPath: "riderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/rider`,
        credentials: "include"
    }),
    tagTypes: ["order"],
    endpoints: (builder) => {
        return {
            riderGetOrders: builder.query({
                query: () => {
                    return {
                        url: "/get-orders",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["order"]
            }),
            riderUpdateOrderStatus: builder.mutation({
                query: orderData => {
                    return {
                        url: "/update-order-status/" + orderData._id,
                        method: "PUT",
                        body: orderData
                    }
                },
                invalidatesTags: ["order"]
            }),


        }
    }
})

export const { useLazyRiderGetOrdersQuery, useRiderUpdateOrderStatusMutation } = riderApi
