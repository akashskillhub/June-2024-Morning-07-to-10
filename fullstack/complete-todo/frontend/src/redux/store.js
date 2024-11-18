import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";

const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware,]
})

export default reduxStore