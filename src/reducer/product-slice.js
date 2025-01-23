import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getInitialProducts(state, action) {
      return action.payload
    },
  },
});

export const { getInitialProducts } = productSlice.actions;
export default productSlice.reducer;
