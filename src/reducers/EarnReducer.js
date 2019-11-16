import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
	loginRequest: ['userId'],
	spendingsRequest: ['userId'],
	challengesRequest: ['userId'],
	wishListRequest: ['userId'],

	challengeApplyRequest: ['userId', 'challengeId', 'wishId'],
	wishListApplyRequest: ['userId', 'wishItemId'],

	challengeUnApplyRequest: ['userId', 'challengeId'],
	wishListUnApplyRequest: ['userId', 'wishItemId'],

	spendingsSuccess: ['spendigs'],
	challengesSuccess: ['challenges'],
	wishListSuccess: ['wishList'],

	challengeUpdateSuccess: ['challenge'],
	wishItemUpdateSuccess: ['wishItem'],

	spendingsFailure: ['error'],
	challengesFailure: ['error'],
	wishListFailure: ['error'],

	wishItemCreate: ['userId', 'name', 'price', 'photo_url'],
	wishItemCreateSuccess: ['newWithItem'],
})

export const EarnTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
	user: {
		id: 2,
	},

	spendigs: [],
	challenges: [],

	spendingsFetching: false,
	wishList: [],

	challengesFetching: false,

	spendingsError: null,
	wishListFetching: false,

	challengesError: null,
	wishListError: null,
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

export const wishListRequest = (state, action) =>
	state.merge({
		wishListFetching: true,
	})

export const challengesSuccess = (state, action) =>
	state.merge({
		challengesFetching: false,
		challengesError: null,
		challenges: action.challenges,
	})
export const wishListSuccess = (state, action) =>
	state.merge({
		wishListFetching: false,
		wishListError: null,
		wishList: action.wishList,
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
export const wishItemUpdateSuccess = (state, action) =>
	state.merge({
		wishListFetching: false,
		wishListError: null,
		wishList: state.wishList
			.map((oldItem) =>
				oldItem.id === action.wishItem.id
					? action.wishItem
					: oldItem,
			),
	})

export const challengesFailure = (state, action) =>
	state.merge({
		challengesFetching: false,
		challengesError: action.error,
	})
export const wishListFailure = (state, action) =>
	state.merge({
		wishListFetching: false,
		wishListError: action.error,
	})

export const wishItemCreateSuccess = (state, action) =>
	state.merge({
		wishListFetching: false,
		wishListError: null,
		wishList: [...state.wishList, ...(action.newWithItem ? [action.newWithItem] : [])],
	})

export const reducer = createReducer(INITIAL_STATE, {
	[Types.LOGIN_REQUEST]: loginRequest,
	[Types.SPENDINGS_REQUEST]: spendingsRequest,

	[Types.CHALLENGES_REQUEST]: challengesRequest,
	[Types.CHALLENGE_APPLY_REQUEST]: challengesRequest,
	[Types.CHALLENGE_UN_APPLY_REQUEST]: challengesRequest,

	[Types.WISH_LIST_REQUEST]: wishListRequest,

	[Types.CHALLENGE_APPLY_REQUEST]: challengesRequest,
	[Types.WISH_LIST_APPLY_REQUEST]: wishListRequest,

	[Types.CHALLENGE_UN_APPLY_REQUEST]: challengesRequest,
	[Types.WISH_LIST_UN_APPLY_REQUEST]: wishListRequest,

	[Types.SPENDINGS_SUCCESS]: spendingsSuccess,
	[Types.CHALLENGES_SUCCESS]: challengesSuccess,
	[Types.WISH_LIST_SUCCESS]: wishListSuccess,

	[Types.CHALLENGE_UPDATE_SUCCESS]: challengesUpdateSuccess,
	[Types.WISH_ITEM_UPDATE_SUCCESS]: wishItemUpdateSuccess,

	[Types.SPENDINGS_FAILURE]: spendingsFailure,
	[Types.CHALLENGES_FAILURE]: challengesFailure,
	[Types.WISH_LIST_FAILURE]: wishListFailure,

	[Types.WISH_ITEM_CREATE]: wishListRequest,
	[Types.WISH_ITEM_CREATE_SUCCESS]: wishItemCreateSuccess,
})
