import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice";


const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
        admin: adminSlice
    },
})

export default reduxStore