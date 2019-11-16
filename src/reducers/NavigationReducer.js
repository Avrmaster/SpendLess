import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  logoutRequest: null,
  navigateToRequest: ['goalRoute', 'options'],
  autoNavigationRequest: ['profile'],
})

export const NavigationTypes = Types
export default Creators

export const reducer = createReducer(Immutable({}), {})
