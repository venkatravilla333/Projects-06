import {configureStore} from '@reduxjs/toolkit'
import countReducer from './slices/countSlice'
import cakeReducer from './slices/cakeSlice'

export var store = configureStore({
  reducer: {
    countReducer,
    cakeReducer
  }
})