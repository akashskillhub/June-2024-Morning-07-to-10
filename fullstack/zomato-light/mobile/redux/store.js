import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";
import authSlice from "./slices/auth.slice";
import { customerApi } from "./apis/customer.api";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [customerApi.reducerPath]: customerApi.reducer,
        auth: authSlice
    },
    middleware: def => [
        ...def(),
        authApi.middleware,
        customerApi.middleware
    ]
})

export default reduxStore