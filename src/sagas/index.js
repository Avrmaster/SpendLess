import { all, takeLatest } from 'redux-saga/effects'
import React from 'react'

/* ------------- Types ------------- */
import { NavigationTypes } from '../reducers/NavigationReducer'
import { EarnTypes } from '../reducers/EarnReducer'

/* ------------- Sagas ------------- */
import {
	logout,
	navigateToRequest,
	profileAutoNavigationRequest,
} from './NavigationSagas'
import {
	getSpendings,
	getWishList,
	getChallenges,
	applyChallenge,
	unapplyForChallenge,
} from './EarnSagas'

/* ------------- Connect Types To sagas ------------- */
export default function* root() {
	yield all([
		takeLatest(NavigationTypes.LOGOUT_REQUEST, logout),
		takeLatest(NavigationTypes.NAVIGATE_TO_REQUEST, navigateToRequest),
		takeLatest(NavigationTypes.AUTO_NAVIGATION_REQUEST, profileAutoNavigationRequest),

		takeLatest(EarnTypes.WISH_LIST_REQUEST, getWishList),
		takeLatest(EarnTypes.SPENDINGS_REQUEST, getSpendings),
		takeLatest(EarnTypes.CHALLENGES_REQUEST, getChallenges),

		takeLatest(EarnTypes.CHALLENGE_APPLY_REQUEST, applyChallenge),
		takeLatest(EarnTypes.CHALLENGE_UN_APPLY_REQUEST, unapplyForChallenge),
	])
}
