import { fork } from 'redux-saga/effects'

// sagas
import UserSaga from '../sagas/User'

export function* rootSaga() {
  // 追加したいsagaをここでforkする
  yield fork(UserSaga)
}