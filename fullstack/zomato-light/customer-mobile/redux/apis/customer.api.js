import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const customerApi = createApi({
    reducerPath: "customerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/customer`,
        credentials: "include"
    }),
    tagTypes: ["info"],
    endpoints: (builder) => {
        return {
            mobileGetLocation: builder.mutation({
                query: locData => {
                    return {
                        url: "/get-location",
                        method: "POST",
                        body: locData
                    }
                },
                transformResponse: data => data.result
                // providesTags: ["info"]
            }),
            mobileCustomerUpdateInfo: builder.mutation({
                query: userData => {
                    return {
                        url: "/update-info",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => data.result
                // invalidatesTags: ["info"]
            }),
            mobileGetResturant: builder.query({
                query: userData => {
                    return {
                        url: "/get-resturant",
                        method: "GET",
                    }
                },
                transformResponse: data => data.result
            }),
            mobileGetResturantMenu: builder.query({
                query: rid => {
                    return {
                        url: "/get-resturant-menu/" + rid,
                        method: "GET",
                    }
                },
                transformResponse: data => data.result
            }),
            mobileGetOrders: builder.query({
                query: () => {
                    return {
                        url: "/get-orders",
                        method: "GET",
                    }
                },
                transformResponse: data => data.result
            }),
            mobileGetOrderHistory: builder.query({
                query: () => {
                    return {
                        url: "/get-order-history",
                        method: "GET",
                    }
                },
                transformResponse: data => data.result
            }),
            mobilePlaceOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: "/place-order",
                        method: "POST",
                        body: orderData
                    }
                },
            }),

        }
    }
})

export const {
    useMobileCustomerUpdateInfoMutation,
    useMobileGetLocationMutation,
    useMobileGetResturantMenuQuery,
    useMobileGetResturantQuery,
    useLazyMobileGetResturantQuery,
    useLazyMobileGetResturantMenuQuery,
    useLazyMobileGetOrdersQuery,
    useMobilePlaceOrderMutation,
    useLazyMobileGetOrderHistoryQuery
} = customerApi
