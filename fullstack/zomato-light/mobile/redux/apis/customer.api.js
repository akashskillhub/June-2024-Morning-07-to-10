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

        }
    }
})

export const {
    useMobileCustomerUpdateInfoMutation,
    useMobileGetLocationMutation
} = customerApi
