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
            // ❌ do not use this with real backend
            // ⚠️ only used with json-server FAKE BACKEND
            const { data } = await api.get("/users", {
                params: userData
            })
            if (data.length === 0) {
                console.log("Invalid Email Or Password");
                return rejectWithValue("Invalid Email Or Password")
            } else {
                console.log("Login Success");
                return data[0]
            }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })