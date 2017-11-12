"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
class Sub4 extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            "For Calculix, the procedure is the same. However, we don't need to set the mapping direction again.",
            React.createElement("br", null)));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({});
function mapDispatchToProps(dispatch) {
    return {
        example: () => dispatch({ type: constants_1.EXAMPLE_ACTION }),
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Sub4);
//# sourceMappingURL=index.js.map