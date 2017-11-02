"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
const step3SubstateSelector = (state) => {
    return state.get('step3');
};
exports.hidCheckSelector = () => reselect_1.createSelector(step3SubstateSelector, (step3Substate) => step3Substate.get('hidCheck'));
// TODO:
// chartDataSelector for getting data
// This is just a dummy selector for now
// We need to add functionality
// Think about how we represent data
// arriving from the server. How do we store
// that? Do we have the entire set of data available in
// the redux store or do we have a local representation
// that we update based on new values arriving
// from the server?
exports.chartDataSelector = () => reselect_1.createSelector(step3SubstateSelector, (step3Substate) => step3Substate.get('chartData'));
//# sourceMappingURL=selectors.js.map