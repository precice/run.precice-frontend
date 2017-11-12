"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
const styles = require("../sub1/styles.scss");
const react_tippy_1 = require("react-tippy");
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
                React.createElement("span", { className: styles.highlight }, "mesh name"),
                ": Specifies a unique name for the mesh."),
            React.createElement("br", null),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "use-data name"),
                ": Specifies a previously-defined dataset that is assigned to this mesh",
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", interactive: true, html: (React.createElement("div", null,
                        "a surface mesh consisting of vertices and, optionally, edges and triangles (they are needed in special circumstances, for example when a nearest projection mapping is used).",
                        React.createElement("br", null),
                        "The vertices carry data, specified in the ",
                        React.createElement("span", { className: styles.highlight }, "use-data"),
                        " tag.",
                        React.createElement("br", null),
                        "The geometry data of the mesh can either be provided by a participant (see tag ",
                        React.createElement("span", { className: styles.highlight }, "use-mesh"),
                        " in the next part) or by the ",
                        React.createElement("span", { className: styles.highlight }, "geometry"),
                        " tag (not used here).")), title: "preCICE does not fully support 1D solvers. For this example, however, we can treat our 1D solvers as 2D solvers by ignoring all the y-components." },
                    React.createElement("span", { className: "fa fa-question-circle", style: { fontSize: '18px' } }),
                    "\u00A0"),
                ".")));
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