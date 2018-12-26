import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/headerReducer'
import homeREducer from '../pages/home/store/homeReducer.'
export default combineReducers({
  header: headerReducer,
  home: homeREducer
})
