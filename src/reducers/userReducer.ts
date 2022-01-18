import { UserEntity } from '../entities/UserEntity'
import { Actions, INITIALIZE_USER, UPDATE_USER } from '../actions/userAction'

export interface UserState {
  user: UserEntity
}
const initialState: UserState = {
  user: new UserEntity()
}

const userReducer = (state = initialState, action: Actions) => {
  switch(action.type) {
    case INITIALIZE_USER:
      return {
        ...state,
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state
  }
}

export default userReducer
