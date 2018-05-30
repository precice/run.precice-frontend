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
import withTracker from './googleAnalytics';
import NotFound from './containers/NotFound';

var pathToRegexp = require('path-to-regexp');


const RouteWithSubRoutes = (route: RouteDefinition) => {
  const childRoutes = route.childRoutes && route.childRoutes.map((cr, i) => <RouteWithSubRoutes key={i} {...cr}/>);

  const render = (props: any) => { 

    var keys = [];
    var re = pathToRegexp(route.allowedNext, keys, { sensitive: false, strict: false, end: false } );
    const match = re.exec( props.location.pathname );

    if (!match) { 
        return  (
        <NotFound {...props}/> );
    }
    return (
        // pass the sub-routes down to keep nesting
        <route.component {...props}>
        {childRoutes}
        </route.component>
    ); 
  };

  return <Route exact={!childRoutes} path={route.path} component={withTracker(render)}/>;
};


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RouteWithSubRoutes {...rootRoute} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app-root'),
);


