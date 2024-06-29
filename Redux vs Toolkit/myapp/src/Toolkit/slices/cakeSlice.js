import {createSlice} from '@reduxjs/toolkit'


var initialState = {
  noOfCakes: 100
}

var cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    buyCake: (state, action) => {
      state.noOfCakes -= 1
    }
  }
  
})

export let {buyCake} = cakeSlice.actions

export default cakeSlice.reducer