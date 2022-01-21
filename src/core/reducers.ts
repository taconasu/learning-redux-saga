import { combineReducers } from 'redux'
import userReducer from '../reducers/userReducer'

// 定義したreducer達をぶちこむ部屋
const rootReducer = () => combineReducers({
  user: userReducer
})

export default rootReducer
