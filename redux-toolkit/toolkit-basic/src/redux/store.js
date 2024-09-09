import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";


const reduxStore = configureStore({
    reducer: {
        allTodos: todoSlice,
    },
})

export default reduxStore