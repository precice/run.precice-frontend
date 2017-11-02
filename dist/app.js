"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const react_router_dom_1 = require("react-router-dom");
require("./sass/global.scss");
const router_1 = require("./router");
const react_router_redux_1 = require("react-router-redux");
const a = store_1.default;
const RouteWithSubRoutes = (route) => {
    const childRoutes = route.childRoutes && route.childRoutes.map((cr, i) => React.createElement(RouteWithSubRoutes, Object.assign({ key: i }, cr)));
    const render = (props) => (
    // pass the sub-routes down to keep nesting
    React.createElement(route.component, Object.assign({}, props), childRoutes));
    return React.createElement(react_router_dom_1.Route, { exact: !childRoutes, path: route.path, render: render });
};
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(react_router_redux_1.ConnectedRouter, { history: router_1.history },
        React.createElement(RouteWithSubRoutes, Object.assign({}, router_1.rootRoute)))), document.getElementById('app-root'));
//# sourceMappingURL=app.js.map