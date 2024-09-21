import { createSlice } from "@reduxjs/toolkit";
import { addEmployee, addTodo, deleteEmployee, deleteTodo, getEmployee, getTodos, updateEmployee, updateTodo } from "./adminActions";

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addCase(addEmployee.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addEmployee.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employeeCreate = !state.employeeCreate
        })
        .addCase(addEmployee.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getEmployee.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getEmployee.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employees = payload
        })
        .addCase(getEmployee.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(updateEmployee.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateEmployee.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employeeUpdate = !state.employeeUpdate
        })
        .addCase(updateEmployee.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteEmployee.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteEmployee.fulfilled, (state, { payload }) => {
            state.loading = false
            state.employeeDelete = !state.employeeDelete
        })
        .addCase(deleteEmployee.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        // Todo

        .addCase(addTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoCreate = !state.todoCreate
        })
        .addCase(addTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getTodos.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getTodos.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todos = payload
        })
        .addCase(getTodos.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(updateTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoUpdate = !state.todoUpdate
        })
        .addCase(updateTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(deleteTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todoDelete = !state.todoDelete
        })
        .addCase(deleteTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })



})

// export const { invalidate } = adminSlice.actions
export default adminSlice.reducer