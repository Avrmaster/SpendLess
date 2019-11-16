import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
	loginRequest: ['userId'],
	spendingsRequest: ['userId'],
	challengesRequest: ['userId'],
	challengeApplyRequest: ['userId', 'challengeId'],
	challengeUnApplyRequest: ['userId', 'challengeId'],

	spendingsSuccess: ['spendigs'],
	challengesSuccess: ['challenges'],
	challengeUpdateSuccess: ['challenge'],

	spendingsFailure: ['error'],
	challengesFailure: ['error'],
})

export const EarnTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
	user: {
		id: 1,
	},

	spendigs: [],
	challenges: [],

	spendingsFetching: false,
	challengesFetching: false,

	spendingsError: null,
	challengesError: null,
})

/* ------------- Reducers ------------- */
export const loginRequest = (state, action) =>
	state.merge({
		user: {
			id: action.userId,
		},
	})

export const spendingsRequest = (state) =>
	state.merge({
		spendingsFetching: true,
	})
export const spendingsSuccess = (state, action) =>
	state.merge({
		spendingsFetching: false,
		spendingsError: null,
		spendings: action.spendigs,
	})
export const spendingsFailure = (state, action) =>
	state.merge({
		spendingsFetching: false,
		spendingsError: action.error,
	})

export const challengesRequest = (state) =>
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
	[Types.LOGIN_REQUEST]: loginRequest,
	[Types.SPENDINGS_REQUEST]: spendingsRequest,
	[Types.CHALLENGES_REQUEST]: challengesRequest,
	[Types.CHALLENGE_APPLY_REQUEST]: challengesRequest,
	[Types.CHALLENGE_UN_APPLY_REQUEST]: challengesRequest,

	[Types.SPENDINGS_SUCCESS]: spendingsSuccess,
	[Types.CHALLENGES_SUCCESS]: challengesSuccess,
	[Types.CHALLENGE_UPDATE_SUCCESS]: challengesUpdateSuccess,

	[Types.SPENDINGS_FAILURE]: spendingsFailure,
	[Types.CHALLENGES_FAILURE]: challengesFailure,
})
