import { GET_LIST } from './homeAction'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  list: []
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      return state.set('list', action.res.data)
    default:
      return state
  }
}
