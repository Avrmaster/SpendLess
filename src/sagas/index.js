import { all, takeLatest } from 'redux-saga/effects'
import React from 'react'

/* ------------- Types ------------- */
import { NavigationTypes } from '../reducers/NavigationReducer'
import { challengesRequest, EarnTypes } from '../reducers/EarnReducer'

/* ------------- Sagas ------------- */
import {
	logout,
	navigateToRequest,
	profileAutoNavigationRequest,
} from './NavigationSagas'
import {
	getChallenges,
	applyChallenge,
	unapplyForChallenge,
} from './EarnSagas'

/* ------------- API ------------- */
import ApiClient from 'api/ApiClient'

const client = new ApiClient()

/* ------------- Connect Types To sagas ------------- */
export default function* root() {
	yield all([
		takeLatest(NavigationTypes.LOGOUT_REQUEST, logout),
		takeLatest(NavigationTypes.NAVIGATE_TO_REQUEST, navigateToRequest),
		takeLatest(NavigationTypes.AUTO_NAVIGATION_REQUEST, profileAutoNavigationRequest),

		takeLatest(EarnTypes.CHALLENGES_REQUEST, getChallenges, client),
		takeLatest(EarnTypes.CHALLENGE_APPLY_REQUEST, applyChallenge, client),
		takeLatest(EarnTypes.CHALLENGE_UN_APPLY_REQUEST, unapplyForChallenge, client),
	])
}
