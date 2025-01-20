import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";
import { resturantApi } from "./apis/resturantApi";
import { adminApi } from "./apis/admin.api";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [resturantApi.reducerPath]: resturantApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        auth: authSlice
    },
    middleware: def => [
        ...def(),
        authApi.middleware,
        resturantApi.middleware,
        adminApi.middleware
    ]
})

export default reduxStore