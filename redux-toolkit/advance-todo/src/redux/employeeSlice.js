import { createSlice } from "@reduxjs/toolkit";
import { employeeCompleteTodo, employeeGetTodos } from "./employeeActions";

const employeeSlice = createSlice({
    name: "employeeSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addCase(employeeGetTodos.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(employeeGetTodos.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todos = payload
        })
        .addCase(employeeGetTodos.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(employeeCompleteTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(employeeCompleteTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoComplete = !state.todoComplete
        })
        .addCase(employeeCompleteTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

// export const { invalidate } = employeeSlice.actions
export default employeeSlice.reducer