import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart = [...state.cart, payload]
        }
    },
    extraReducers: builder => builder

})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer