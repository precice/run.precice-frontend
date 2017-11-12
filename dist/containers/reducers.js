"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_redux_1 = require("react-router-redux");
const reducer_1 = require("./Example/reducer");
const reducer_2 = require("./Step1/reducer");
const reducer_3 = require("./Step2/reducer");
const reducer_4 = require("./Step3/reducer");
const reducer_5 = require("./Tutorial/reducer");
const reducer_6 = require("./ConvergencePlot/reducer");
const combined = {
    route: react_router_redux_1.routerReducer,
    example: reducer_1.default,
    tutorial: reducer_5.default,
    step1: reducer_2.default,
    step2: reducer_3.default,
    step3: reducer_4.step3Reducer,
    chartData: reducer_6.default,
};
exports.default = combined;
//# sourceMappingURL=reducers.js.map