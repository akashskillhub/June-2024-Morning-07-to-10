import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart = [...state.cart, { ...payload, qty: 1 }]
        },
        incCartQty: (state, { payload }) => {
            const result = state.cart.find(item => item._id === payload)
            if (result) {
                result.qty = result.qty + 1
            }
        },
        decCartQty: (state, { payload }) => {
            const result = state.cart.find(item => item._id === payload)
            if (result) {
                if (result.qty === 1) {
                    state.cart = state.cart.filter(item => item._id !== payload)
                } else {
                    result.qty = result.qty - 1
                }
            }
        },

        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(item => item._id !== payload)
        },
        emptyCart: (state, { payload }) => {
            state.cart = []
        }
    },
    extraReducers: builder => builder
})

export const { addToCart, emptyCart, removeFromCart, decCartQty, incCartQty } = cartSlice.actions
export default cartSlice.reducer