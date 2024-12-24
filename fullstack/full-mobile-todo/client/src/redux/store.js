import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import { adminApi } from "./adminApi";
import authSlice from "./authSlice";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, adminApi.middleware]
})

export default reduxStore