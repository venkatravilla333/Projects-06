
import { createSlice } from '@reduxjs/toolkit'

var initialState = {
  cartItems : []
}


var cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      var productIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
      console.log(productIndex)
      if (productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += 1
      } else {
        var products = {...action.payload, cartQuantity: 1 }
        state.cartItems.push(products)
      }
      
    }
  }
})

export let {addToCart} = cartSlice.actions
export default cartSlice.reducer