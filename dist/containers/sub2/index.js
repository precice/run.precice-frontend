"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
class Sub2 extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            "Second, let's set up the mesh.",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("li", null,
                "For each solver, we need to specify a unique mesh name. Here, we name them \"SU2_Mesh0\" and \"Calculix_Mesh\"",
                React.createElement("button", null, "set")),
            React.createElement("br", null),
            React.createElement("li", null,
                "We also need to assign the datasets, which are defined in last step, to this mesh, that are \"Forces0\" and \"DisplacementDeltas0\".",
                React.createElement("button", null, "set"))));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({});
function mapDispatchToProps(dispatch) {
    return {
        example: () => dispatch({ type: constants_1.EXAMPLE_ACTION }),
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Sub2);
//# sourceMappingURL=index.js.map