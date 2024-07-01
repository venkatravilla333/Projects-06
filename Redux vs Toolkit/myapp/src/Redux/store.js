import {applyMiddleware, combineReducers, createStore} from 'redux'
import { cakeReducer } from './cake/cakeReducer'
import { countReducer } from './count/countReducer'
import { userReducer } from './users/userReducer'
import { thunk }  from 'redux-thunk'

var rootReducer = combineReducers({
  cake: cakeReducer,
  count: countReducer,
  user: userReducer
})

export var store = createStore(rootReducer, applyMiddleware(thunk))