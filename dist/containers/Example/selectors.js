"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
const exampleSelector = (state) => {
    return state.get('example');
};
exports.exampleFieldSelector = () => reselect_1.createSelector(exampleSelector, (exampleSubstate) => exampleSubstate.get('exampleField'));
//# sourceMappingURL=selectors.js.map