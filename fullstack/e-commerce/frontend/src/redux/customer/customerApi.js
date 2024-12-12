import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const customerApi = createApi({
    reducerPath: "customerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/customer`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            palceOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: "/place-order",
                        method: "POST",
                        body: orderData
                    }
                },
            }),
            fetchOrders: builder.query({
                query: () => {
                    return {
                        url: "/order-history",
                        method: "GET",
                    }
                },
            }),

        }
    }
})

export const { usePalceOrderMutation, useFetchOrdersQuery } = customerApi
