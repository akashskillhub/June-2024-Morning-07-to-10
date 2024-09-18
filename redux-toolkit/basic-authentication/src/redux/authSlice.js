import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {},
    reducers: {
        //👇 This is action used to change redux value
        logout: (state, { payload }) => {
            state.loggedInUser = null
        },

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

export const { logout } = authSlice.actions
export default authSlice.reducer