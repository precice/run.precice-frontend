"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
const styles = require("../sub1/styles.scss");
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
                React.createElement("span", { className: styles.highlight }, "dimensions"),
                ": Specifies the number of dimensions of the problem. Can be either 2 or 3",
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", title: "preCICE does not fully support 1D solvers. For this example, however, we can treat our 1D solvers as 2D solvers by ignoring all the y-components." },
                    React.createElement("span", { className: "fa fa-question-circle", style: { fontSize: '18px' } }),
                    "\u00A0"),
                "."),
            React.createElement("br", null),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "data:vector name=\"Force0\""),
                ": Datasets are defined here, which are later assigned to the meshes used in the simulation. The data type could be either vector or scalar.",
                React.createElement("br", null),
                React.createElement("br", null),
                " We can set the name as we like, but should be consist to solver's configuration file.")));
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