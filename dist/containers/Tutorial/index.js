"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const styles = require("./styles.scss");
const index_1 = require("../Progress/index");
const selectors_1 = require("./selectors");
const selectors_2 = require("../Step2/selectors");
class Tutorial extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        document.getElementById('myModal').style.display = 'block';
    }
    closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }
    render() {
        return (React.createElement("div", { className: styles.tutorialContainer },
            React.createElement("div", { id: "myModal", className: styles.modal },
                React.createElement("div", { className: styles.modalContent },
                    React.createElement("div", { className: styles.modalHeader },
                        React.createElement("span", { onClick: this.closeModal, className: styles.close }, "\u00D7"),
                        React.createElement("h2", null, "Oops, you forgot some parts ;-)")),
                    React.createElement("div", { className: styles.modalBody },
                        "Click on line",
                        React.createElement("span", { hidden: this.props.xmlflag2 }, " 12~20,"),
                        React.createElement("span", { hidden: this.props.xmlflag3 }, " 26~35,"),
                        React.createElement("span", { hidden: this.props.xmlflag4 }, " 37~41,"),
                        React.createElement("span", { hidden: this.props.xmlflag5 }, " 44,"),
                        React.createElement("span", { hidden: this.props.xmlflag6 }, " 46-61,"),
                        "to check the explanation."),
                    this.props.buttonLinks.next && React.createElement(react_router_dom_1.Link, { onClick: this.props.xmlSkip, to: this.props.buttonLinks.next, className: styles.modalFooter }, "No, I want to skip those parts."))),
            React.createElement(index_1.default, { percentage: this.props.percentage }),
            React.createElement("div", { className: styles.child }, this.props.children),
            React.createElement("div", { className: styles.btnContainer },
                React.createElement("div", { className: styles.btnSubCon }, this.props.buttonLinks.previous && React.createElement(react_router_dom_1.Link, { to: this.props.buttonLinks.previous, className: styles.btnL }, "BACK")),
                React.createElement("div", { className: styles.btnSubCon }, (this.props.buttonLinks.next === '/tutorial/step3' &&
                    (this.props.xmlflag2 === false ||
                        this.props.xmlflag3 === false ||
                        this.props.xmlflag4 === false ||
                        this.props.xmlflag5 === false ||
                        this.props.xmlflag6 === false)) ?
                    this.props.buttonLinks.next && React.createElement("div", { onClick: this.openModal, className: styles.btnR }, "NEXT") :
                    this.props.buttonLinks.next && React.createElement(react_router_dom_1.Link, { to: this.props.buttonLinks.next, className: styles.btnR }, "NEXT")))));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({
    percentage: selectors_1.percentageSelector(),
    buttonLinks: selectors_1.buttonLinksSelector(),
    xmlflag2: selectors_2.xmlFlag2Selector(),
    xmlflag3: selectors_2.xmlFlag3Selector(),
    xmlflag4: selectors_2.xmlFlag4Selector(),
    xmlflag5: selectors_2.xmlFlag5Selector(),
    xmlflag6: selectors_2.xmlFlag6Selector(),
});
function mapDispatchToProps(dispatch) {
    return {
        xmlSkip: () => { dispatch({ type: constants_1.XML_ALL_CLICK }); document.getElementById('myModal').style.display = 'none'; },
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Tutorial);
//# sourceMappingURL=index.js.map