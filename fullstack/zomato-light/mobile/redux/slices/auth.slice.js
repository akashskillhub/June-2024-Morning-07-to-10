import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.api";
import { customerApi } from "../apis/customer.api";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.mobileCustomerVerifyOTP.matchFulfilled, (state, { payload }) => {
            state.customer = payload
        })
        .addMatcher(customerApi.endpoints.mobileCustomerUpdateInfo.matchFulfilled, (state, { payload }) => {
            state.customer = payload
        })

})

// export const { invalidate } = authSlice.actions
export default authSlice.reducer