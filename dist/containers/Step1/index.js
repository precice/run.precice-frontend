"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const reselect_1 = require("reselect");
const React = require("react");
const styles = require("./styles.scss");
class Step1 extends React.Component {
    render() {
        return (React.createElement("div", { className: styles.tuInContainer },
            React.createElement("header", { className: styles.tuInHeader }, "introduction"),
            React.createElement("li", { className: styles.tuInContent },
                "In this tutorial, we will tutor you how to do a coupled fluid- structure interaction (FSI) simulation step by step with some interaction.",
                React.createElement("div", null,
                    React.createElement("br", null),
                    "We model a compressible fluid flowing through a channel. In the channel, an elastic flap is fixed to the floor. This flap oscillates due to the fluid pressure building up on its surface. The setup is shown schematically here:"),
                React.createElement("br", null),
                React.createElement("img", { src: "/src/containers/Step1/geometry.png", className: styles.img }),
                React.createElement("br", null),
                React.createElement("div", null,
                    "Although this test case is two-dimensional, we use a three-dimensional simulation with a constant width in y-direction. The fluid flow is simulated by solving the compressible Navier- Stokes equations for laminar viscous flow. A constant velocity profile is assumed on the input on the left of the channel and on the walls no-slip conditions are prescribed. More on the definition of the case and its parameters can be found in",
                    React.createElement("a", { href: "https://www5.in.tum.de/pub/Rusch2016_BA.pdf", className: styles.link }, " Rusch2016"),
                    ".")),
            React.createElement("li", { className: styles.tuInContent },
                "We use two solvers: SU2 and CalculiX.",
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "http://www.calculix.de", className: styles.link }, "CalculiX"),
                        ": a free three-dimensional finite element solver. We use it to simulate the flap deformation"),
                    React.createElement("li", null,
                        React.createElement("a", { href: "http://su2.stanford.edu", className: styles.link }, "SU2"),
                        ": an open source CFD solver developed at Stanford. We use it to simulate the fluid flow."))),
            React.createElement("li", { className: styles.tuInContent }, "The role of preCICE is to couple those two solvers."),
            React.createElement("br", null)));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({});
exports.default = react_redux_1.connect(mapStateToProps)(Step1);
//# sourceMappingURL=index.js.map