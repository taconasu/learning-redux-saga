import { UserEntity } from '../entities/UserEntity'
import { Actions, INITIALIZE_USER, UPDATE_USER } from '../actions/userAction'

// userステートの型定義 (entityを指定)
export interface UserState {
  data: UserEntity
}
// userステートの初期値
const initialState: UserState = {
  data: new UserEntity()
}

// userステートに関わるreducerを定義
// このactionが実行されたらstateをこんな感じに変更する をまとめたやつ
const userReducer = (state = initialState, action: Actions) => {
  switch(action.type) {
    case INITIALIZE_USER:
      return {
        ...state,
      }
    case UPDATE_USER:
      return {
        ...state,
        data: action.payload.user
      }
    default:
      return state
  }
}

export default userReducer
