import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'

import configureStore from './utils/CreateStore'
import { ReduxPersist } from 'config'
import rootSaga from '../sagas/'

export default () => {

	function createReducer() {
		return combineReducers({
			nav: require('./NavigationReducer').reducer,
		})
	}

	let combinedReducer = createReducer()

	// If rehydration is on use persistReducer otherwise default combineReducers
	if (ReduxPersist.active) {
		const persistConfig = ReduxPersist.storeConfig
		combinedReducer = persistReducer(persistConfig, combinedReducer)
	}

	let { store, sagasManager, sagaMiddleware, persistor } = configureStore(
		combinedReducer,
		rootSaga,
	)

	if (module.hot) {
		module.hot.accept(() => {
			store.replaceReducer(createReducer())
			const newYieldedSagas = require('../sagas').default
			sagasManager.cancel()
			sagasManager.done.then(() => {
				sagasManager = sagaMiddleware.run(newYieldedSagas)
			})
		})
	}

	return { store, persistor }
}
