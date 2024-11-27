import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


// GET      http://localhost:5000/api/blogs/fetch
// POST     http://localhost:5000/api/blogs/create
// PUT      http://localhost:5000/api/blogs/update
// DELETE   http://localhost:5000/api/blogs/delete

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["blog"],
    endpoints: (builder) => {
        return {
            getBlogs: builder.query({
                query: () => {
                    return {
                        url: "/api/blogs/fetch",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/api/blogs/create",
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/api/blogs/update/" + blogData._id,
                        method: "PUT",
                        body: blogData.fd
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deleteBlog: builder.mutation({
                query: _id => {
                    return {
                        url: "/api/blogs/delete/" + _id,
                        method: "DELETE",
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
    useGetBlogsQuery,
    useUpdateBlogMutation
} = blogApi
