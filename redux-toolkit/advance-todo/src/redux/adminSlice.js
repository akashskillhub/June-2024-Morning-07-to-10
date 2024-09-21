import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
    // .addCase(actionName.pending, (state, { payload }) => {
    //     state.loading = true
    // })
    // .addCase(actionName.fulfilled, (state, { payload }) => {
    //     state.loading = false
    // })
    // .addCase(actionName.rejected, (state, { payload }) => {
    //     state.loading = false
    //     state.error = payload
    // })
})

// export const { invalidate } = adminSlice.actions
export default adminSlice.reducer