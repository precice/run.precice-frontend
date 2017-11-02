"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
const selectors_1 = require("../Router/selectors");
exports.pathnameSelector = () => reselect_1.createSelector(
// This function returns the pathname
selectors_1.locationSelector, (location) => {
    const pathname = location && location.pathname;
    return pathname;
});
exports.percentageSelector = () => reselect_1.createSelector(
// pathnameSelector returns lambda function
exports.pathnameSelector(), (pathname) => {
    // extract step number from pathname for switch
    switch (pathname.split('/')[2]) {
        case 'step1':
            return 2;
        case 'step2': {
            return 34;
        }
        case 'step3':
            return 67;
        case 'step4':
            return 100;
        default:
            return 2;
    }
});
exports.buttonLinksSelector = () => reselect_1.createSelector(
// Provide paths for buttons
exports.pathnameSelector(), (pathname) => {
    const stepArray = ['/tutorial/step1', '/tutorial/step2/sub1', '/tutorial/step2/sub2', '/tutorial/step2/sub3', '/tutorial/step2/sub4', '/tutorial/step2/sub5', '/tutorial/step2/sub6', '/tutorial/step3', '/tutorial/step4'];
    const index = stepArray.indexOf(pathname);
    const buttonLinks = {
        next: stepArray[index + 1],
        current: pathname,
        previous: stepArray[index - 1],
    };
    if (index === 1) {
        buttonLinks.next = stepArray[7];
    }
    else if (index === 2 || index === 3 || index === 4 || index === 5 || index === 6) {
        buttonLinks.next = stepArray[7];
        buttonLinks.previous = stepArray[0];
    }
    else if (index === 7) {
        buttonLinks.previous = stepArray[6];
    }
    return buttonLinks;
});
//# sourceMappingURL=selectors.js.map