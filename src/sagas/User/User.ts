import { call, fork, put, takeEvery } from "redux-saga/effects";
import { INITIALIZE_USER, updateUser } from '../../actions/userAction'
import { UserEntity } from "../../entities/UserEntity";
import { userRepository } from '../../repositories/userRepository'

/**
 * INITIALIZE_USER actionがdispatchされたら発火するくん
 */
export function* watchInitializeUser() {
  // takeEvery: 第一引数に指定したactionがdispatchされたら第二引数で定義したジェネレータ関数が発火
  yield takeEvery(INITIALIZE_USER, function* () {
    yield fork(function* () {
      try {
        // call: タスクを同期実行 (APIコールなどに便利)
        const user: UserEntity = yield call(userRepository.fetch)
        // put: 指定したactionをdispatch
        yield put(updateUser(user))
      } catch(e: any) {
        // エラー時の処理
      }
    })
  })
}
