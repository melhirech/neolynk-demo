import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';

import { messagesReducer } from './reducers';

// root reducer
const rootReducer = combineReducers({ messagesReducer });

// use redux dev tools
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

// create redux store
const store = createStore(rootReducer, enhancer);

export default store;
