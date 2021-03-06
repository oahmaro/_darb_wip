import { RECEIVE_USER } from '../actions/user'

export default function user(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}
