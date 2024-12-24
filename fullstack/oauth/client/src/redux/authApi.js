import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
    endpoints: (builder) => {
        return {
            oAuth: builder.mutation({
                query: userData => {
                    return {
                        url: "/api/auth/continueWithGoogle",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("oauth", JSON.stringify(data.result))
                    return data.result
                }
            }),
            logout: builder.mutation({
                query: userData => {
                    return {
                        url: "/api/auth/logout",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("oauth")
                    return data
                }
            }),

        }
    }
})

export const { useLogoutMutation, useOAuthMutation } = authApi
