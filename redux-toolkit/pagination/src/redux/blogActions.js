import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import api from "../api";

export const getAllBlogs = createAsyncThunk(
    "getAllBlogs",
    async ({ start, limit }, { rejectWithValue, getState }) => {
        try {
            const { data, headers } = await axios.get("http://localhost:5000/blogs", {
                params: { _start: start * limit, _limit: limit }
            })
            console.log(headers.get("X-Total-Count"))
            return {
                data,
                total: headers.get("X-Total-Count")
            }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })