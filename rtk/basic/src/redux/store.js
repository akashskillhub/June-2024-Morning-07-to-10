import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./todoApi";


const reduxStore = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: def => [...def(), todoApi.middleware]
})

export default reduxStore