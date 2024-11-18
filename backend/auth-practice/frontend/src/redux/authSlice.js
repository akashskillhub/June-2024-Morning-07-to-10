import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.signin.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })

})

export const { invalidate } = authSlice.actions
export default authSlice.reducer