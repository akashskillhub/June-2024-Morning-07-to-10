import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, getTodos, updateTodo } from "./todo.actions";
import { Note } from "../types/Todo";

type State = {
    loading?: boolean
    error?: any
    todos?: Note[]
    createSuccess?: boolean
    updateSuccess?: boolean
    deleteSuccess?: boolean
}

const initialState: State = {}
const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getTodos.pending, (state,) => {
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


        .addCase(createTodo.pending, (state,) => {
            state.loading = true
        })
        .addCase(createTodo.fulfilled, (state) => {
            state.loading = false
            state.createSuccess = true
        })
        .addCase(createTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(updateTodo.pending, (state) => {
            state.loading = true
        })
        .addCase(updateTodo.fulfilled, (state) => {
            state.loading = false
            state.updateSuccess = true
        })
        .addCase(updateTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteTodo.pending, (state,) => {
            state.loading = true
        })
        .addCase(deleteTodo.fulfilled, (state,) => {
            state.loading = false
            state.deleteSuccess = true
        })
        .addCase(deleteTodo.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export default todoSlice.reducer