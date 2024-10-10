import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import { adminApi } from "./apis/adminApi";
import authSlice from "./slices/authSlice";
import { publicApi } from "./apis/publicApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        auth: authSlice

    },
    middleware: def => {
        // console.log(def())
        return [...def(), authApi.middleware, adminApi.middleware, publicApi.middleware]
    }
})

export default reduxStore