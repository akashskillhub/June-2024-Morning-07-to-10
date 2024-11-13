import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "./authApi"

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        user: JSON.parse(localStorage.getItem("user"))
    },
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.user = payload.result // 👈 from backend res.json({message:"",result})
        })
})

// export const { invalidate } = authSlice.actions
export default authSlice.reducer