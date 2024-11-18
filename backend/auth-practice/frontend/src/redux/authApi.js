import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth",
        credentials: "include"
    }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            signup: builder.mutation({
                query: userData => {
                    return {
                        url: "/user-register",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            signin: builder.mutation({
                query: userData => {
                    return {
                        url: "/user-login",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            signout: builder.mutation({
                query: userData => {
                    return {
                        url: "/user-logout",
                        method: "POST",
                        // body: userData
                    }
                },
            }),

        }
    }
})

export const { useSigninMutation, useSignoutMutation, useSignupMutation } = authApi
