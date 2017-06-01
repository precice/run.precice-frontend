/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose, Middleware, StoreEnhancer } from 'redux';
import { combineReducers } from 'redux-immutable';
import allReducers from './containers/reducers';
import { Map } from 'immutable';


const middlewares: Middleware[] = [];

// const enhancers: StoreEnhancer<Map>[] = [
//   applyMiddleware(...middlewares),
// ];


const store = createStore(
  combineReducers(allReducers),
  compose(applyMiddleware(...middlewares))
);


export default store;

