import { configureStore } from "@reduxjs/toolkit";
import { riderAuthApi } from "./rider-auth.api";
import riderAuthSlice from "./rider-auth.slice";
import { riderApi } from "./rider.api";


const riderReduxStore = configureStore({
    reducer: {
        [riderAuthApi.reducerPath]: riderAuthApi.reducer,
        [riderApi.reducerPath]: riderApi.reducer,
        auth: riderAuthSlice,
    },
    middleware: def => [...def(), riderAuthApi.middleware, riderApi.middleware]
})

export default riderReduxStore