import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        customer: JSON.parse(localStorage.getItem("customer")),
        admin: JSON.parse(localStorage.getItem("admin")),
    },
    reducers: {
        logoutCustomer: (state) => {
            localStorage.removeItem("customer")
            state.customer = null
        },
        logoutAdmin: (state) => {
            localStorage.removeItem("admin")
            state.admin = null
        },
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.loginCustomer.matchFulfilled, (state, { payload }) => {
            state.customer = payload
        })
        .addMatcher(authApi.endpoints.loginAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
})

export const { logoutAdmin, logoutCustomer } = authSlice.actions
export default authSlice.reducer