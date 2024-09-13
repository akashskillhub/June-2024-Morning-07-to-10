import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employeeSlice";


const reduxStore = configureStore({
    reducer: {
        allEmployees: employeeSlice,
    },
})

export default reduxStore