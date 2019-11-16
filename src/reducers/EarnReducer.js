import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
	challengesRequest: ['userId'],
	challengeApplyRequest: ['userId', 'challengeId'],
	challengeUnApplyRequest: ['userId', 'challengeId'],

	challengesSuccess: ['challenges'],
	challengeUpdateSuccess: ['challenge'],

	challengesFailure: ['error'],
})

export const EarnTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
	user: {
		id: 1,
	},

	challenges: [],
	challengesFetching: false,
	challengesError: null,
})

/* ------------- Reducers ------------- */
export const challengesRequest = (state, action) =>
	state.merge({
		challengesFetching: true,
	})
export const challengesSuccess = (state, action) =>
	state.merge({
		challengesFetching: false,
		challengesError: null,
		challenges: action.challenges,
	})
export const challengesUpdateSuccess = (state, action) =>
	state.merge({
		challengesFetching: false,
		challengesError: null,
		challenges: state.challenges
			.map((oldChallenge) =>
				oldChallenge.id === action.challenge.id
					? action.challenge
					: oldChallenge,
			),
	})
export const challengesFailure = (state, action) =>
	state.merge({
		challengesFetching: false,
		challengesError: action.error,
	})

export const reducer = createReducer(INITIAL_STATE, {
	[Types.CHALLENGES_REQUEST]: challengesRequest,
	[Types.CHALLENGE_APPLY_REQUEST]: challengesRequest,
	[Types.CHALLENGE_UN_APPLY_REQUEST]: challengesRequest,

	[Types.CHALLENGES_SUCCESS]: challengesSuccess,
	[Types.CHALLENGE_UPDATE_SUCCESS]: challengesUpdateSuccess,

	[Types.CHALLENGES_FAILURE]: challengesFailure,
})
