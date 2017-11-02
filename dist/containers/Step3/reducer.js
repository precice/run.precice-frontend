"use strict";
/*
 *
 * Example reducer
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const constants_1 = require("../constants");
const index_1 = require("./index");
const initialState = immutable_1.fromJS({
    consoles: {
        [index_1.ConsoleId.left]: null,
        [index_1.ConsoleId.right]: null,
    },
});
function exampleReducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.INIT_CONSOLE:
            return state
                .setIn(['consoles', action.consoleId], action.console);
        case constants_1.HID_CHECK3:
            return state
                .set('hidCheck', !action.check);
        default:
            return state;
    }
}
exports.default = exampleReducer;
//# sourceMappingURL=reducer.js.map