import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "todoApi",
    //                                          http://localhost:5000/api
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        credentials: "include"
    }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getTodos: builder.query({
                query: () => {
                    return {
                        url: "/todo/fetch",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/todo/create",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/todo/update/" + todoData._id,
                        method: "PUT",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteTodo: builder.mutation({
                query: _id => {
                    return {
                        url: "/todo/delete/" + _id,
                        method: "DELETE",
                        // body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),

        }
    }
})

export const {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetTodosQuery,
    useLazyGetTodosQuery,
    useUpdateTodoMutation
} = todoApi
