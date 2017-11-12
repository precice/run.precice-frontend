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
    xmlflag1: true,
    xmlflag2: false,
    xmlflag3: false,
    xmlflag4: false,
    xmlflag5: false,
    xmlflag6: false,
});
function step2Reducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.HID_CHECK2:
            return state
                .set('hidCheck2', !action.check);
        case constants_1.XML_CLICK:
            return state
                .set(action.check, true);
        case constants_1.XML_ALL_CLICK:
            return state
                .set('xmlflag2', true).set('xmlflag3', true).set('xmlflag4', true).set('xmlflag5', true).set('xmlflag6', true);
        default:
            return state;
    }
}
exports.default = step2Reducer;
//# sourceMappingURL=reducer.js.map