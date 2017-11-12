"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
const selectors_1 = require("../Router/selectors");
const TextForStep2 = require("./TextForStep2");
const step2SubstateSelector = (state) => {
    return state.get('step2');
};
exports.hidCheckSelector = () => reselect_1.createSelector(step2SubstateSelector, (step2Substate) => step2Substate.get('hidCheck2'));
exports.xmlFlag1Selector = () => reselect_1.createSelector(step2SubstateSelector, (step2Substate) => step2Substate.get('xmlflag1'));
exports.xmlFlag2Selector = () => reselect_1.createSelector(step2SubstateSelector, (step2Substate) => step2Substate.get('xmlflag2'));
exports.xmlFlag3Selector = () => reselect_1.createSelector(step2SubstateSelector, (step2Substate) => step2Substate.get('xmlflag3'));
exports.xmlFlag4Selector = () => reselect_1.createSelector(step2SubstateSelector, (step2Substate) => step2Substate.get('xmlflag4'));
exports.xmlFlag5Selector = () => reselect_1.createSelector(step2SubstateSelector, (step2Substate) => step2Substate.get('xmlflag5'));
exports.xmlFlag6Selector = () => reselect_1.createSelector(step2SubstateSelector, (step2Substate) => step2Substate.get('xmlflag6'));
exports.pathnameSelector = () => reselect_1.createSelector(
// This function returns the pathname
selectors_1.locationSelector, (location) => {
    const pathname = location && location.pathname;
    return pathname;
});
exports.lineSelector = () => reselect_1.createSelector(
// pathnameSelector returns lambda function
exports.pathnameSelector(), (pathname) => {
    // extract step number from pathname for switch
    switch (pathname.split('/')[3]) {
        case 'sub1': {
            const lineIndex = {
                start: 4,
                end: 10,
            };
            return lineIndex;
        }
        case 'sub2': {
            const lineIndex = {
                start: 11,
                end: 21,
            };
            return lineIndex;
        }
        case 'sub3': {
            const lineIndex = {
                start: 25,
                end: 36,
            };
            return lineIndex;
        }
        case 'sub4': {
            const lineIndex = {
                start: 36,
                end: 42,
            };
            return lineIndex;
        }
        case 'sub5': {
            const lineIndex = {
                start: 43,
                end: 45,
            };
            return lineIndex;
        }
        case 'sub6': {
            const lineIndex = {
                start: 45,
                end: 62,
            };
            return lineIndex;
        }
    }
});
exports.titleSelector = () => reselect_1.createSelector(
// pathnameSelector returns lambda function
exports.pathnameSelector(), (pathname) => {
    // extract step number from pathname for switch
    switch (pathname.split('/')[3]) {
        case 'sub1':
            return TextForStep2.sub1;
        case 'sub2':
            return TextForStep2.sub2;
        case 'sub3':
            return TextForStep2.sub3;
        case 'sub4':
            return TextForStep2.sub4;
        case 'sub5':
            return TextForStep2.sub5;
        case 'sub6':
            return TextForStep2.sub6;
    }
});
//# sourceMappingURL=selectors.js.map