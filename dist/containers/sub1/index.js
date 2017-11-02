"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
// import * as styles from './styles.scss';
const react_tippy_1 = require("react-tippy");
class Sub1 extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            "We first need to set up the general setting of the interface.",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("li", null,
                "To set the dimension for the scenario.",
                React.createElement("select", { id: "data type", name: "data type" },
                    React.createElement("option", { hidden: true, selected: true }, " -- select an option --"),
                    React.createElement("option", { value: "twoD" }, "2"),
                    React.createElement("option", { value: "oneD" }, "3")),
                React.createElement("br", null)),
            React.createElement("br", null),
            React.createElement("li", null,
                "For coupling, we need data transfer between two solvers. We first define the data type:",
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", title: "Scalar means the communication consists only of unstructured numbers while vector transfers multiple dimensions at once. In scenarios with heavy communication between precice node, vector can lead to a small speed up, but usually this option has not a big performance impact" },
                    React.createElement("span", { className: "fa fa-question-circle", style: { fontSize: '18px' } }),
                    "\u00A0"),
                React.createElement("select", { id: "data type", name: "data type" },
                    React.createElement("option", { hidden: true, selected: true }, " -- select an option --"),
                    React.createElement("option", { value: "scalar" }, "scalar"),
                    React.createElement("option", { value: "vector" }, "vector")),
                React.createElement("br", null),
                React.createElement("br", null)),
            React.createElement("li", null,
                "For this tutorial, we need to transfer the force and displacement.",
                React.createElement("br", null),
                "We named it \"Forces0\" and \"DisplacementDeltas0\".",
                React.createElement("button", null, "set"))));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({});
function mapDispatchToProps(dispatch) {
    return {
        example: () => dispatch({ type: constants_1.EXAMPLE_ACTION }),
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Sub1);
//# sourceMappingURL=index.js.map