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
                        body: riderData
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

            adminUpdateRiderAccount: builder.mutation({
                query: riderData => {
                    return {
                        url: "/update-rider-account/" + riderData._id,
                        method: "PUT",
                        body: riderData
                    }
                },
                invalidatesTags: ["rider"]
            }),

            adminGetActiveRider: builder.query({
                query: () => {
                    return {
                        url: "/get-active-rider",
                        method: "GET",
                    }
                },
                providesTags: ["assign-order"]
            }),

            adminAssignRider: builder.mutation({
                query: orderData => {
                    return {
                        url: "/assign-rider/" + orderData._id,
                        method: "PUT",
                        body: orderData
                    }
                },
                invalidatesTags: ["assign-order"]
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
    useAdminUpdateRiderMutation,
    useAdminUpdateRiderAccountMutation,
    useAdminGetRiderQuery,
    useAdminGetActiveRiderQuery,

    useAdminAssignRiderMutation
} = adminApi