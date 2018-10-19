import { routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import golobal from './reducer/golobal';
import userLayout from './reducer/userLayout';
import centerLayout from './reducer/CenterLayout';

const persistConfig = {
  key: 'root',
  storage,
};

const combine = combineReducers({
  userLayout,
  golobal,
  centerLayout,
});

const persistedReducer = persistReducer(persistConfig, combine);

const middleware = [thunk];

// eslint-disable-next-line
export const store = createStore(
  combineReducers({
    persistedReducer,
    routing: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
