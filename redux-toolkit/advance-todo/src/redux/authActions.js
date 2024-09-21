import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";

export const loginUser = createAsyncThunk(
    "loginUser",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/user", { params: userData })
            if (data.length === 0) {
                return rejectWithValue("Invalid Email Or Password")
            } else {
                return data[0]
            }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const loginAdmin = createAsyncThunk(
    "loginAdmin",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/admin", { params: userData })
            if (data.length === 0) {
                return rejectWithValue("Invalid Email Or Password")
            } else {
                localStorage.setItem("admin", JSON.stringify(data[0]))
                return data[0]
            }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })