import React from 'react'
import { AppRegistry } from 'react-native'
import App from './containers/App'

import 'web-modules/react-web-vector-icons/fonts'

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', {
	initialProps: {},
	rootTag: document.getElementById('root'),
})
