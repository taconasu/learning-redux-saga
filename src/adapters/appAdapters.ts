import { App } from '../App'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { UserEntity } from '../entities/UserEntity'
import { initializeUser, updateUser } from '../actions/userAction'
import { UserState } from '../reducers/userReducer'

interface StateProps {
  user: UserState
}
const mapStateToProps = (state: StateProps) => ({
  ...state,
})

export interface DispatchProps {
  initialize: () => void
  update: (user: UserEntity) => void
}

export const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  initialize: () => {
    dispatch(initializeUser())
  },
  update: (user: UserEntity) => {
    dispatch(updateUser(user))
  }
})

export type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
