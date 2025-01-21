import { configureStore } from "@reduxjs/toolkit";
import { riderAuthApi } from "./rider-auth.api";
import riderAuthSlice from "./rider-auth.slice";


const riderReduxStore = configureStore({
    reducer: {
        [riderAuthApi.reducerPath]: riderAuthApi.reducer,
        auth: riderAuthSlice
    },
    middleware: def => [...def(), riderAuthApi.middleware]
})

export default riderReduxStore