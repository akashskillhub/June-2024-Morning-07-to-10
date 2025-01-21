import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const riderAuthApi = createApi({
    reducerPath: "riderAuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            mobileRiderLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-rider",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => data.result
            }),
            mobileRiderLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-rider",
                        method: "POST",
                    }
                },
            }),
        }
    }
})

export const {
    useMobileRiderLoginMutation,
    useMobileRiderLogoutMutation
} = riderAuthApi
