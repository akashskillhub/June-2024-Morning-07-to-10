import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => {
        return {
            loginAdmin: builder.query({
                query: (userData) => {
                    return {
                        url: "/admin",
                        method: "GET",
                        params: userData
                    }
                },
            }),
            loginCustomer: builder.query({
                query: (userData) => {
                    return {
                        url: "/customers",
                        method: "GET",
                        params: userData
                    }
                },
            }),
            registerCustomer: builder.mutation({
                query: userData => {
                    return {
                        url: "/customers",
                        method: "POST",
                        body: userData
                    }
                },
            }),

        }
    }
})

export const {
    useLoginAdminQuery,
    useLoginCustomerQuery,
    useRegisterCustomerMutation
} = authApi
