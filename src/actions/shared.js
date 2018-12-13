import { getInitialData } from '../../utils/api'
import { receiveUser } from './user'
import { receiveMap } from '../actions/map'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'osama'

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ user, map }) => {
      dispatch(receiveUser(user))
      dispatch(receiveMap(map))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}
