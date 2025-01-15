import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";
import { customerApi } from "../apis/customer.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {},
    reducers: {
        setLocalData: (state, { payload }) => {
            state.customer = payload
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.mobileCustomerVerifyOTP.matchFulfilled, (state, { payload }) => {
            state.customer = payload
        })
        .addMatcher(authApi.endpoints.mobileCustomerLogout.matchFulfilled, (state, { payload }) => {
            state.customer = null
        })
        .addMatcher(customerApi.endpoints.mobileCustomerUpdateInfo.matchFulfilled, (state, { payload }) => {
            state.customer = payload
        })

})

export const { setLocalData } = authSlice.actions
export default authSlice.reducer