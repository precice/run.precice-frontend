"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
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
            React.createElement("li", null,
                "\"From\" indicates the solver that initiates communication, \"To\" indicate the other.",
                React.createElement("br", null),
                "However, for most of the cases, it makes no difference which solver initiates the communication.",
                React.createElement("br", null),
                React.createElement("br", null),
                "Here, we set from \"SU2_CFD\" to \"Calculix\".",
                React.createElement("button", null, "set")),
            React.createElement("br", null),
            React.createElement("li", null,
                "We now set distribution-type:",
                React.createElement("select", { id: "distribution-type", name: "distribution-type" },
                    React.createElement("option", { hidden: true, selected: true }, " -- select an option -- "),
                    React.createElement("option", { value: "gather-scatter" }, "gather-scatter"),
                    React.createElement("option", { value: "point-to-point" }, "point-to-point")))));
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