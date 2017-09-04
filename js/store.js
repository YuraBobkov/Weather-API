import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import  request  from './middleware';
import  citiesReducer  from './reducers/citiesReducer';
import  weatherReducer  from './reducers/weatherReducer';

const store = createStore(combineReducers({
  cities: citiesReducer,
  weather: weatherReducer,
}),
  applyMiddleware(
    promise(),
    thunk,
    logger(),
    request
  ));

export default store;
