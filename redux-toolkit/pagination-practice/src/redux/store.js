import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";


const reduxStore = configureStore({
    reducer: {
        articles: blogSlice,
    },
})

export default reduxStore