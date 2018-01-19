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
import Part1 from './containers/Part1';
import Part2 from './containers/Part2';
import Part3 from './containers/Part3';
import Part4 from './containers/Part4';
import Part5 from './containers/Part5';
import Final from './containers/Final';




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
          path: '/part1',
          component: Part1,
          childRoutes: [
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
        {
          path: '/part2',
          component: Part2,
          childRoutes: [
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
        {
          path: '/part3',
          component: Part3,
          childRoutes: [
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
        {
          path: '/part4',
          component: Part4,
          childRoutes: [
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
        {
          path: '/part5',
          component: Part5,
          childRoutes: [
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
    },
    {
      path: '/final',
      component: Final,
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
