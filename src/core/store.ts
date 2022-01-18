import { createStore } from '@reduxjs/toolkit'
import createRootReducer from './reducers'

const rootReducer = createRootReducer()
export type AppState = ReturnType<typeof rootReducer>

const configureStore = () => {
  const store = createStore(rootReducer)

  return store
}

export const store = configureStore()
