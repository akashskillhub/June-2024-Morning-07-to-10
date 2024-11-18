import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import authSlice from "./authSlice";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware]
})

export default reduxStore