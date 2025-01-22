import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            mobileRegisterCustomer: builder.mutation({
                query: userData => {
                    return {
                        url: "/register-customer",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            mobileLoginCustomer: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-customer",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            mobileCustomerVerifyOTP: builder.mutation({
                query: userData => {
                    return {
                        url: "/verify-customer-otp",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => data.result
            }),
            mobileCustomerLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-customer",
                        method: "POST",
                    }
                },
            }),
        }
    }
})

export const {
    useMobileCustomerLogoutMutation,
    useMobileCustomerVerifyOTPMutation,
    useMobileLoginCustomerMutation,
    useMobileRegisterCustomerMutation
} = authApi
