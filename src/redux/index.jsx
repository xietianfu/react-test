import { routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userLayout from '../reducer/userLayout';
import golobal from '../reducer/golobal';

// eslint-disable-next-line
export const store = createStore(
  combineReducers({
    userLayout,
    golobal,
    routing: routerReducer,
  }),
  composeWithDevTools(applyMiddleware()),
);
