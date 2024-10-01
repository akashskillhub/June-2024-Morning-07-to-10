import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import patientSlice from "./slices/patientSlice";
import adminSlice from "./slices/adminSlice";


const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
        patient: patientSlice,
        admin: adminSlice
    },
})

export default reduxStore