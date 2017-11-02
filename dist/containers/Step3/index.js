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
// VictoryChart is a wrapper
const victory_1 = require("victory");
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
                    React.createElement(react_console_component_1.default, { ref: (ref) => this.props.initConsole(ConsoleId.right, ref), handler: (txt) => this.props.sendMsg(ConsoleId.right, txt), welcomeMessage: 'Welcome to Terminal for SU2!', promptLabel: "$ " })),
                React.createElement("div", { className: styles.convergePlot },
                    React.createElement("div", { className: styles.solHeader },
                        React.createElement(victory_1.VictoryChart, { theme: victory_1.VictoryTheme.material, domain: {} },
                            React.createElement(victory_1.VictoryScatter, { style: { data: { fill: '#c43a31' } }, size: 10, data: this.props.data })))))));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({
    hidCheck: selectors_1.hidCheckSelector(),
    data: selectors_1.chartDataSelector(),
});
function mapDispatchToProps(dispatch) {
    return {
        initConsole: (consoleId, console) => dispatch({ type: constants_1.INIT_CONSOLE, consoleId, console }),
        sendMsg: (consoleId, cmd) => dispatch({ type: 'socket/exec_cmd', consoleId, cmd }),
        hidAction: () => { dispatch({ type: constants_2.HID_CHECK3, check: document.getElementById('hideStep3').hidden }); },
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Step3);
exports.consoleMiddleware = store => next => action => {
    const consoleAction = action.type === 'socket/stdout' || action.type === 'socket/stderr' || action.type === 'socket/exit';
    if (consoleAction) {
        // replace with selector
        const cons = store.getState().getIn(['step3', 'consoles', action.consoleId]);
        if (action.type === 'socket/stdout' || action.type === 'socket/stderr') {
            const dats = new Uint8Array(action.data);
            const lines = [];
            console.log('+++++++++++new', dats.length);
            let nextStart = 0;
            let result;
            do {
                ({ result, nextStart } = arrayBufferToString(dats, nextStart));
                lines.push(result);
            } while (nextStart !== -1);
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
function arrayBufferToString(uint16, start = 0) {
    const length = uint16.length;
    let result = '';
    let addition = Math.pow(2, 16) - 1;
    for (let i = start; i < length; i += addition) {
        if (i + addition > length) {
            addition = length - i;
        }
        const chunk = String.fromCharCode.apply(null, uint16.subarray(i, i + addition));
        const newlineIndex = chunk.indexOf('\n');
        if (newlineIndex !== -1) {
            return {
                result: result + chunk.substring(0, newlineIndex),
                nextStart: i + newlineIndex + 1,
            };
        }
        result += chunk;
    }
    return {
        result,
        nextStart: -1,
    };
}
//# sourceMappingURL=index.js.map