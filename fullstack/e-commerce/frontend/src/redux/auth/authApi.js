import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            adminLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("ecom-admin", JSON.stringify(data.result))
                    return data.result
                }
            }),
            adminLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin/logout",
                        method: "POST",
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("ecom-admin")
                    return data
                }
            }),

            customerRegister: builder.mutation({
                query: userData => {
                    return {
                        url: "/customer/register",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            customerLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/customer/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("ecom-user", JSON.stringify(data.result))
                    return data.result
                }
            }),
            customerLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/customer/logout",
                        method: "POST",
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("ecom-user")
                    return data
                }
            }),





        }
    }
})

export const {
    useAdminLoginMutation,
    useAdminLogoutMutation,
    useCustomerLoginMutation,
    useCustomerLogoutMutation,
    useCustomerRegisterMutation
} = authApi
