"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
// TODO:
// We added something to reducers so this is
// probably what we need. But let's be sure and
// investigate.
const chartDataSubstateSelector = (state) => {
    return state.get('chartData');
};
// Returns plot points from state
exports.chartDataSelector = () => reselect_1.createSelector(chartDataSubstateSelector, (chartDataSubstate) => {
    return chartDataSubstate.data;
});
exports.domainXSelector = () => reselect_1.createSelector(chartDataSubstateSelector, (chartDataSubstate) => {
    return chartDataSubstate.domainX;
});
exports.domainYSelector = () => reselect_1.createSelector(chartDataSubstateSelector, (chartDataSubstate) => {
    return chartDataSubstate.domainX;
});
// Returns percentage for progress bar
exports.percentProgressSelector = () => reselect_1.createSelector(chartDataSubstateSelector, (chartDataSubstate) => {
    const currDt = chartDataSubstate.currDt;
    const maxDt = chartDataSubstate.maxDt;
    if (currDt === 0) {
        return 0;
    }
    else {
        // Round to nearest integer - No fractional progress
        return (Math.round(currDt / maxDt)) * 100;
    }
});
// For showing the total time
exports.totalTimeSelector = () => reselect_1.createSelector(chartDataSubstateSelector, (chartDataSubstate) => {
    return chartDataSubstate.totalTime;
});
//# sourceMappingURL=selectors.js.map