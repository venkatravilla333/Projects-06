import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Toolkit/slices/cakeSlice'
// import { buyCake } from '../Redux/cake/cakeAction'

function CakeComponent() {
  var cakeState = useSelector((state) => state.cake)
 var dispatch = useDispatch()
  console.log(cakeState)
  return (
    <div>
      <h2>No of cakes: {cakeState.noOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default CakeComponent