import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, getTodo, updateTodo } from "./todoActions";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(addTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.createTodo = true
        })
        .addCase(addTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(getTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.todos = payload
        })
        .addCase(getTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(updateTodo.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateTodo.fulfilled, (state, { payload }) => {
            state.loading = false
            state.udpateTodo = true
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
            state.deleteTodo = true
        })
        .addCase(deleteTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = todoSlice.actions
export default todoSlice.reducer