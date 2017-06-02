import Root from "./components/Root";
import LandingPage from "./components/LandingPage";
import Example from "./containers/Example";


export type RouteDefinition = {
  path: string,
  component: any,
  childRoutes?: [RouteDefinition],
};


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
    }
  ]
};


