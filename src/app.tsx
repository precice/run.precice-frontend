import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import LandingPage from "./components/LandingPage/index";
import Example from "./containers/Example/index";

import './sass/global.scss';
import { rootRoute, RouteDefinition } from "./routeDefinitions";


const RouteWithSubRoutes = (route: RouteDefinition) => {
  let childRoutes = route.childRoutes;
  if (childRoutes && !Array.isArray(childRoutes)) {
    childRoutes = [childRoutes];
  }

  const render = (props: any) => (
    // pass the sub-routes down to keep nesting
    <route.component {...props}>
      {childRoutes && childRoutes.map((cr, i) => {
        return <RouteWithSubRoutes key={i} {...cr}/>
      })}
    </route.component>
  );

  return <Route exact={!childRoutes} path={route.path} render={render}/>;
}


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RouteWithSubRoutes {...rootRoute} />
    </Router>
  </Provider>,
  document.getElementById('app-root')
);


