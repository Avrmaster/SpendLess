import { all, takeLatest } from 'redux-saga/effects'
import React from 'react'

/* ------------- Types ------------- */
import { NavigationTypes } from '../reducers/NavigationReducer'

/* ------------- Sagas ------------- */
import {
	logout,
	navigateToRequest,
	profileAutoNavigationRequest,
} from './NavigationSagas'

/* ------------- API ------------- */

/* ------------- Connect Types To sagas ------------- */
export default function* root() {
	yield all([
		takeLatest(NavigationTypes.LOGOUT_REQUEST, logout),
		takeLatest(NavigationTypes.NAVIGATE_TO_REQUEST, navigateToRequest),
		takeLatest(NavigationTypes.AUTO_NAVIGATION_REQUEST, profileAutoNavigationRequest),
	])
}
