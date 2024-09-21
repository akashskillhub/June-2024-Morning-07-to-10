import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api";
// import api from "../api";

export const addEmployee = createAsyncThunk(
    "addEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/users", userData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getEmployee = createAsyncThunk(
    "getEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/users")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const updateEmployee = createAsyncThunk(
    "updateEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch("/users/" + userData.id, userData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const deleteEmployee = createAsyncThunk(
    "deleteEmployee",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete("/users/" + id)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const addTodo = createAsyncThunk(
    "addTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/todos", todoData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getTodos = createAsyncThunk(
    "getTodos",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/todos")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const updateTodo = createAsyncThunk(
    "updateTodo",
    async (todoData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch("/todos/" + todoData.id, todoData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const deleteTodo = createAsyncThunk(
    "deleteTodo",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete("/todos/" + id)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })