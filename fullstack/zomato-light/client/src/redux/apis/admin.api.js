import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/admin`,
        credentials: "include"
    }),
    tagTypes: ["info"],
    endpoints: (builder) => {
        return {
            adminGetResturant: builder.query({
                query: () => {
                    return {
                        url: "/get-resturant",
                        method: "GET"
                    }
                },
                providesTags: ["info"]
            }),

            adminGetCustomer: builder.query({
                query: () => {
                    return {
                        url: "/get-customer",
                        method: "GET"
                    }
                },
                providesTags: ["info"]
            }),

            adminGetOrder: builder.query({
                query: pagiData => {
                    return {
                        url: "/get-order",
                        method: "GET",
                        params: pagiData
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["info"]
            }),
            riderRegisterAdmin: builder.mutation({
                query: riderData => {
                    return {
                        url: "/register-rider",
                        method: "POST",
                        body: riderData.fd
                    }
                },
                invalidatesTags: ["rider"]
            }),

            adminGetRider: builder.query({
                query: riderPagiData => {
                    return {
                        url: "/get-rider",
                        method: "GET",
                        params: riderPagiData
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["rider"]
            }),

            adminUpdateRider: builder.mutation({
                query: riderData => {
                    return {
                        url: "/update-Rider/" + riderData._id,
                        method: "PUT",
                        body: riderData.fd
                    }
                },
                invalidatesTags: ["rider"]
            }),

        }
    }
})

export const {
    useLazyAdminGetCustomerQuery,
    useLazyAdminGetResturantQuery,
    useLazyAdminGetOrderQuery,

    useRiderRegisterAdminMutation,
    useLazyAdminGetRiderQuery,
    useAdminUpdateRiderMutation
} = adminApi