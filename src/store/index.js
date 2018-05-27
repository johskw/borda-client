import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {
  routerReducer,
  routerMiddleware
} from 'react-router-redux';
import logger from 'redux-logger';
import bordaReducer from '../reducers';

const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      borda: bordaReducer,
      router: routerReducer
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history)
    )
  );
};

export default createStore;
