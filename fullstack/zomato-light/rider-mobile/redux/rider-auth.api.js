import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const riderAuthApi = createApi({
    reducerPath: "riderAuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth`,
        credentials: "include"
    }),
    tagTypes:["rider"],
    endpoints: (builder) => {
        return {
            mobileRiderLogin: builder.mutation({
                query: riderData => {
                    return {
                        url: "/login-rider",
                        method: "POST",
                        body: riderData
                    }
                },
                transformResponse: data => data.result

            }),

            mobileRiderLogout: builder.mutation({
                query: () => {
                    return {
                        url: "/logout-rider",
                        method: "POST",
                    }
                },
            }),


        }
    }
})

export const {
   useMobileRiderLoginMutation,
   useMobileRiderLogoutMutation
} = riderAuthApi
