import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath: "blogApi",
    //                                                           👇 from backend index
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/articles" }),
    tagTypes: ["blog"],
    endpoints: (builder) => {
        return {
            getBlogs: builder.query({
                query: () => {
                    return {
                        //     👇 from backend blog.route.js
                        url: "/fetch",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation({
                query: blogData => {
                    return {
                        //     👇 from backend blog.route.js
                        url: "/create",
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation({
                query: blogData => {
                    return {
                        //     👇 from backend blog.route.js
                        url: "/modify/" + blogData._id,
                        method: "PUT",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deletBlog: builder.mutation({
                query: blogId => {
                    return {
                        //     👇 from backend blog.route.js
                        url: "/remove/" + blogId,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["blog"]
            }),

        }
    }
})

export const {
    useGetBlogsQuery,
    useAddBlogMutation,
    useUpdateBlogMutation,
    useDeletBlogMutation,
} = blogApi
