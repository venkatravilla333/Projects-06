
import { configureStore } from '@reduxjs/toolkit'
import getAllProductsReducer from './Slices/productSlice/getAllProductsSlice'
import productReducer from './Slices/productSlice/getSingleProductSlice'

import registerUserRedcer from './Slices/userSlice/registerUserSlice'
import loginUserReducer from './Slices/userSlice/loginUserSlice'
import profileReducer from './Slices/profileSlice/profileSlice'

export var store = configureStore({
  reducer: {
    allproducts: getAllProductsReducer,
    singleproduct: productReducer,
    registerUser: registerUserRedcer,
    loginUser: loginUserReducer,
    profileSlice:profileReducer
  }
})