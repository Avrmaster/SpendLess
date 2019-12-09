import React from 'react'
import { AppRegistry } from 'react-native'
import App from './containers/App'

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', {
	initialProps: {},
	rootTag: document.getElementById('root'),
})
