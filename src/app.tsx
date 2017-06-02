import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {
  Route,
} from 'react-router-dom';

import './sass/global.scss';
import { history, rootRoute, RouteDefinition } from './router';
import { ConnectedRouter } from 'react-router-redux';
const a = store;

const RouteWithSubRoutes = (route: RouteDefinition) => {
  const childRoutes = route.childRoutes && route.childRoutes.map((cr, i) => {
      return <RouteWithSubRoutes key={i} {...cr}/>;
    });

  const render = (props: any) => (
    // pass the sub-routes down to keep nesting
    <route.component {...props}>
      {childRoutes}
    </route.component>
  );

  return <Route exact={!childRoutes} path={route.path} render={render}/>;
};


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RouteWithSubRoutes {...rootRoute} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app-root'),
);


