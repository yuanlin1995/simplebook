import { SEARCH_FOCUS, SEARCH_BLURS } from './headerAction'
const defaultState = {
  inputFocus: false
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case SEARCH_FOCUS:
      newState.inputFocus = true
      return newState
    case SEARCH_BLURS:
      newState.inputFocus = false
      return newState
    default:
      return state
  }
}
