import React from 'react'
import { AppRegistry } from 'react-native'
import App from './containers/InitScreen'

AppRegistry.registerComponent('App', () => {
	return () => <App
		onAnimationFinished={() => {

		}}
	/>
})
AppRegistry.runApplication('App', {
	initialProps: {},
	rootTag: document.getElementById('root'),
})
