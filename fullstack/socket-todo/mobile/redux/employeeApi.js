import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const employeeApi = createApi({
    reducerPath: "employeeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/employee`,
        credentials: "include"
    }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getMobileEmployeeTodos: builder.query({
                query: () => {
                    return {
                        url: "/read/todos",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            completeMobileEmployeeTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/update/todo/" + todoData._id,
                        method: "PUT",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),

        }
    }
})

export const {
    useCompleteMobileEmployeeTodoMutation,
    useGetMobileEmployeeTodosQuery,
    useLazyGetMobileEmployeeTodosQuery
} = employeeApi
