import { Platform, StatusBar } from 'react-native'
import React, { useEffect } from 'react'

export function withStatusBar(Screen, barStyle = 'light-content') {
	return function (props) {
		return (
			<React.Fragment>
				<StatusBar
					translucent
					barStyle={barStyle}
					backgroundColor={'transparent'}
				/>
				<Screen {...props} />
			</React.Fragment>
		)
	}
}

export function withBarStyleListener(Screen, barStyle = 'light-content') {
	function listener() {
		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent')
			StatusBar.setTranslucent(true)
		}
		StatusBar.setBarStyle(barStyle)
	}

	function toReturn(props) {
		useEffect(() => {
			return props.navigation.addListener('didFocus', listener).remove
		}, [])

		return <Screen {...props} />
	}

	toReturn.router = Screen.router
	return toReturn
}
