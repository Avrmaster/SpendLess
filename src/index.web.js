import React from 'react'
import { AppRegistry } from 'react-native'
import App from './containers/App'

import 'web-modules/react-web-vector-icons/fonts'

XMLHttpRequest = global.originalXMLHttpRequest
	? global.originalXMLHttpRequest
	: global.XMLHttpRequest

global.FormData = global.originalFormData
	? global.originalFormData
	: global.FormData

if (window.__FETCH_SUPPORT__) {
	window.__FETCH_SUPPORT__.blob = false
}

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', {
	initialProps: {},
	rootTag: document.getElementById('root'),
})
