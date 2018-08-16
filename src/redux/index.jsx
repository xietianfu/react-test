import { routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import golobal from './reducer/golobal';
import userLayout from './reducer/userLayout';

const persistConfig = {
  key: 'root',
  storage,
};

const combine = combineReducers({
  userLayout,
  golobal,
});

const persistedReducer = persistReducer(persistConfig, combine);

// eslint-disable-next-line
export const store = createStore(
  combineReducers({
    persistedReducer,
    routing: routerReducer,
  }),
  composeWithDevTools(applyMiddleware()),
);

export const persistor = persistStore(store);
