import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";
// import api from "../api";

export const employeeGetTodos = createAsyncThunk(
    "employeeGetTodos",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/todos", {
                params: {
                    employee: getState().auth.loggedInUser.id
                }
            })
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const employeeCompleteTodo = createAsyncThunk(
    "employeeCompleteTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch("/todos/" + todoData.id, todoData)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })