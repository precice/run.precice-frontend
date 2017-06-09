import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';


import Root from './components/Root';
import LandingPage from './components/LandingPage';
import Example from './containers/Example';
import Tutorial from './containers/Tutorial';
import Step1 from './containers/Step1';


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
    {
      path: '/tutorial',
      component: Tutorial,
      childRoutes: [
        {
          path: '/step1',
          component: Step1,
        },
      ],
    },
  ],
};


// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
export const routerMiddlewareInstace = routerMiddleware(history);

