import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";
// import api from "../api";

export const addTodo = createAsyncThunk(
    "addTdoo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/notes", todoData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getTodo = createAsyncThunk(
    "getTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/notes")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const updateTodo = createAsyncThunk(
    "updateTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch("/notes/" + todoData.id, todoData)
            // return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const deleteTodo = createAsyncThunk(
    "deleteTodo",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete("/notes/" + id)
            // return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })