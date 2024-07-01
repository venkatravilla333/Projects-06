import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../Toolkit/slices/countSlice'
// import { decrease, increase } from '../Redux/count/countAction';

function CountComponent() {
  var countState = useSelector((state) => state.count)
 var dispatch = useDispatch()
  console.log(countState)
  return (
    <div>
      <h2>Count : {countState.count}</h2>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
}

export default CountComponent