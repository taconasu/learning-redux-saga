import { UserEntity } from '../entities/UserEntity'

export const UPDATE_USER = 'UPDATE_USER'
export const INITIALIZE_USER = 'INITIALIZE_USER'

export type Actions = InitializeUserAction | UpdateUserAction

export interface InitializeUserAction {
  type: 'INITIALIZE_USER'
}

export interface UpdateUserAction {
  type: 'UPDATE_USER',
  payload: {
    user: UserEntity
  }
}

export const initializeUser = () => ({
  type: INITIALIZE_USER
})

export const updateUser = (user: UserEntity): UpdateUserAction => ({
  type: UPDATE_USER,
  payload: {
    user
  }
})
