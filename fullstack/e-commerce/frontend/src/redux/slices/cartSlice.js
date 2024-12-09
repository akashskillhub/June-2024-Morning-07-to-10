import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, { payload }) => {
            if (!state.cart.find(item => item._id === payload._id)) {
                state.cart.push(payload)
            }
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(item => item._id !== payload._id)
        },
        emptyCart: (state, { payload }) => {
            state.cart = []
        }
    },
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer