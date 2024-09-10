import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../util/api";
// import api from "../api";

export const addBlog = createAsyncThunk(
    "addBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/articles", blogData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getBlog = createAsyncThunk(
    "getBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/articles")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const updateBlog = createAsyncThunk(
    "updateBlog",
    async (blogData, { rejectWithValue, getState }) => {
        try {
            await api.patch("/articles/" + blogData.id, blogData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const deleteBlog = createAsyncThunk(
    "deleteBlog",
    async (id, { rejectWithValue, getState }) => {
        try {
            await api.delete("/articles/" + id)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })