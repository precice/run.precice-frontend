"use strict";
/*
 *
 * Example reducer
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const constants_1 = require("../constants");
const initialState = immutable_1.fromJS({
    example: '123',
});
function exampleReducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.EXAMPLE_ACTION:
            return state
                .set('exampleField', action.newText);
        default:
            return state;
    }
}
exports.default = exampleReducer;
//# sourceMappingURL=reducer.js.map