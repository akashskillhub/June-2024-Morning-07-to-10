import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/auth`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            mobileEmployeeLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/employee/login",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            mobileEmployeeLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/employee/logout",
                        method: "POST",
                    }
                },
            }),

        }
    }
})

export const {
    useMobileEmployeeLoginMutation,
    useMobileEmployeeLogoutMutation
} = authApi