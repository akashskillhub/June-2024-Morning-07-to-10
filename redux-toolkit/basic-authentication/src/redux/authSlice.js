import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";

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
        .addCase(registerUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(registerUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.registerSuccess = true
        })
        .addCase(registerUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


        .addCase(loginUser.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(loginUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.loggedInUser = payload
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = authSlice.actions
export default authSlice.reducer