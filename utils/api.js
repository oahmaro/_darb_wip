import { AsyncStorage } from 'react-native'
import { APP_STORAGE_KEY, generateValidationCode } from './helpers'

export function getLocalData() {
  return AsyncStorage.getItem(APP_STORAGE_KEY).then(results => {
    return JSON.parse(results)
  })
}

export function saveLocalData({ key, name, phone, birthdate, gender }) {
  return AsyncStorage.mergeItem(
    APP_STORAGE_KEY,
    JSON.stringify({
      [key]: {
        name,
        gender,
        birthdate,
        phone,
        accessToken: ''
      }
    })
  )
}
