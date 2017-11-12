"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
const styles = require("./styles.scss");
const react_console_component_1 = require("react-console-component");
const selectors_1 = require("./selectors");
const constants_2 = require("../constants");
const constants_3 = require("../constants");
var ConsoleId;
(function (ConsoleId) {
    ConsoleId[ConsoleId["left"] = 1] = "left";
    ConsoleId[ConsoleId["right"] = 2] = "right";
})(ConsoleId = exports.ConsoleId || (exports.ConsoleId = {}));
class Step3 extends React.Component {
    render() {
        return (React.createElement("div", { className: styles.subContainer },
            React.createElement("div", { className: styles.expContainer },
                React.createElement("div", { className: styles.expHeader },
                    React.createElement("span", { className: styles.hide }),
                    React.createElement("span", { className: styles.title }, "what to do"),
                    React.createElement("span", { onClick: this.props.hidAction, className: styles.hide }, this.props.hidCheck ? 'expand' : 'hide')),
                React.createElement("div", { id: "hideStep3", className: styles.expContent, hidden: this.props.hidCheck },
                    "After the setup is complete, we are ready to run the coupled simulation. We need to start two terminals, one for each solver that we use.",
                    React.createElement("br", null),
                    "In each terminal we start a simulation, the order in which they are started is not important. The solver we start first will run until it needs to communicate with the other one and wait until it receives the required data.",
                    React.createElement("br", null),
                    "For CalculiX, type in command:",
                    React.createElement("p", { className: styles.expCommand }, "ccx_preCICE -i flap -precice-participant Calculix"),
                    "For SU2, type in command:",
                    React.createElement("p", { className: styles.expCommand }, "~/Solvers/SU2_fin/bin/SU2_CFD su2-config.cfg"))),
            React.createElement("div", { className: styles.subsubContainer },
                React.createElement("div", { className: styles.solL },
                    React.createElement(react_console_component_1.default, { ref: (ref) => this.props.initConsole(ConsoleId.left, ref), handler: (txt) => this.props.sendMsg(ConsoleId.left, txt), welcomeMessage: 'Welcome to Terminal for CalculiX!', autofocus: true, promptLabel: "$ " })),
                React.createElement("div", { className: styles.solR },
                    React.createElement(react_console_component_1.default, { ref: (ref) => this.props.initConsole(ConsoleId.right, ref), handler: (txt) => this.props.sendMsg(ConsoleId.right, txt), welcomeMessage: 'Welcome to Terminal for SU2!', promptLabel: "$ " })))));
    }
}
/*
 (
 () => {
 const one = this.props.consoleOneActive;
 const two = this.props.consoleTwoActive;
 if (one && two) {
 return <ConPlot/>;
 }
 }
 )()
 */
// domain={{ x: [ 0, 2 ] , y: [ 0, 3] }}
const mapStateToProps = reselect_1.createStructuredSelector({
    hidCheck: selectors_1.hidCheckSelector(),
    consoleOneActive: selectors_1.consoleOneStateSelector(),
    consoleTwoActive: selectors_1.consoleTwoStateSelector(),
});
function mapDispatchToProps(dispatch) {
    return {
        initConsole: (consoleId, console) => dispatch({ type: constants_1.INIT_CONSOLE, consoleId, console }),
        sendMsg: (consoleId, cmd) => dispatch({ type: 'socket/exec_cmd', consoleId, cmd }),
        hidAction: () => { dispatch({ type: constants_2.HID_CHECK3, check: document.getElementById('hideStep3').hidden }); },
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Step3);
// Variables to hold global information for
// parsing inside consoleMiddleware
let lastIt = 0;
// lastDt = 1 reflects starting value of dt
// in Calculix output
let lastDt = 1;
// See explanation below in consoleMiddleware
let dtFlag = 1;
// detect console activity
let consoleOne = false;
let consoleTwo = false;
exports.consoleMiddleware = store => next => action => {
    const consoleAction = action.type === 'socket/stdout' || action.type === 'socket/stderr' || action.type === 'socket/exit';
    if (consoleAction) {
        // replace with selector
        const cons = store.getState().getIn(['step3', 'consoles', action.consoleId]);
        if (action.type === 'socket/stdout' || action.type === 'socket/stderr') {
            const lines = action.data.split('\n');
            if (!consoleOne && action.consoleId === 1) {
                store.dispatch({ type: constants_3.CONSOLE_ONE_ACTIVE, value: true });
                consoleOne = true;
            }
            if (!consoleTwo && action.consoleId === 2) {
                store.dispatch({ type: constants_3.CONSOLE_TWO_ACTIVE, value: true });
                consoleTwo = true;
            }
            const itReg = /it\s(\d+)\sof\s\d+/;
            const dtReg = /dt#\s(\d+)\sof\s(\d+)/;
            // Adding our parsing logic here:
            // We want the Calculix console
            // And we're assuming it's the first one
            // TODO: Determine Calculix console
            if (action.consoleId === 1) {
                for (const line of lines) {
                    const foundIt = line.match(itReg);
                    if (foundIt != null) {
                        const foundDt = line.match(dtReg);
                        // foundIt[1] because that contains the
                        // matched number. Look up parenthesis in
                        // javascript regex.
                        const it = parseInt(foundIt[1], 10);
                        const dt = parseInt(foundDt[1], 10);
                        // Multiple instances of dt === 1 and it === 1
                        // We only want to update the state once
                        // so we use dtFlag to make sure of that.
                        if (dtFlag === 1 && dt === 1 && it === 1) {
                            const maxDt = parseInt(foundDt[2], 10);
                            store.dispatch({ type: constants_3.ADD_PROGRESS_MAX_ITER, maxTimeSteps: maxDt });
                            dtFlag = 0;
                        }
                        // TODO: Handle the last iteration
                        // if current 'it' is less than
                        // lastIt and 'dt' is greater than lastDt
                        // then we have moved to a new time step
                        if (dt > lastDt) {
                            store.dispatch({ type: constants_3.ADD_CHART_DATA, data: { x: lastDt, y: lastIt } });
                            lastIt = it;
                            lastDt = dt;
                        }
                        else {
                            lastIt = it;
                        }
                    }
                }
            }
            cons.log(...lines);
        }
        else if (action.type === 'socket/exit') {
            cons.log('returned with exit code ' + action.code);
            cons.return();
        }
        cons.scrollToBottom();
    }
    return next(action);
};
//# sourceMappingURL=index.js.map