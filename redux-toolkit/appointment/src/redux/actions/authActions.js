// adminLogin
// patientLogin
// patientRegister

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
// import api from "../api";

export const loginAdmin = createAsyncThunk(
    "loginAdmin",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/admin", { params: userData })
            if (data.length === 0) {
                return rejectWithValue("Invalid Email Or Password")
            } else {
                localStorage.setItem("admin", JSON.stringify(data[0]))
                return data[0]
            }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const loginPatient = createAsyncThunk(
    "loginPatient",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/patients", { params: userData })
            if (data.length === 0) {
                return rejectWithValue("Invalid Email Or Password")
            } else {
                localStorage.setItem("patient", JSON.stringify(data[0]))
                return data[0]
            }
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const registerPatient = createAsyncThunk(
    "registerPatient",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/patients", userData)
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })