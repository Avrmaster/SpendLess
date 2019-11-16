import { fadeOut, fromRight } from 'react-navigation-transitions'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import { withBarStyleListener } from './utils'

import { NavigationActions, StackActions } from 'react-navigation'
import {
	SpendingsTab,
	ChallengesTab,
	ChallengeDetailsPage,
	WishlistTab,
	AccountTab,
} from 'containers'

export default createBottomTabNavigator(
	{
		Spendings: withBarStyleListener(SpendingsTab, 'dark-content'),
		Challenges: (
			createStackNavigator(
				{
					tab: withBarStyleListener(ChallengesTab, 'light-content'),
					details: withBarStyleListener(ChallengeDetailsPage, 'dark-content'),
				},
				{
					initialRouteName: 'tab',
					mode: 'modal',
					headerMode: 'none',
				},
			)
		),
		Wishlist: withBarStyleListener(WishlistTab, 'dark-content'),
		Account: withBarStyleListener(AccountTab, 'dark-content'),
	}, {
		lazy: false,
		order: ['Challenges', 'Spendings', 'Wishlist', 'Account'],
	},
)

export function createNavigation(context, routeKey) {
	return (options) => context.props.navigation.navigate(routeKey, options)
}

export function createBackNavigation(context) {
	return () => context.props.navigation.goBack()
}

export function createResetNavigation(context, goalRoot) {
	return (options) => context.props.navigation.dispatch(generateResetAction(goalRoot, options))
}

export const generateResetAction = (routeName, params) => {
	return StackActions.reset({
		index: 0,
		key: null,
		actions: [
			NavigationActions.navigate({ routeName, params }),
		],
	})
}
