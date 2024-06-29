
import { createSlice } from '@reduxjs/toolkit'

var initialState = {
  count: 0
}

var countSlice = createSlice({
  name: 'count',
  initialState: initialState,
  reducers: {
    increase: (state, action) => {
      state.count += 1
    },
    decrease: (state, action) => {
      state.count -= 1
    }
  }
})

export let {increase, decrease} = countSlice.actions
export default countSlice.reducer