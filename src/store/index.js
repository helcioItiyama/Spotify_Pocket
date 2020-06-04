import { createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userTypes  from '../types/userTypes';

import reducers from '../reducers';

const rootReducer = (state, action) => {
  if(action.type === userTypes.USER_LOGOUT) {
    state = undefined;
  }
  return reducers(state, action)
}

const persistConfig = {
  key: 'spotify',
  storage,
  blacklist: ['auth', 'content']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistor = persistStore(store);

export { store, persistor };

