import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["product"],
    endpoints: (builder) => {
        return {
            getAllProducts: builder.query({
                query: () => {
                    return {
                        url: "/products",
                        method: "GET"
                    }
                },
                providesTags: ["product"]
            }),
            addProduct: builder.mutation({
                query: productData => {
                    return {
                        url: "/products",
                        method: "POST",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            updateProduct: builder.mutation({
                query: productData => {
                    return {
                        url: "/products/" + productData.id,
                        method: "PATCH",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            deleteProduct: builder.mutation({
                query: id => {
                    return {
                        url: "/products/" + id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["product"]
            }),
        }
    }
})

export const {
    useAddProductMutation,
    useDeleteProductMutation,
    useGetAllProductsQuery,
    useUpdateProductMutation
} = adminApi
