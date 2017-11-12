"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
const step3SubstateSelector = (state) => {
    return state.get('step3');
};
exports.hidCheckSelector = () => reselect_1.createSelector(step3SubstateSelector, (step3Substate) => step3Substate.get('hidCheck'));
exports.consoleOneStateSelector = () => reselect_1.createSelector(step3SubstateSelector, (step3Substate) => step3Substate.get('consoleOneActive'));
exports.consoleTwoStateSelector = () => reselect_1.createSelector(step3SubstateSelector, (step3Substate) => step3Substate.get('consoleTwoActive'));
//# sourceMappingURL=selectors.js.map