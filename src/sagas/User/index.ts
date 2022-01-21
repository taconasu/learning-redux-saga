import { fork } from 'redux-saga/effects'
import { watchInitializeUser } from './User'

export default function* UserSaga() {
  yield fork(watchInitializeUser)
}
