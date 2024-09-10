import { createSlice } from "@reduxjs/toolkit";
import { addBlog, deleteBlog, getBlog, updateBlog } from "./blogActions";

const blogSlice = createSlice({
    name: "blogSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(addBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogCreate = !state.blogCreate
        })
        .addCase(addBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(getBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogs = payload
        })
        .addCase(getBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(updateBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogUpdate = !state.blogUpdate
        })
        .addCase(updateBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteBlog.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteBlog.fulfilled, (state, { payload }) => {
            state.loading = false
            state.blogDelete = !state.blogDelete
        })
        .addCase(deleteBlog.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = blogSlice.actions
export default blogSlice.reducer