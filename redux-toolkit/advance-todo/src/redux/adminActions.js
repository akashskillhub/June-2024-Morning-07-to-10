import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const addEmployee = createAsyncThunk(
    "addEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/apiEndPoint")
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getEmployee = createAsyncThunk(
    "getEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/apiEndPoint")
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const updateEmployee = createAsyncThunk(
    "updateEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/apiEndPoint")
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const deleteEmployee = createAsyncThunk(
    "deleteEmployee",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/apiEndPoint")
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })


export const addTodo = createAsyncThunk(
    "addTodo",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/apiEndPoint")
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getTodos = createAsyncThunk(
    "getTodos",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/apiEndPoint")
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const updateTodo = createAsyncThunk(
    "updateTodo",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/apiEndPoint")
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const deleteTodo = createAsyncThunk(
    "deleteTodo",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/apiEndPoint")
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })