"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
const styles = require("../sub1/styles.scss");
const react_tippy_1 = require("react-tippy");
class Sub3 extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            "Third, let's speicify the behavior of SU2.",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "participant name"),
                ": Name of participant whose behavior we wish to specify."),
            React.createElement("br", null),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "use-mesh name"),
                ": Name of mesh that will be used by this participant."),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "provide"),
                ": Does this participant provide the mesh in its implementation?"),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "from"),
                ": If the mesh is provided by another participant, specify the name here."),
            React.createElement("br", null),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "write-data name"),
                ": Name of a previously-defined dataset that needs to be written",
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", interactive: true, html: (React.createElement("div", null,
                        "the participant ",
                        React.createElement("span", { className: styles.highlight }, "SU2_CFD"),
                        " writes to the preCICE interface dataset ",
                        React.createElement("span", { className: styles.highlight }, "Forces0"))) },
                    React.createElement("span", { className: "fa fa-question-circle", style: { fontSize: '18px' } }),
                    "\u00A0"),
                "."),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "read-data name"),
                ": Name of a previously-defined dataset that needs to be read",
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", interactive: true, html: (React.createElement("div", null,
                        React.createElement("span", { className: styles.highlight }, "SU2_CFD"),
                        " needs to read from the preCICE interface dataset ",
                        React.createElement("span", { className: styles.highlight }, "DisplacementDeltas0"))) },
                    React.createElement("span", { className: "fa fa-question-circle", style: { fontSize: '18px' } }),
                    "\u00A0"),
                "."),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "mesh"),
                ": Name of mesh to / from which data needs to be written / read respectively."),
            React.createElement("br", null),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "mapping:nearest-neighbor"),
                ": The mapping is done in a nearest neighbor manner."),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "direction"),
                ": Specify the direction of mapping. Can be ",
                React.createElement("span", { className: styles.highlight }, "write"),
                " or ",
                React.createElement("span", { className: styles.highlight }, "read")),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "from"),
                ": Name of source mesh."),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "to"),
                ": Name of destination mesh."),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "constraint"),
                ": Mapping restriction. Can be either ",
                React.createElement("span", { className: styles.highlight }, "consistent"),
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", interactive: true, html: (React.createElement("div", null,
                        "For quantities that are normalized (for example, pressure, which is force per unit area), we need a consistent mapping. This means that the value at coarse nodes is the same as the value at the corresponding fine node. See here for an example:",
                        React.createElement("br", null),
                        React.createElement("img", { style: { width: '300px' }, src: "/src/containers/sub3/consistent.png" }))) },
                    React.createElement("span", { className: "fa fa-question-circle", style: { fontSize: '18px' } }),
                    "\u00A0"),
                "or ",
                React.createElement("span", { className: styles.highlight }, "conservative"),
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", interactive: true, html: (React.createElement("div", null,
                        "When mapping between different grids (example, from a fine to a coarse grid0, the value at a coarse node is computed as an aggregation of the corresponding fine nodes, such that the total force on the coarse and fine grid is the same. This is required for quantities that are absolute (e.g. Force, Mass, etc.). An example can be seen here:",
                        React.createElement("br", null),
                        React.createElement("img", { style: { width: '300px' }, src: "/src/containers/sub3/conservative.png" }))) },
                    React.createElement("span", { className: "fa fa-question-circle", style: { fontSize: '18px' } }),
                    "\u00A0"),
                "."),
            React.createElement("li", null,
                React.createElement("span", { className: styles.highlight }, "mesh"),
                ": Timing of the mapping, i.e. when the mapping is computed. Can be ",
                React.createElement("span", { className: styles.highlight }, "initial"),
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", title: "Computed only once" },
                    React.createElement("span", { className: "fa fa-question-circle", style: { fontSize: '18px' } }),
                    "\u00A0"),
                ", ",
                React.createElement("span", { className: styles.highlight }, "onadvance"),
                ", or ",
                React.createElement("span", { className: styles.highlight }, "ondemand"),
                React.createElement(react_tippy_1.Tooltip, { trigger: "click", width: "100", title: "Re-computed multiple times in case of changing coupling meshes" },
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
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Sub3);
//# sourceMappingURL=index.js.map