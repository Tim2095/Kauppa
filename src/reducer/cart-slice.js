import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.cartProducts.push(action.payload)
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
