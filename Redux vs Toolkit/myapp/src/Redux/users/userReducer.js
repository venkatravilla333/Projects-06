import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./actionTypes"



var initialState = {
  loading: false,
  users: [],
  error: ''
}

export var userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
      break;
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }
      break;
      case FETCH_USER_FAILURE:
        return {
          ...state,
        loading: false,
        error: action.payload
      }
      break;
    default:
      return state
  }
} 