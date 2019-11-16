import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
	challengesRequest: null,
	challengeApplyRequest: ['id'],

	challengesSuccess: ['challenges'],
	challengeApplySuccess: ['challenge'],

	challengesFailure: ['error'],
	challengeApplyFailure: ['error'],
})

export const EarnTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
	challenges: [],
	challengesFetching: false,
	challengesError: null,
})

/* ------------- Reducers ------------- */
export const challengesRequest = (state, action) =>
	state.merge({
		challengesFetching: true,
		challengesError: null,
	})
export const challengesSuccess = (state, action) =>
	state.merge({
		challengesFetching: false,
		challengesError: null,
		challenges: action.challenges,
	})
export const challengesFailure = (state, action) =>
	state.merge({
		challengesFetching: false,
		challengesError: action.error,
	})

export const reducer = createReducer(INITIAL_STATE, {
	[Types.CHALLENGES_REQUEST]: challengesRequest,
	[Types.CHALLENGES_SUCCESS]: challengesSuccess,
	[Types.CHALLENGES_FAILURE]: challengesFailure,
})
