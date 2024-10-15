import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const customerApi = createApi({
    reducerPath: "customerApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => {
        return {
            placeOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: "/orders",
                        method: "POST",
                        body: orderData
                    }
                },
            }),

        }
    }
})

export const { usePlaceOrderMutation } = customerApi
