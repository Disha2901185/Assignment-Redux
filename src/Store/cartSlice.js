import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartCount: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartCount.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartCount = state.cartCount.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
