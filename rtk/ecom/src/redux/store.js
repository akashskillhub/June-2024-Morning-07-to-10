import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: def => {
        console.log(def())
        return [...def(), authApi.middleware]
    }
})

export default reduxStore