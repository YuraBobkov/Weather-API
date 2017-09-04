import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


const store = createStore(combineReducers({
}),
  applyMiddleware(
    promise(),
    thunk,
    logger(),
  ));

export default store;
