import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.mobileEmployeeLogin.matchFulfilled, (state, { payload }) => {
            state.employee = payload.result
        })
        .addMatcher(authApi.endpoints.mobileEmployeeLogout.matchFulfilled, (state, { payload }) => {
            state.employee = null
        })

})

export default authSlice.reducer