import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../reducer/product-slice'
import cartSlice from '../reducer/cart-slice'


const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartSlice
  }
})

export default store