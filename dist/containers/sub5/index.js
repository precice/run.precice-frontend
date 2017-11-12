"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
const styles = require("../sub1/styles.scss");
const react_tippy_1 = require("react-tippy");
class Sub5 extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            "Now, we can set the way to communicate the two solvers to each other.",
            React.createElement("br", null),
            React.createElement("br", null),
            "preCICE provides different options for communication (see the ",
            React.createElement("a", { href: "https://github.com/precice/precice/wiki/XML-Reference" }, "XML reference"),
            "). Here, we use TCP/IP socket communication.",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "from"),
                ": Name of the first participant involved in communication. This is the one that initiates communication.",
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", interactive: true, html: (React.createElement("div", null, "For the most of the cases, it makes no difference which participant initiates the communication.")) },
                    React.createElement("span", { className: "fa fa-question-circle", style: { fontSize: '18px' } }),
                    "\u00A0")),
            React.createElement("br", null),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "to"),
                ": Name of the second participant involved in communication."),
            React.createElement("br", null),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "distribution-type"),
                ": Please set this option to ",
                React.createElement("span", { className: styles.highlight }, "gather-scatter"),
                " if at least one participant runs in serial.",
                React.createElement("br", null),
                "If both participants run in parallel, communication is more efficient if you set the option to ",
                React.createElement("span", { className: styles.highlight }, "point-to-point"))));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({});
function mapDispatchToProps(dispatch) {
    return {
        example: () => dispatch({ type: constants_1.EXAMPLE_ACTION }),
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Sub5);
//# sourceMappingURL=index.js.map