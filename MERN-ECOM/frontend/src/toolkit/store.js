
import { configureStore } from '@reduxjs/toolkit'
import getAllProductsReducer from './Slices/productSlice/getAllProductsSlice'
import productReducer from './Slices/productSlice/getSingleProductSlice'

export var store = configureStore({
  reducer: {
    allproducts: getAllProductsReducer,
    singleproduct: productReducer
    
  }
})