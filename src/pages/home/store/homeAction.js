import axios from 'axios'
export const GET_LIST = 'get_list'
export const getListAction = () => {
  return dispatch => {
    axios.get('list.json').then(res => {
      const action = {
        type: GET_LIST,
        res
      }
      dispatch(action)
    })
  }
}
