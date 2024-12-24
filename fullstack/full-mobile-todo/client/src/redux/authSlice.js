import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        admin: JSON.parse(localStorage.getItem("todo-admin")),
        employee: JSON.parse(localStorage.getItem("todo-employee")),
    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.adminLogin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.adminLogout.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })

        .addMatcher(authApi.endpoints.employeeLogin.matchFulfilled, (state, { payload }) => {
            state.employee = payload
        })
        .addMatcher(authApi.endpoints.employeeLogout.matchFulfilled, (state, { payload }) => {
            state.employee = null
        })

})

export const { invalidate } = authSlice.actions
export default authSlice.reducer