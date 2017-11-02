"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const styles = require("./styles.scss");
class LandingPage extends React.Component {
    render() {
        return (React.createElement("div", { className: styles.landingbox },
            React.createElement("div", { className: styles.landingPage },
                React.createElement("div", { className: styles.intro },
                    "Coupling tool for partitioned simulations",
                    React.createElement("br", null),
                    "of multi-physics scenarios."),
                React.createElement("div", { className: styles.subIntro }, "Make Coupling Easy Again"),
                React.createElement("div", { className: styles.btnContainer },
                    React.createElement(react_router_dom_1.Link, { to: "/tutorial/step1", className: styles.btn }, " Start The Tutorial Now"))),
            React.createElement("div", { className: styles.team },
                React.createElement("div", { className: styles.intro }, "Our Team"),
                React.createElement("div", { className: styles.imgGroup },
                    React.createElement("div", { className: styles.imgContainer },
                        React.createElement("img", { src: "src/components/LandingPage/Dmytro.jpg", className: styles.img }),
                        React.createElement("div", { className: styles.subIntro }, "Dmytro Sashko")),
                    React.createElement("div", { className: styles.imgContainer },
                        React.createElement("img", { src: "src/components/LandingPage/Felix.jpg", className: styles.img }),
                        React.createElement("div", { className: styles.subIntro }, "Felix Lachenmaier")),
                    React.createElement("div", { className: styles.imgContainer },
                        React.createElement("img", { src: "src/components/LandingPage/Hasan.jpg", className: styles.img }),
                        React.createElement("div", { className: styles.subIntro }, "Hasan Ashraf")),
                    React.createElement("div", { className: styles.imgContainer },
                        React.createElement("img", { src: "src/components/LandingPage/Jan.jpg", className: styles.img }),
                        React.createElement("div", { className: styles.subIntro }, "Jan S\u00FCltemeyer")),
                    React.createElement("div", { className: styles.imgContainer },
                        React.createElement("img", { src: "src/components/LandingPage/Kirill.jpg", className: styles.img }),
                        React.createElement("div", { className: styles.subIntro }, "Kirill Martynov")),
                    React.createElement("div", { className: styles.imgContainer },
                        React.createElement("img", { src: "src/components/LandingPage/Pei.jpg", className: styles.img }),
                        React.createElement("div", { className: styles.subIntro }, "Pei-Hsuan Huang"))),
                React.createElement("div", { className: styles.subIntro },
                    "The tutorial website is designed by us.",
                    React.createElement("br", null),
                    "We all study at Msc. Computational Science and Engineering, TUM now :-)"))));
    }
}
exports.default = LandingPage;
//# sourceMappingURL=index.js.map