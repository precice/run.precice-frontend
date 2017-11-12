"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationSelector = (state) => {
    return state.getIn(['route']).location;
};
//# sourceMappingURL=selectors.js.map