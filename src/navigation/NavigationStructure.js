import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'

import { withBarStyleListener } from './utils'

import { NavigationActions, StackActions } from 'react-navigation'
import {
	SpendingsTab,
	ChallengesTab,
	ChallengeDetailsPage,
	WishlistTab,
	AccountTab,
	SpendingDetailsPage,
} from 'containers'

import TabBarIcon from './TabBarIcon'

export default createBottomTabNavigator(
	{
		Spendings: (
			createStackNavigator(
				{
					tab: withBarStyleListener(SpendingsTab, 'light-content'),
					details: withBarStyleListener(SpendingDetailsPage, 'light-content'),
				},
				{
					initialRouteName: 'tab',
					mode: 'modal',
					headerMode: 'none',
				},
			)
		),
		Challenges: (
			createStackNavigator(
				{
					tab: withBarStyleListener(ChallengesTab, 'light-content'),
					details: withBarStyleListener(ChallengeDetailsPage, 'light-content'),
				},
				{
					initialRouteName: 'tab',
					mode: 'modal',
					headerMode: 'none',
				},
			)
		),
		Wishlist: withBarStyleListener(WishlistTab, 'light-content'),
		Account: withBarStyleListener(AccountTab, 'light-content'),
	}, {
		lazy: false,
		tabBarOptions: {
			style: {
				height: 65,
			},
		},
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state

				return (
					<TabBarIcon
						routeName={routeName}
						tintColor={tintColor}
					/>
				)
			},
		}),
		order: ['Spendings', 'Challenges', 'Wishlist', 'Account'],
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
