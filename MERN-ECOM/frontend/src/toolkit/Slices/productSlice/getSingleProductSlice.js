import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export var fetchSingleProduct = createAsyncThunk(
  'product/fetchSingleProduct',
  async ( id ) => {
    var res = await axios.get(`http://localhost:5000/products/${id}`);
    console.log(res.data);
    return res.data;
  }
);

var initialState = {
  loading: false,
  product: {},
  error: '',
};

var productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
