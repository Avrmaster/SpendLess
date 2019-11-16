import { createTransform } from 'redux-persist'

function isBlackListedKey (key) {
  return /.*[Ff]etching.*|.*[Ee]rror.*/.test(key) || key === 'invite'
}

const CleanupPersistenceTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, reducerName) => inboundState,

  // transform state being rehydrated
  (outboundState, reducerName) => {
    const stateToRestore = {}
    for (const key in outboundState) {
      if (!isBlackListedKey(key)) {
        stateToRestore[key] = outboundState[key]
      }
    }
    return stateToRestore
  },

  // define which reducers this transform gets called for.
  { whitelist: ['shifts', 'account', 'profile'] },
)

export default CleanupPersistenceTransform
