import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../auth/authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        admin: JSON.parse(localStorage.getItem("ecom-admin")),
        customer: JSON.parse(localStorage.getItem("ecom-user"))
    },
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.adminLogin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.adminLogout.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })


        .addMatcher(authApi.endpoints.customerLogin.matchFulfilled, (state, { payload }) => {
            state.customer = payload
        })
        .addMatcher(authApi.endpoints.customerLogout.matchFulfilled, (state, { payload }) => {
            state.customer = null
        })

})

export const { invalidate } = authSlice.actions
export default authSlice.reducer