import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getTodos: builder.query({
                query: () => {
                    return {
                        url: "/notes",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            addTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/notes/create",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            udpateTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/notes/update/" + todoData._id,
                        method: "PUT",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteTodo: builder.mutation({
                query: _id => {
                    return {
                        url: "/notes/delete/" + _id,
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
    useUdpateTodoMutation
} = todoApi
