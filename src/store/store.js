import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../reducer/product-slice'


const store = configureStore({
  reducer: {
    product: productReducer
  }
})

export default store