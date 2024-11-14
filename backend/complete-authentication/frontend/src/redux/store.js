import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import { adminApi } from "./apis/adminApi";
import authSlice from "./slices/authSlice"

const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, adminApi.middleware]
})

export default reduxStore