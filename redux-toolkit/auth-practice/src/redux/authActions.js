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
            const { data } = await api.get("/users", { params: userData })
            // return data.length === 0 ? rejectWithValue("Invalid Email Or Password") : data[0]

            if (data.length === 0) {
                return rejectWithValue("Invalid Email Or Password")
            } else {
                localStorage.setItem("user", JSON.stringify(data[0]))
                return data[0]
            }

        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })