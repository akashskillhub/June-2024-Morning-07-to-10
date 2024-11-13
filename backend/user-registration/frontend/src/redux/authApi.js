import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/auth" }),
    tagTypes: [],
    endpoints: (builder) => {
        return {
            signupUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/singup",
                        method: "POST",
                        body: userData
                    }
                },
            }),

        }
    }
})

export const { useSignupUserMutation } = authApi
