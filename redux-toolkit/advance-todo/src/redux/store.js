import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import adminSlice from "./adminSlice";
import employeeSlice from "./employeeSlice";


const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
        admin: adminSlice,
        employee: employeeSlice
    },
})

export default reduxStore