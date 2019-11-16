import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
// noinspection ES6CheckImport
import createSagaMiddleware from 'redux-saga'

import ScreenTracking from './ScreenTrackingMiddleware'
import Rehydration from './Rehydration'
import { ReduxPersist } from 'config'

// creates the store
export default (rootReducer, rootSaga) => {
	/* ------------- reducers Configuration ------------- */

	const middleware = []
	const enhancers = []

	/* ------------- Navigation Middleware ------------ */
	const navigationMiddleware = createReactNavigationReduxMiddleware(
		state => state.nav,
		'root',
	)
	middleware.push(navigationMiddleware)

	/* ------------- Analytics Middleware ------------- */
	middleware.push(ScreenTracking)

	/* ------------- Saga Middleware ------------- */

	const sagaMiddleware = createSagaMiddleware()
	middleware.push(sagaMiddleware)

	/* ------------- Assemble Middleware ------------- */

	enhancers.push(applyMiddleware(...middleware))

	const store = createStore(
		rootReducer,
		composeWithDevTools(...enhancers),
	)

	// configure persistStore and check reducer version number
	let persistor = null
	if (ReduxPersist.active) {
		persistor = Rehydration.updateReducers(store)
	}

	// kick off root saga
	let sagasManager = sagaMiddleware.run(rootSaga)

	return {
		store,
		sagasManager,
		sagaMiddleware,
		persistor,
	}
}
