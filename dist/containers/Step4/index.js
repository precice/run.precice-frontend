"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const reselect_1 = require("reselect");
const React = require("react");
const styles = require("./styles.scss");
class Step4 extends React.Component {
    render() {
        return (React.createElement("div", { className: styles.subContainer },
            React.createElement("div", { className: styles.expContainer },
                React.createElement("div", { className: styles.expHeader }, "what to do")),
            React.createElement("div", { className: styles.visialize },
                React.createElement("div", { className: styles.visialHeader }, "Visualization"))));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({});
exports.default = react_redux_1.connect(mapStateToProps)(Step4);
//# sourceMappingURL=index.js.map