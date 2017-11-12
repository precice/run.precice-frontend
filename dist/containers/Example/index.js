"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const selectors_1 = require("./selectors");
class Example extends React.Component {
    render() {
        return (React.createElement("div", null,
            "This is an Example ",
            React.createElement(react_router_dom_1.Link, { to: "/" }, " Link to Landing"),
            React.createElement("div", { onClick: this.props.example }, "Change state"),
            React.createElement("div", null,
                "Example Field value: ",
                this.props.exampleField)));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({
    exampleField: selectors_1.exampleFieldSelector(),
});
function mapDispatchToProps(dispatch) {
    return {
        example: () => { dispatch({ type: constants_1.EXAMPLE_ACTION, newText: 'The current timestamp is ' + Date.now() }); },
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Example);
//# sourceMappingURL=index.js.map