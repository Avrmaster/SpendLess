import { call, put } from 'redux-saga/effects'
import React from 'react'

import EarnActions from 'reducers/EarnReducer'
import * as Api from 'api/Api'

export function* getChallenges(action) {
	try {
		const challenges = yield call(Api.getChallenges, action.userId)
		yield put(EarnActions.challengesSuccess(challenges))
	} catch (error) {
		yield put(EarnActions.challengesFailure(error))
	}
}


export function* getWishList(action) {
	try {
		const wishList = yield call(Api.getWishList, action.userId)
		yield put(EarnActions.wishListSuccess(wishList))
	} catch (error) {
		yield put(EarnActions.wishListFailure(error))
	}
}

export function* applyChallenge(action, api: ApiClient) {

}

export function* unapplyForChallenge(action, api: ApiClient) {

}
