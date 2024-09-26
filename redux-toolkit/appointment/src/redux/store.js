import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import patientSlice from "./slices/patientSlice";


const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
        patient: patientSlice
    },
})

export default reduxStore