import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin, loginUser } from "./authActions";

const authSlice = createSlice({
    name: "authSlice",
    initialState: { loggedInAdmin: JSON.parse(localStorage.getItem("admin")) },
    reducers: {
        logout: (state, { payload }) => {
            localStorage.removeItem("admin")
            state.loggedInAdmin = null
        }
    },
    extraReducers: builder => builder
        .addCase(loginAdmin.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(loginAdmin.fulfilled, (state, { payload }) => {
            state.loading = false
            state.loggedInAdmin = payload
        })
        .addCase(loginAdmin.rejected, (state, { payload }) => {
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