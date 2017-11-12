"use strict";
/*
 *
 * Example reducer
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const constants_1 = require("../constants");
true;
const index_1 = require("./index");
const initialState = immutable_1.fromJS({
    consoles: {
        [index_1.ConsoleId.left]: null,
        [index_1.ConsoleId.right]: null,
    },
    consoleOneActive: false,
    consoleTwoActive: false,
});
function step3Reducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.INIT_CONSOLE:
            return state
                .setIn(['consoles', action.consoleId], action.console);
        case constants_1.HID_CHECK3:
            return state
                .set('hidCheck', !action.check);
        case constants_1.CONSOLE_ONE_ACTIVE:
            return state
                .set('consoleOneActive', action.value);
        case constants_1.CONSOLE_TWO_ACTIVE:
            return state
                .set('consoleTwoActive', action.value);
        default:
            return state;
    }
}
exports.step3Reducer = step3Reducer;
//# sourceMappingURL=reducer.js.map