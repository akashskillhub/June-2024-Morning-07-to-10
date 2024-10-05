import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["blog"],
    endpoints: (builder) => {
        return {
            getBlog: builder.query({
                query: () => {
                    return {
                        url: "/articles",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/articles",
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/articles/" + blogData.id,
                        method: "PATCH",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deleteBlog: builder.mutation({
                query: id => {
                    return {
                        url: "/articles/" + id,
                        method: "DELETE",
                        // body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),

        }
    }
})

export const {
    useAddBlogMutation,
    useDeleteBlogMutation,
    useGetBlogQuery,
    useUpdateBlogMutation
} = blogApi
