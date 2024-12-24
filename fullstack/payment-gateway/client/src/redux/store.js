import { configureStore } from "@reduxjs/toolkit";
import { orderApi } from "./orderApi";


const reduxStore = configureStore({
    reducer: {
        [orderApi.reducerPath]: orderApi.reducer,
    },
    middleware: def => [...def(), orderApi.middleware]
})

export default reduxStore