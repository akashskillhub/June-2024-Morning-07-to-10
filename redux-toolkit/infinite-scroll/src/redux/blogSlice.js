import { createSlice } from "@reduxjs/toolkit";
import { getAllBlogs } from "./blogActions";

const blogAction = createSlice({
    name: "blogAction",
    initialState: { allBlogs: [] },
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(getAllBlogs.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getAllBlogs.fulfilled, (state, { payload }) => {
            state.loading = false
            state.allBlogs = [...state.allBlogs, ...payload.data]
            state.total = payload.total
        })
        .addCase(getAllBlogs.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = blogAction.actions
export default blogAction.reducer