import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./studentSlice";


const reduxStore = configureStore({
    reducer: {
        allBlogs: studentSlice,
    },
})

export default reduxStore