import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/admin`, credentials: "include" }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getAdminTodos: builder.query({
                query: () => {
                    return {
                        url: "/read/todos",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            createAdminTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/create/todo",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            updateAdminTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: `/udapte/todo/` + todoData._id,
                        method: "PUT",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteAdminTodo: builder.mutation({
                query: _id => {
                    return {
                        url: `/delete/todo/` + _id,
                        method: "DELETE",
                        // body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),

            getAdminEmployee: builder.query({
                query: () => {
                    return {
                        url: "/employees",
                        method: "GET"
                    }
                },
                providesTags: ["employee"]
            }),

        }
    }
})

export const {
    useCreateAdminTodoMutation,
    useDeleteAdminTodoMutation,
    useGetAdminTodosQuery,
    useUpdateAdminTodoMutation,
    useGetAdminEmployeeQuery
} = adminApi
