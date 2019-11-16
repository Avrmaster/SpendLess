import React from 'react'

import { navigationRef } from '../navigation/NavigationStructureWithRedux'

export function* logout() {
	navigationRef.safeResetTo('LoginScreen')
}

export function* navigateToRequest(action) {
	const { goalRoute, options } = action
	navigationRef.navigateTo(goalRoute, options)
}

export function* profileAutoNavigationRequest(action) {
	const { profile } = action

}
