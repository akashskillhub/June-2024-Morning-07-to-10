import { createSlice } from "@reduxjs/toolkit";
import { bookAppointment, cancelBooking, getBookingHistory } from "../actions/patientActions";

const patientSlice = createSlice({
    name: "patientSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addCase(bookAppointment.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(bookAppointment.fulfilled, (state, { payload }) => {
            state.loading = false
            state.bookSucces = !state.bookSucces
        })
        .addCase(bookAppointment.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(getBookingHistory.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getBookingHistory.fulfilled, (state, { payload }) => {
            state.loading = false
            state.history = payload
        })
        .addCase(getBookingHistory.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(cancelBooking.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(cancelBooking.fulfilled, (state, { payload }) => {
            state.loading = false
            state.bookingCancel = !state.bookingCancel
        })
        .addCase(cancelBooking.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = patientSlice.actions
export default patientSlice.reducer