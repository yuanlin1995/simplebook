import { SEARCH_FOCUS, SEARCH_BLURS } from './headerAction'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  inputFocus: false
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('inputFocus', true)
    case SEARCH_BLURS:
      return state.set('inputFocus', false)
    default:
      return state
  }
}
