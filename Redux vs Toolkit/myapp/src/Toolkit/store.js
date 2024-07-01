import {configureStore} from '@reduxjs/toolkit'
import countReducer from './slices/countSlice'
import cakeReducer from './slices/cakeSlice'
import userReducer from './slices/userSlice'

export var store = configureStore({
  reducer: {
    count: countReducer,
    cake: cakeReducer,
    user: userReducer
  }
})