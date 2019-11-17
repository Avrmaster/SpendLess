import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import * as PropTypes from 'prop-types'

import App from 'containers/App'

PropTypes.component = PropTypes.oneOfType([
	PropTypes.func,
	PropTypes.string,
	PropTypes.shape({render: PropTypes.func.isRequired}),
])

import { name as appName } from './app.json'

XMLHttpRequest = global.originalXMLHttpRequest
	? global.originalXMLHttpRequest
	: global.XMLHttpRequest

global.FormData = global.originalFormData
	? global.originalFormData
	: global.FormData

if (window.__FETCH_SUPPORT__) {
	window.__FETCH_SUPPORT__.blob = false
}

AppRegistry.registerComponent(appName, () => App)
