import { combineReducers } from 'redux'
import portfolio from './portfolio'
import codepen from './codepen'

const rootReducer = combineReducers({
  portfolio,
  codepen,
})

export default rootReducer
