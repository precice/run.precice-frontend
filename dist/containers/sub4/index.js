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
            React.createElement("br", null),
            React.createElement("li", null,
                "Set the participant name \"Calculix\"",
                React.createElement("button", null, "set")),
            React.createElement("br", null),
            React.createElement("li", null,
                "Solid only uses one mesh, that is, \"Calculix_Mesh\".",
                React.createElement("button", null, "set"),
                React.createElement("br", null),
                "Provider:",
                React.createElement("select", { id: "provideCalculixinCalculix", name: "provide" },
                    React.createElement("option", { hidden: true, selected: true }, " -- select an option -- "),
                    React.createElement("option", { value: "yes" }, "provide = \"yes\""),
                    React.createElement("option", { value: "SU2" }, "from = \"SU2_CFD\""),
                    React.createElement("option", { value: "Calculix" }, "from = \"Calculix\""))),
            React.createElement("br", null),
            React.createElement("li", null,
                "Now we set the dataset in which Calculix needs to write:",
                React.createElement("br", null),
                "name:",
                React.createElement("select", { id: "writeCalculixname", name: "writeCalculixname" },
                    React.createElement("option", { hidden: true, selected: true }, " -- select an option -- "),
                    React.createElement("option", { value: "Forces0" }, "Forces0"),
                    React.createElement("option", { value: "DisplacementDeltas0" }, "DisplacementDeltas0")),
                React.createElement("br", null),
                "mesh:",
                React.createElement("select", { id: "writeCalculixmesh", name: "writeCalculixmesh" },
                    React.createElement("option", { hidden: true, selected: true }, " -- select an option -- "),
                    React.createElement("option", { value: "SU2_Mesh0" }, "SU2_Mesh0"),
                    React.createElement("option", { value: "Calculix_Mesh" }, "Calculix_Mesh"))),
            React.createElement("br", null),
            React.createElement("li", null,
                "Same procedure for read:",
                React.createElement("br", null),
                "name:",
                React.createElement("select", { id: "readCalculixname", name: "readCalculixname" },
                    React.createElement("option", { hidden: true, selected: true }, " -- select an option -- "),
                    React.createElement("option", { value: "Forces0" }, "Forces0"),
                    React.createElement("option", { value: "DisplacementDeltas0" }, "DisplacementDeltas0")),
                React.createElement("br", null),
                "mesh:",
                React.createElement("select", { id: "readCalculixmesh", name: "readCalculixmesh" },
                    React.createElement("option", { hidden: true, selected: true }, " -- select an option -- "),
                    React.createElement("option", { value: "SU2_Mesh0" }, "SU2_Mesh0"),
                    React.createElement("option", { value: "Calculix_Mesh" }, "Calculix_Mesh")))));
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