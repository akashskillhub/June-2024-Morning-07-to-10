import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import { adminApi } from "./admin/adminApi";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import { publicApi } from "./public/publicApi";
import { customerApi } from "./customer/customerApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        [customerApi.reducerPath]: customerApi.reducer,
        auth: authSlice,
        bag: cartSlice
    },
    middleware: def => [
        ...def(),
        authApi.middleware,
        adminApi.middleware,
        publicApi.middleware,
        customerApi.middleware,
    ]
})

export default reduxStore