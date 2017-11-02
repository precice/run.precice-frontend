"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles = require("./styles.scss");
class ProgressBar extends React.Component {
    render() {
        return (React.createElement("div", { className: styles.progress },
            React.createElement("div", { style: { width: this.props.percentage + '%' }, className: styles.bar })));
    }
}
exports.default = ProgressBar;
//# sourceMappingURL=index.js.map