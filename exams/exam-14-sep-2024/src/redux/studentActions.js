import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../util/api";
// import api from "../api";

export const addStudent = createAsyncThunk(
    "addStudent",
    async (studentData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/students", studentData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getStudent = createAsyncThunk(
    "getStudent",
    async (studentData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/students")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const updateStudent = createAsyncThunk(
    "updateStudent",
    async (studentData, { rejectWithValue, getState }) => {
        try {
            await api.patch("/students/" + studentData.id, studentData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const deleteStudent = createAsyncThunk(
    "deleteStudent",
    async (id, { rejectWithValue, getState }) => {
        try {
            await api.delete("/students/" + id)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })