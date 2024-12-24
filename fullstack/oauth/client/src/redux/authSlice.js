import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { admin: JSON.parse(localStorage.getItem("oauth")) },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.oAuth.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.logout.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })

})

export default authSlice.reducer