// getAllPatients
// getAllBookings

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
export const getAllPatients = createAsyncThunk(
    "getAllPatients",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/patients")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getAllBookings = createAsyncThunk(
    "getAllBookings",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/bookings")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })