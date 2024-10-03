import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";
// import api from "../api";

export const getAllBlogs = createAsyncThunk(
    "getAllBlogs",
    async ({ start, limit }, { rejectWithValue, getState }) => {
        try {
            const { data, headers } = await api.get("/blogs", {
                params: { _start: start, _limit: limit }
            })
            return { data, total: headers.get("X-Total-Count") }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })