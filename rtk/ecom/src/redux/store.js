import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import { adminApi } from "./apis/adminApi";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import { publicApi } from "./apis/publicApi";
import { customerApi } from "./apis/customerApi";
const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        [customerApi.reducerPath]: customerApi.reducer,
        auth: authSlice,
        publicCart: cartSlice

    },
    middleware: def => {
        // console.log(def())
        return [
            ...def(),
            authApi.middleware,
            adminApi.middleware,
            publicApi.middleware,
            customerApi.middleware
        ]
    }
})

export default reduxStore