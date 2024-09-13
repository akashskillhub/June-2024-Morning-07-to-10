import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" })

export const addEmployee = createAsyncThunk(
    "addEmployee",
    async (employeeData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/employee", employeeData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getEmployees = createAsyncThunk(
    "getEmployees",
    async (employeeData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/employee")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const updateEmployees = createAsyncThunk(
    "updateEmployees",
    async (employeeData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.patch("/employee/" + employeeData.id, employeeData)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const deleteEmployees = createAsyncThunk(
    "deleteEmployees",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete("/employee/" + id)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })