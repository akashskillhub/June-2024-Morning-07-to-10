import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => {
        return {
            initiateOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: "/api/order/initiate-payment",
                        method: "POST",
                        body: orderData
                    }
                },
            }),
            placeOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: "/api/order/place-order",
                        method: "POST",
                        body: orderData
                    }
                },
            }),

        }
    }
})

export const { useInitiateOrderMutation, usePlaceOrderMutation } = orderApi
