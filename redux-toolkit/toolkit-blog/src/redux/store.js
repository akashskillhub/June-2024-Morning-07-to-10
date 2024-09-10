import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";


const reduxStore = configureStore({
    reducer: {
        allBlogs: blogSlice,
    },
})

export default reduxStore