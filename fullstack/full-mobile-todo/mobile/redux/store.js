import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import authSlice from "./authSlice";
import { employeeApi } from "./employeeApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [employeeApi.reducerPath]: employeeApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, employeeApi.middleware]
})

export default reduxStore