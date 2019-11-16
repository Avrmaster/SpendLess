import { fadeOut, fromRight } from 'react-navigation-transitions'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'

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
		Spendings: withBarStyleListener(SpendingsTab, 'light-content'),
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
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state

				if (routeName === 'Spendings') {
					return <FontAwesome5 name={'money-check-alt'} size={25} color={tintColor}/>
				} else if (routeName === 'Challenges') {
					return <MaterialCommunityIcons name={'playlist-star'} size={25} color={tintColor}/>
				} else if (routeName === 'Wishlist') {
					return <Octicons name={'checklist'} size={25} color={tintColor}/>
				}

				return <AntDesign name={'user'} size={25} color={tintColor}/>
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
