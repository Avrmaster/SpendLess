import { call, put } from 'redux-saga/effects'
import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import Text from 'components/Text'

import EarnActions from 'reducers/EarnReducer'
import * as Api from 'api/Api'
import { popupRef } from '../containers/App/RootContainer'
import { LottieCard } from '../containers/AccountTab/Account.styles'
import Colors from '../themes/Colors'

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
		const subcategories = yield call(Api.getSubcategories, action.userId)
		yield put(EarnActions.spendingsSuccess(spendings, subcategories))
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

export function* createWishItem(action) {
	try {
		const wishItem = yield call(Api.createWishItem, action.userId, action.name, action.price, action.photo_url)
		yield put(EarnActions.wishItemCreateSuccess(wishItem))
	} catch (error) {
		yield put(EarnActions.wishListFailure(error))
	}
}

export function* createSpendingItem(action) {
	try {
		const item = yield call(Api.createSpendItem, action.spendingItem)
		if (item.new_challenge_created) {
			yield put(EarnActions.challengesRequest(action.spendingItem.user_fk))
			setTimeout(() => {
				popupRef.ref.set(
					<View
						style={{
							backgroundColor: '#BBBBBB',
							borderRadius: 20,
						}}
					>
						<LottieView
							style={{
								width: 300,
								height: 300,
							}}
							autoPlay
							loop
							source={require('../../assets/animations/3150-success')}
						/>
						<Text
							style={{
								position: 'absolute',
								color: Colors.main,
								textAlign: 'center',
								left: 0,
								right: 0,
								bottom: 20,
								fontSize: 24,
								fontWeight: 'bold',
							}}
						>
							{`New Challenges\nAvailable`}
						</Text>
					</View>,
				)
			})
		}
		yield put(EarnActions.spendingItemCreateSuccess(item))
	} catch (error) {
		yield put(EarnActions.spendingsFailure(error))
	}
}
