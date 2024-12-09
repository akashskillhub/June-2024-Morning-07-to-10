import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",

    baseQuery: fetchBaseQuery({
        //                                            👇from backend > index.js
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/admin`,
        credentials: "include"
    }),
    tagTypes: ["product"],
    endpoints: (builder) => {
        return {
            getAdminProduct: builder.query({
                query: () => {
                    return {
                        url: "/product", //👈 from admin.route.js
                        method: "GET"
                    }
                },
                providesTags: ["product"]
            }),
            addAdminProduct: builder.mutation({
                query: productData => {
                    return {
                        url: "/product/add",
                        method: "POST",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            updateAdminProduct: builder.mutation({
                query: productData => {
                    return {
                        url: "/product/update/" + productData._id,
                        method: "PUT",
                        body: productData.fd
                    }
                },
                invalidatesTags: ["product"]
            }),
            deleteAdminProduct: builder.mutation({
                query: _id => {
                    return {
                        url: "/product/delete/" + _id,
                        method: "DELETE",
                        // body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),

        }
    }
})

export const {
    useAddAdminProductMutation,
    useDeleteAdminProductMutation,
    useGetAdminProductQuery,
    useUpdateAdminProductMutation
} = adminApi
