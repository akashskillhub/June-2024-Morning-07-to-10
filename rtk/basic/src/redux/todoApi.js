import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["note"],
    endpoints: builder => {
        return {
            addTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/notes",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["note"]
            }),
            updateTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/notes/" + todoData.id,
                        method: "PATCH",
                        body: todoData
                    }
                },
                invalidatesTags: ["note"]
            }),
            deleteTodo: builder.mutation({
                query: id => {
                    return {
                        url: "/notes/" + id,
                        method: "DELETE",
                        // body: todoData
                    }
                },
                invalidatesTags: ["note"]
            }),
            getTodo: builder.query({
                query: todoData => {
                    return {
                        url: "/notes",
                        method: "GET",
                        // body: todoData
                    }
                },
                providesTags: ["note"]
            })
        }
    }
})

export const {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useUpdateTodoMutation,
    useGetTodoQuery,
} = todoApi
