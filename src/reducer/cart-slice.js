import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: []
}

const productSlice = createSlice({
  name: "cartProducts",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.cartProducts.push(action.payload)
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
