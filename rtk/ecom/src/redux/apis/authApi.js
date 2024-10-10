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
                transformResponse: data => {
                    if (data.length > 0) {
                        localStorage.setItem("admin", JSON.stringify(data[0]))
                        return data[0]
                    } else {
                        throw new Error("Invalid Credentials")
                    }
                }
            }),
            loginCustomer: builder.query({
                query: (userData) => {
                    return {
                        url: "/customers",
                        method: "GET",
                        params: userData
                    }
                },
                transformResponse: data => {
                    if (data.length > 0) {
                        localStorage.setItem("customer", JSON.stringify(data[0]))
                        return data[0]
                    } else {
                        throw new Error("Invalid Credentials")
                    }
                }
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
    useLazyLoginCustomerQuery,
    useRegisterCustomerMutation,
    useLazyLoginAdminQuery
} = authApi
