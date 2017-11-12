"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const styles = require("./styles.scss");
const preiceLogo = require("../../static/Precice-logo.gif");
class Root extends React.Component {
    render() {
        return (React.createElement("div", { className: styles.container },
            React.createElement("div", { className: styles.banner },
                React.createElement(react_router_dom_1.Link, { to: "/", className: styles.label },
                    React.createElement("img", { src: preiceLogo, className: styles.img }),
                    React.createElement("span", { className: styles.pre }, "pre"),
                    React.createElement("span", { className: styles.cice }, "CICE"))),
            React.createElement("div", { className: styles.child }, this.props.children),
            React.createElement("footer", { className: styles.footer },
                "Copyright \u00A9",
                React.createElement("span", { className: styles.label },
                    React.createElement("span", { className: styles.pre }, "pre"),
                    React.createElement("span", { className: styles.cice }, "CICE")))));
    }
}
exports.default = Root;
//# sourceMappingURL=index.js.map