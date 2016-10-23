export default add => dispatch => next => action => {
  if (typeof action.then === 'function') {
    add(action)
  }

  return next(action)
}
