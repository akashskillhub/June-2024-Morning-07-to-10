import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL, credentials: "include" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/admin/users",
                        method: "GET"
                    }
                },
            }),
            getDummy: builder.query({
                query: () => {
                    return {
                        url: "/admin/dummy",
                        method: "GET"
                    }
                },
            }),
        }
    }
})

export const { useGetDummyQuery, useGetUsersQuery } = adminApi
