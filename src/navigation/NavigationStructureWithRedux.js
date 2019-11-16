import { createAppContainer } from 'react-navigation'
import { connect } from 'react-redux'
import React from 'react'

import AppNavigation, { generateResetAction } from './NavigationStructure'

const AppNavigationWithRedux = createAppContainer(AppNavigation)

export const navigationRef = {
	goBack: () => {
		console.log(navigationRef.ref)
		// navigationRef.ref?.goBack()
	},

	resetTo: (routeName) => {
		const { _navigation } = navigationRef.ref

		if (navigationRef.getCurrentRouteName() !== routeName) {
			_navigation.dispatch(generateResetAction(routeName))
		}
	},
	safeResetTo: (routeName) => {
		if (navigationRef.ref) {
			setTimeout(() => {
				navigationRef.resetTo(routeName)
			}, 0)
		}
	},
	getCurrentRouteName: () => {
		try {
			const { _navigation } = navigationRef.ref
			return _navigation.state.routes[_navigation.state.index].routeName
		} catch {
			return null
		}
	},
	navigateTo: (route, options) => {
		navigationRef.ref?._navigation?.navigate?.(route, options)
	},
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(function () {
	return <AppNavigationWithRedux
		ref={node => {
			navigationRef.ref = node
		}}
	/>
})
