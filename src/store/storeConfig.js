import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import citiesReducer from '#/store/reducers/citiesReducer';

const logger = createLogger({ collapsed: true });

const middleware = [thunk];

if (__DEV__) {
  middleware.push(logger);
}

const reducers = combineReducers({
  cities: citiesReducer
});

const storeConfig = () => {
  return createStore(reducers, applyMiddleware(...middleware));
};

export default storeConfig;
