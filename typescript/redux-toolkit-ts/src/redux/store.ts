import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo.slice"

const reduxStore = configureStore({
    reducer: {
        todos: todoSlice,
    },
})

export type AppDispatch = typeof reduxStore.dispatch
export type AppSelector = ReturnType<typeof reduxStore.getState>

export default reduxStore