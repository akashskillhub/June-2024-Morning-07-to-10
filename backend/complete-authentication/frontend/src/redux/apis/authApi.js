import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    //                                      http://localhost:5000/api
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        credentials: "include"
    }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            singup: builder.mutation({
                query: userData => {
                    return {
                        url: "/auth/signup",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            singin: builder.mutation({
                query: userData => {
                    return {
                        url: "/auth/signin",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                }
            }),
            singout: builder.mutation({
                query: userData => {
                    return {
                        url: "/auth/signout",
                        method: "POST",
                        // body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    return data
                }
            }),

        }
    }
})

export const { useSinginMutation, useSingupMutation, useSingoutMutation } = authApi
