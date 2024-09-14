import { createSlice } from "@reduxjs/toolkit";
import { addStudent, deleteStudent, getStudent, updateStudent } from "./studentActions";

const studentSlice = createSlice({
    name: "studentSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addCase(addStudent.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addStudent.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogCreate = !state.blogCreate
        })
        .addCase(addStudent.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(getStudent.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getStudent.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogs = payload
        })
        .addCase(getStudent.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(updateStudent.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateStudent.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogUpdate = !state.blogUpdate
        })
        .addCase(updateStudent.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteStudent.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteStudent.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogDelete = !state.blogDelete
        })
        .addCase(deleteStudent.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export default studentSlice.reducer