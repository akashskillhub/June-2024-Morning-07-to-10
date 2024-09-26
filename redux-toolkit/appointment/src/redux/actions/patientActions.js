import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
// import api from "../api";

export const bookAppointment = createAsyncThunk(
    "bookAppointment",
    async (bookingData, { rejectWithValue, getState }) => {
        try {
            await api.post("/bookings", bookingData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getBookingHistory = createAsyncThunk(
    "getBookingHistory",
    async (bookingData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/bookings", {
                params: { patient: getState().auth.patient.id }
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })