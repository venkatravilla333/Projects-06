
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export var fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
 var res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
})


var initialState = {
  loading: false,
  users: [],
  error: ''
}

var userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
       state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = ''
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false,
          state.users = []
        state.error = action.payload
      });
  },}
)

export default userSlice.reducer
