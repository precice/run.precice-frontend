import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';


import Root from './components/Root';
import LandingPage from './components/LandingPage';
import Example from './containers/Example';


export interface RouteDefinition {
  path: string;
  component: any;
  childRoutes?: [RouteDefinition];
}


export const rootRoute: RouteDefinition = {
  path: '/',
  component: Root,
  childRoutes: [
    {
      path: '/',
      component: LandingPage,
    },
    {
      path: '/example',
      component: Example,
    },
  ],
};


// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
export const routerMiddlewareInstace = routerMiddleware(history);

