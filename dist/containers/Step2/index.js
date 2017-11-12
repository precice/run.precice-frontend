"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const constants_1 = require("../constants");
const reselect_1 = require("reselect");
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const styles = require("./styles.scss");
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const TextForStep2 = require("./TextForStep2");
const selectors_1 = require("./selectors");
class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseOverLineIndex: {
                start: 1,
                end: 1,
            },
        };
        this.setMouseOver = this.setMouseOver.bind(this);
        this.setMouseOut = this.setMouseOut.bind(this);
    }
    setMouseOver(event) {
        switch (event.currentTarget.id) {
            case 'xml1': {
                return this.setState({ mouseOverLineIndex: {
                        start: 4,
                        end: 10,
                    } });
            }
            case 'xml2': {
                return this.setState({ mouseOverLineIndex: {
                        start: 11,
                        end: 21,
                    } });
            }
            case 'xml3': {
                return this.setState({ mouseOverLineIndex: {
                        start: 25,
                        end: 36,
                    } });
            }
            case 'xml4': {
                return this.setState({ mouseOverLineIndex: {
                        start: 36,
                        end: 42,
                    } });
            }
            case 'xml5': {
                return this.setState({ mouseOverLineIndex: {
                        start: 43,
                        end: 45,
                    } });
            }
            case 'xml6': {
                return this.setState({ mouseOverLineIndex: {
                        start: 45,
                        end: 62,
                    } });
            }
        }
    }
    setMouseOut(event) {
        this.setState({ mouseOverLineIndex: {
                start: 1,
                end: 1,
            } });
    }
    render() {
        return (React.createElement("div", { className: styles.subContainer },
            React.createElement("div", { className: styles.expContainer },
                React.createElement("div", { className: styles.expHeader },
                    React.createElement("span", { className: styles.hide }),
                    React.createElement("span", { className: styles.title }, "what to do"),
                    React.createElement("span", { onClick: this.props.hidAction, className: styles.hide }, this.props.hidCheck2 ? 'expand' : 'hide')),
                React.createElement("div", { id: "hideStep2", className: styles.expContent, hidden: this.props.hidCheck2 },
                    "preCICE is set up via a precice-config.xml file. It contains most of the settings preCICE needs to run the coupled simulation. However, we still need solvers specific configuartion file, that we will not discuss in this tutorial.",
                    React.createElement("br", null),
                    "Click on the XML file, you will learn how to set up the configuration file.",
                    React.createElement("br", null),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { id: "xmlflag1", onClick: this.props.xmlAction, to: "/tutorial/step2/sub1", className: styles.link },
                            TextForStep2.sub1,
                            " (line 5 ~ 9)")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { id: "xmlflag2", onClick: this.props.xmlAction, to: "/tutorial/step2/sub2", className: styles.link },
                            TextForStep2.sub2,
                            " (line 12 ~ 20)")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { id: "xmlflag3", onClick: this.props.xmlAction, to: "/tutorial/step2/sub3", className: styles.link },
                            TextForStep2.sub3,
                            " (line 26 ~ 35)")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { id: "xmlflag4", onClick: this.props.xmlAction, to: "/tutorial/step2/sub4", className: styles.link },
                            TextForStep2.sub4,
                            " (line 37 ~ 40)")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { id: "xmlflag5", onClick: this.props.xmlAction, to: "/tutorial/step2/sub5", className: styles.link },
                            TextForStep2.sub5,
                            " (line 44)")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { id: "xmlflag6", onClick: this.props.xmlAction, to: "/tutorial/step2/sub6", className: styles.link },
                            TextForStep2.sub6,
                            " (line 46 ~ 61)")))),
            React.createElement("div", { className: styles.interactContainer },
                React.createElement("div", { className: styles.xml },
                    React.createElement(react_syntax_highlighter_1.default, { id: "xml0", style: TextForStep2.sunburstModified, showLineNumbers: "true", language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                            const style = { display: 'block', backgroundColor: '' };
                            if (lineNumber > this.props.lineIndex.start && lineNumber < this.props.lineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            else if (lineNumber > this.state.mouseOverLineIndex.start && lineNumber < this.state.mouseOverLineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            return style;
                        }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString0),
                    React.createElement(react_router_dom_1.Link, { id: "xmlflag1", onClick: this.props.xmlAction, to: "/tutorial/step2/sub1" },
                        React.createElement(react_syntax_highlighter_1.default, { id: "xml1", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 5, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                                const style = { display: 'block', backgroundColor: '' };
                                const localLineNumber = lineNumber + 4;
                                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                return style;
                            }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString1)),
                    React.createElement(react_syntax_highlighter_1.default, { id: "xml12", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 10, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                            const style = { display: 'block', backgroundColor: '' };
                            const localLineNumber = lineNumber + 9;
                            if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            return style;
                        }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString12),
                    React.createElement(react_router_dom_1.Link, { id: "xmlflag2", onClick: this.props.xmlAction, to: "/tutorial/step2/sub2" },
                        React.createElement(react_syntax_highlighter_1.default, { id: "xml2", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 12, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                                const style = { display: 'block', backgroundColor: '' };
                                const localLineNumber = lineNumber + 11;
                                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                return style;
                            }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString2)),
                    React.createElement(react_syntax_highlighter_1.default, { id: "xml23", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 21, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                            const style = { display: 'block', backgroundColor: '' };
                            const localLineNumber = lineNumber + 20;
                            if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            return style;
                        }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString23),
                    React.createElement(react_router_dom_1.Link, { id: "xmlflag3", onClick: this.props.xmlAction, to: "/tutorial/step2/sub3" },
                        React.createElement(react_syntax_highlighter_1.default, { id: "xml3", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 26, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                                const style = { display: 'block', backgroundColor: '' };
                                const localLineNumber = lineNumber + 25;
                                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                return style;
                            }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString3)),
                    React.createElement(react_syntax_highlighter_1.default, { id: "xml34", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 36, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                            const style = { display: 'block', backgroundColor: '' };
                            const localLineNumber = lineNumber + 35;
                            if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            return style;
                        }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString34),
                    React.createElement(react_router_dom_1.Link, { id: "xmlflag4", onClick: this.props.xmlAction, to: "/tutorial/step2/sub4" },
                        React.createElement(react_syntax_highlighter_1.default, { id: "xml4", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 37, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                                const style = { display: 'block', backgroundColor: '' };
                                const localLineNumber = lineNumber + 36;
                                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                return style;
                            }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString4)),
                    React.createElement(react_syntax_highlighter_1.default, { id: "xml45", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 42, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                            const style = { display: 'block', backgroundColor: '' };
                            const localLineNumber = lineNumber + 41;
                            if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            return style;
                        }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString45),
                    React.createElement(react_router_dom_1.Link, { id: "xmlflag5", onClick: this.props.xmlAction, to: "/tutorial/step2/sub5" },
                        React.createElement(react_syntax_highlighter_1.default, { id: "xml5", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 44, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                                const style = { display: 'block', backgroundColor: '' };
                                const localLineNumber = lineNumber + 43;
                                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                return style;
                            }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString5)),
                    React.createElement(react_syntax_highlighter_1.default, { id: "xml56", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 45, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                            const style = { display: 'block', backgroundColor: '' };
                            const localLineNumber = lineNumber + 44;
                            if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            return style;
                        }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString56),
                    React.createElement(react_router_dom_1.Link, { id: "xmlflag6", onClick: this.props.xmlAction, to: "/tutorial/step2/sub6" },
                        React.createElement(react_syntax_highlighter_1.default, { id: "xml6", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 46, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                                const style = { display: 'block', backgroundColor: '' };
                                const localLineNumber = lineNumber + 45;
                                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                    style.backgroundColor = '#505050';
                                }
                                return style;
                            }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeString6)),
                    React.createElement(react_syntax_highlighter_1.default, { id: "xmlEnd", style: TextForStep2.sunburstModified, showLineNumbers: "true", startingLineNumber: 62, language: "xml", className: styles.highlighter, wrapLines: true, lineStyle: lineNumber => {
                            const style = { display: 'block', backgroundColor: '' };
                            const localLineNumber = lineNumber + 61;
                            if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                                style.backgroundColor = '#505050';
                            }
                            return style;
                        }, onMouseOver: this.setMouseOver, onMouseOut: this.setMouseOut }, TextForStep2.initialCodeStringEnd)),
                React.createElement("div", { className: styles.commentContainer },
                    React.createElement("div", { className: styles.commentHeader }, this.props.subStepTitle),
                    React.createElement("div", { className: styles.exp }, this.props.children)))));
    }
}
const mapStateToProps = reselect_1.createStructuredSelector({
    lineIndex: selectors_1.lineSelector(),
    subStepTitle: selectors_1.titleSelector(),
    hidCheck2: selectors_1.hidCheckSelector(),
    xmlflag1: selectors_1.xmlFlag1Selector(),
    xmlflag2: selectors_1.xmlFlag2Selector(),
    xmlflag3: selectors_1.xmlFlag3Selector(),
    xmlflag4: selectors_1.xmlFlag4Selector(),
    xmlflag5: selectors_1.xmlFlag5Selector(),
    xmlflag6: selectors_1.xmlFlag6Selector(),
});
function mapDispatchToProps(dispatch) {
    return {
        hidAction: () => { dispatch({ type: constants_1.HID_CHECK2, check: document.getElementById('hideStep2').hidden }); },
        xmlAction: (event) => { dispatch({ type: constants_1.XML_CLICK, check: event.currentTarget.id }); },
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Step2);
//# sourceMappingURL=index.js.map