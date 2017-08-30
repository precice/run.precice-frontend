/**
 * Create the store
 */

import { createStore, applyMiddleware, compose, Middleware, StoreEnhancer, GenericStoreEnhancer } from 'redux';
import { combineReducers } from 'redux-immutable';
import allReducers from './containers/reducers';
import { routerMiddlewareInstace } from './router';
import { fromJS } from 'immutable';
import * as io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';
import { consoleMiddleware } from './containers/Step3/index';

const socket = io('http://localhost:3001');

const middlewares: Middleware[] = [
  routerMiddlewareInstace,
  createSocketIoMiddleware(socket, 'socket/'),
  consoleMiddleware,
];

const enhancers: GenericStoreEnhancer[] = [
  applyMiddleware(...middlewares),
];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers: (...enhancers: GenericStoreEnhancer[]) => GenericStoreEnhancer =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose; // tslint:disable-line:no-string-literal

const store = createStore(
  combineReducers(allReducers),
  fromJS({}),
  composeEnhancers(...enhancers),
);


export default store;

