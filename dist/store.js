"use strict";
/**
 * Create the store
 */
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_immutable_1 = require("redux-immutable");
const reducers_1 = require("./containers/reducers");
const router_1 = require("./router");
const immutable_1 = require("immutable");
const io = require("socket.io-client");
const redux_socket_io_1 = require("redux-socket.io");
const index_1 = require("./containers/Step3/index");
const socket = io('http://localhost:3001');
// const socket = io('http://131.159.36.247:3001');
const middlewares = [
    router_1.routerMiddlewareInstace,
    redux_socket_io_1.default(socket, 'socket/'),
    index_1.consoleMiddleware,
];
const enhancers = [
    redux_1.applyMiddleware(...middlewares),
];
// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || redux_1.compose; // tslint:disable-line:no-string-literal
const store = redux_1.createStore(redux_immutable_1.combineReducers(reducers_1.default), immutable_1.fromJS({}), composeEnhancers(...enhancers));
exports.default = store;
//# sourceMappingURL=store.js.map