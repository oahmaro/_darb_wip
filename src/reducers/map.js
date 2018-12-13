import { RECEIVE_MAP } from '../actions/map'

export default function map(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MAP:
      return {
        ...state,
        ...action.map
      }
    default:
      return state
  }
}
