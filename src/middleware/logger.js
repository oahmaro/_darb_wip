const logger = store => next => action => {
  const returnValue = next(action)
  alert('The new state: ', store.getState())
  return returnValue
}

export default logger
