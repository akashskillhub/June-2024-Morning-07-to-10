import { createSlice } from "@reduxjs/toolkit";
import { getAllBookings, getAllPatients } from "../actions/adminActions";

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(getAllPatients.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getAllPatients.fulfilled, (state, { payload }) => {
            state.allPtients = payload
        })
        .addCase(getAllPatients.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(getAllBookings.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getAllBookings.fulfilled, (state, { payload }) => {
            state.allBookings = payload
        })
        .addCase(getAllBookings.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = adminSlice.actions
export default adminSlice.reducer