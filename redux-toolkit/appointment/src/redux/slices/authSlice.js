import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin, loginPatient, registerPatient } from "../actions/authActions";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        admin: JSON.parse(localStorage.getItem("admin")),
        patient: JSON.parse(localStorage.getItem("patient")),
    },
    reducers: {
        logout: (state, { payload }) => {
            if (payload === "admin") {
                localStorage.removeItem("admin")
                state.admin = null
            } else {
                localStorage.removeItem("patient")
                state.patient = null
            }
        }
    },
    extraReducers: builder => builder
        .addCase(loginAdmin.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(loginAdmin.fulfilled, (state, { payload }) => {
            state.loading = false
            state.admin = payload
        })
        .addCase(loginAdmin.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(loginPatient.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(loginPatient.fulfilled, (state, { payload }) => {
            state.loading = false
            state.patient = payload
        })
        .addCase(loginPatient.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(registerPatient.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(registerPatient.fulfilled, (state, { payload }) => {
            state.loading = false
            state.patientRegister = true
        })
        .addCase(registerPatient.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { logout } = authSlice.actions
export default authSlice.reducer