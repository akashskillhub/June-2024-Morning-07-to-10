import { createSlice } from "@reduxjs/toolkit";
import { riderAuthApi } from "./rider-auth.api";

const riderAuthSlice = createSlice({
    name: "riderAuthSlice",
    initialState: {},
    reducers: {
        setLocalData: (state, { payload }) => {
            state.rider = payload
        }
    },
    extraReducers: builder => builder
        .addMatcher(riderAuthApi.endpoints.mobileRiderLogin.matchFulfilled, (state, { payload }) => {
            state.rider = payload
        })
        .addMatcher(riderAuthApi.endpoints.mobileRiderLogout.matchFulfilled, (state, { payload }) => {
            state.rider = null
        })

})

export const { setLocalData } = riderAuthSlice.actions
export default riderAuthSlice.reducer