import { call, put } from 'redux-saga/effects'
import React from 'react'

import EarnActions from 'reducers/EarnReducer'
import ApiClient from 'api/ApiClient'

export function* getChallenges(action, api: ApiClient) {
	try {
		const challenges = yield call(api.app_challenges_get_all, action.id)
		yield put(EarnActions.challengesSuccess(challenges))
	} catch (error) {
		yield put(EarnActions.challengesFailure(error))
	}
}
