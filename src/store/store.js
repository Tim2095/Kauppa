import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../reducer/product-slice'
import cartReducer from '../reducer/cart-slice'


const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer
  }
})

export default store