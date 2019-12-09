import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import storage from 'redux-persist/lib/storage'
// import AsyncStorage from '@react-native-community/async-storage'

import immutablePersistenceTransform from 'reducers/utils/ImmutablePersistenceTransform'
import CleanupPersistenceTransform from 'reducers/utils/CleanupPersistenceTransofrm'

const REDUX_PERSIST = {
	active: true,
	reducerVersion: '1.0',
	storeConfig: {
		key: 'primary',
		storage,
		// storage: AsyncStorage,
		blacklist: ['nav'],
		transforms: [immutablePersistenceTransform, CleanupPersistenceTransform],
		stateReconciler: autoMergeLevel1,
	},
}

export default REDUX_PERSIST
