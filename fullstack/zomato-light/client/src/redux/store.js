import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";
import { resturantApi } from "./apis/resturantApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [resturantApi.reducerPath]: resturantApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, resturantApi.middleware]
})

export default reduxStore