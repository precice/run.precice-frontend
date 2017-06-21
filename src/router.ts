import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';


import Root from './components/Root';
import LandingPage from './components/LandingPage';
import Example from './containers/Example';
import Tutorial from './containers/Tutorial';
import Step1 from './containers/Step1';
import Step2 from './containers/Step2';
import Step3 from './containers/Step3';
import Step4 from './containers/Step4';


// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
export const routerMiddlewareInstace = routerMiddleware(history);


export interface RouteDefinition {
  path: string;
  component: any;
  childRoutes?: RouteDefinition[];
}


const rootRouteRaw: RouteDefinition = {
  path: '',
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
        {
          path: '/step2',
          component: Step2,
        },
        {
          path: '/step3',
          component: Step3,
        },
        {
          path: '/step4',
          component: Step4,
        },
      ],
    },
  ],
};

export const rootRoute = addPaths(rootRouteRaw);


function addPaths(route: RouteDefinition): RouteDefinition {
  if (route.childRoutes) {
    route.childRoutes = route.childRoutes.map((cR) => {
      cR.path = route.path + cR.path;
      return addPaths(cR);
    });
  }
  return route;
}
