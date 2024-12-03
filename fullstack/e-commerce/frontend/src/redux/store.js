import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import { adminApi } from "./admin/adminApi";
import authSlice from "./slices/authSlice";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, adminApi.middleware]
})

export default reduxStore