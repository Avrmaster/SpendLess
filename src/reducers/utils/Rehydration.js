import { persistStore } from 'redux-persist'

const updateReducers = (store) => {
  return persistStore(store)
}

export default { updateReducers }
