import thunk from 'redux-thunk';
import { createStore, combineReducers ,applyMiddleware, compose  } from 'redux';
import { authReducer } from '../reducers/auth.reducers';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
   composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};