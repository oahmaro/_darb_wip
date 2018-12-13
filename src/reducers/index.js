import { combineReducers } from 'redux'
import authedUser from './authedUser'
import user from './user'
import map from './map'

export default combineReducers({
  authedUser,
  user,
  map
})
