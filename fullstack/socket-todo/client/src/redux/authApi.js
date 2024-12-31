// adminLogin
// adminLogout
// employeeRegister
// employeeLogin
// employeeLogout

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
                    localStorage.setItem("todo-admin", JSON.stringify(data.result))
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
                    localStorage.removeItem("todo-admin")
                    return data
                }
            }),

            employeeregister: builder.mutation({
                query: userData => {
                    return {
                        url: "/employee/register",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            employeeLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/employee/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("todo-employee", JSON.stringify(data.result))
                    return data.result
                }
            }),
            employeeLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/employee/logout",
                        method: "POST",
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("todo-employee")
                    return data
                }
            }),

        }
    }
})

export const {
    useAdminLoginMutation,
    useAdminLogoutMutation,

    useEmployeeregisterMutation,
    useEmployeeLoginMutation,
    useEmployeeLogoutMutation
} = authApi
