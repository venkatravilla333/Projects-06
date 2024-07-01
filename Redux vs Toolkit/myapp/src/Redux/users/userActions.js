import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./actionTypes"
import axios from 'axios'

var fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}
var fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}
var fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}
export var fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data)
       return dispatch(fetchUserSuccess(res.data))
      }).catch((err) => {
     return dispatch(fetchUserFailure(err.messsage))
    })
  }
}