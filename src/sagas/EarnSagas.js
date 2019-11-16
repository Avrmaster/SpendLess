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

export function* applyChallenge(action) {
	try {
		const aChallenge = yield call(Api.applyChallenge, action.userId, action.challengeId, action.wishId)
		yield put(EarnActions.challengeUpdateSuccess(aChallenge))
	} catch (error) {
		yield put(EarnActions.challengesFailure(error))
	}
}

export function* unapplyForChallenge(action) {
	try {
		const aChallenge = yield call(Api.unappplyChallenge, action.userId, action.challengeId)
		yield put(EarnActions.challengeUpdateSuccess(aChallenge))
	} catch (error) {
		yield put(EarnActions.challengesFailure(error))
	}
}

export function* getSpendings(action) {
	try {
		const spendings = yield call(Api.getSpendings, action.userId)
		yield put(EarnActions.spendingsSuccess(spendings))
	} catch (error) {
		yield put(EarnActions.spendingsFailure(error))
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
