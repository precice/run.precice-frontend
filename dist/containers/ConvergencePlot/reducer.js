"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
// import {fromJS} from 'immutable';
// TODO: Handle totalTime update
function chartDataReducer(state = { data: [{ x: 0, y: 0 }], maxDt: 0, currDt: 0, domainX: 5,
        domainY: 5, totalTime: 0 }, action) {
    switch (action.type) {
        case constants_1.ADD_CHART_DATA:
            // Check whether we need to update domain
            let domainXCurr = state.domainX;
            let domainYCurr = state.domainY;
            if (domainXCurr < action.data.x) {
                domainXCurr = action.data.x;
            }
            if (domainYCurr < action.data.y) {
                domainYCurr = action.data.y;
            }
            return Object.assign({}, state, {
                // data is array of objects
                data: [...state.data, action.data]
            }, { domainX: domainXCurr, domainY: domainYCurr,
                currDt: action.data.x });
        case constants_1.ADD_PROGRESS_MAX_ITER:
            return Object.assign({}, state, { maxDt: action.maxTimeSteps });
        default:
            return state;
    }
}
exports.chartDataReducer = chartDataReducer;
exports.default = chartDataReducer;
//# sourceMappingURL=reducer.js.map