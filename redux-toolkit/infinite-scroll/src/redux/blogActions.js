import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlogs = createAsyncThunk(
    "getAllBlogs",
    async ({ start, limit }, { rejectWithValue, getState }) => {
        try {
            const { data, headers } = await axios.get("http://localhost:5000/blogs", {
                params: { _start: start, _limit: limit }
            })
            return { data, total: headers.get("X-Total-Count") }

        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })