"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBrowserHistory_1 = require("history/createBrowserHistory");
const react_router_redux_1 = require("react-router-redux");
const Root_1 = require("./components/Root");
const LandingPage_1 = require("./components/LandingPage");
const Example_1 = require("./containers/Example");
const Tutorial_1 = require("./containers/Tutorial");
const Step1_1 = require("./containers/Step1");
const Step2_1 = require("./containers/Step2");
const Step3_1 = require("./containers/Step3");
const Step4_1 = require("./containers/Step4");
const sub1_1 = require("./containers/sub1");
const sub2_1 = require("./containers/sub2");
const sub3_1 = require("./containers/sub3");
const sub4_1 = require("./containers/sub4");
const sub5_1 = require("./containers/sub5");
const sub6_1 = require("./containers/sub6");
// Create a history of your choosing (we're using a browser history in this case)
exports.history = createBrowserHistory_1.default();
// Build the middleware for intercepting and dispatching navigation actions
exports.routerMiddlewareInstace = react_router_redux_1.routerMiddleware(exports.history);
const rootRouteRaw = {
    path: '',
    component: Root_1.default,
    childRoutes: [
        {
            path: '/',
            component: LandingPage_1.default,
        },
        {
            path: '/example',
            component: Example_1.default,
        },
        {
            path: '/tutorial',
            component: Tutorial_1.default,
            childRoutes: [
                {
                    path: '/step1',
                    component: Step1_1.default,
                },
                {
                    path: '/step2',
                    component: Step2_1.default,
                    childRoutes: [
                        {
                            path: '/sub1',
                            component: sub1_1.default,
                        },
                        {
                            path: '/sub2',
                            component: sub2_1.default,
                        },
                        {
                            path: '/sub3',
                            component: sub3_1.default,
                        },
                        {
                            path: '/sub4',
                            component: sub4_1.default,
                        },
                        {
                            path: '/sub5',
                            component: sub5_1.default,
                        },
                        {
                            path: '/sub6',
                            component: sub6_1.default,
                        },
                    ],
                },
                {
                    path: '/step3',
                    component: Step3_1.default,
                },
                {
                    path: '/step4',
                    component: Step4_1.default,
                },
            ],
        },
    ],
};
exports.rootRoute = addPaths(rootRouteRaw);
function addPaths(route) {
    if (route.childRoutes) {
        route.childRoutes = route.childRoutes.map((cR) => {
            cR.path = route.path + cR.path;
            return addPaths(cR);
        });
    }
    return route;
}
//# sourceMappingURL=router.js.map