## 1. reducerのcombine設定を用意

[src/core/reducers.ts](../src/core/reducers.ts)

```ts
import { combineReducers } from 'redux'
import userReducer from '../reducers/userReducer' // reducer

const rootReducer = () => combineReducers({
  user: userReducer // reducerを任意の命名でcombineする
})

export default rootReducer
```

## 2. redux-sagaのcombine設定を用意

[src/sagas/index.ts](../src/sagas/index.ts)

redux-sagaにはcombineするための関数が用意されているわけではない
forkで非同期的にタスクを呼び出すことでcombineっぽい感じにしている

```ts
import { fork } from 'redux-saga/effects'

// sagas
import UserSaga from '../sagas/User'

export function* rootSaga() {
  // 追加したいsagaをここでforkする
  yield fork(UserSaga)
}
```

## 3. storeをexportしてProviderする

[src/core/store.ts](../src/core/store.ts)で↑でcombineしていったのをconfigureStoreする

あとはreduxのスコープにしたい箇所でstoreをProvideする
今回はrootとなる[src/index.tsx](../src/index.tsx)で

```tsx
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## 4. あとはステートごとに好きにやる

通常のredux的な使い方がしたいのであれば
- `actions`でactionCreatorを定義して
- `adapters`でstateやdispatcherをpropsとしてコンポーネントに受け渡す実装をして
- `entities`でデータの実体を定義してやって
- `reducers`でreducerを作ってreducerを作ってやって
- `src/core/reducers.ts`にreducerをぶち込む

非同期処理を含むのであれば↑に加えて`sagas`や`repositories`に関数を定義していって
完成したタスク達を`src/sagas/index.ts`でcombineしてやる

それぞれのサンプル

| type | file |
|---|---|
| action | [userAction.ts](../src/actions/userAction.ts) |
| adapter | [appAdapter.ts](../src/adapters/appAdapter.ts) |
| entity | [UserEntity.ts](../src/entities/UserEntity.ts) |
| reducer | [userReducer.ts](../src/reducers/userReducer.ts) |
| repository | [userRepository.ts](../src/repositories/userRepository.ts) |
| saga | [index.ts](../src/sagas/User/index.ts), [User.ts](../src/sagas/User/User.ts) |
