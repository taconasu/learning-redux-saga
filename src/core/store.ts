import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit'
import createRootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../sagas'

const rootReducer = createRootReducer()
const sagaMiddleware = createSagaMiddleware()
export type AppState = ReturnType<typeof rootReducer>

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  )
  sagaMiddleware.run(rootSaga)

  return store
}

export const store = configureStore()
