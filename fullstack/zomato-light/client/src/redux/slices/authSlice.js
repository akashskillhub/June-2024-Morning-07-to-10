import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        admin: JSON.parse(localStorage.getItem("zomato-admin")),
        resturant: JSON.parse(localStorage.getItem("zomato-resturant"))
    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.adminVerifyOtp.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(authApi.endpoints.adminSignout.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })

        .addMatcher(authApi.endpoints.resturantSignin.matchFulfilled, (state, { payload }) => {
            state.resturant = payload
        })

        .addMatcher(authApi.endpoints.resturantSignout.matchFulfilled, (state, { payload }) => {
            state.resturant = null
        })

})

export default authSlice.reducer