
import { configureStore } from '@reduxjs/toolkit'
import getAllProductsReducer from './Slices/productSlice/getAllProductsSlice'
import productReducer from './Slices/productSlice/getSingleProductSlice'

import registerUserRedcer from './Slices/userSlice/registerUserSlice'

export var store = configureStore({
  reducer: {
    allproducts: getAllProductsReducer,
    singleproduct: productReducer,
    registerUser: registerUserRedcer
  }
})