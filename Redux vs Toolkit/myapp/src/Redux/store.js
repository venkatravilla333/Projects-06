import {combineReducers, createStore} from 'redux'
import { cakeReducer } from './cake/cakeReducer'
import { countReducer } from './count/countReducer'

var rootReducer = combineReducers({
  cake: cakeReducer,
  count: countReducer
})

export var store = createStore(rootReducer)