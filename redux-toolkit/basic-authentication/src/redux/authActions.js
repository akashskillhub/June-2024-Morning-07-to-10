import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";
// import api from "../api";

export const registerUser = createAsyncThunk(
    "registerUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/users", userData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const loginUser = createAsyncThunk(
    "loginUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
            // const { data } = await api.post("/users", userData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })