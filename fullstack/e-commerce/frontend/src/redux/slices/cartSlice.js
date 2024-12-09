import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, { payload }) => {
            if (!state.cart.find(item => item._id === payload._id)) {
                state.cart.push(payload)
            }
        }
    },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer