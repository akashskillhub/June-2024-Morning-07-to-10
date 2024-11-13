import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: def => [...def(), authApi.middleware]
})

export default reduxStore