import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export var fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async() => {
  var res = await axios.get('http://localhost:5000/products')
  console.log(res.data)
  return res.data
})

var initialState = {
  loading: false,
  products: [],
  error: ''
}

var allProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
      state.loading = true
    })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
          
          
    })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
  }
})

export default allProductsSlice.reducer