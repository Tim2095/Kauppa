import { createSlice } from "@reduxjs/toolkit";


const storedCard = localStorage.getItem('cartProducts')

const initialState = {
  cartProducts: storedCard ? JSON.parse(storedCard) : []
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.cartProducts.push(action.payload)

      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },
    removeProduct(state, action) {
      const productId = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== productId
      );

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
