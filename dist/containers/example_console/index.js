'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_console_component_1 = require("react-console-component");
class EchoConsole extends React.Component {
    constructor(props) {
        super(props);
        this.child = {};
        this.echo = (text) => {
            this.child.console.log(text);
            this.setState({
                count: this.state.count + 1,
            }, this.child.console.return);
        };
        this.promptLabel = () => {
            return this.state.count + '> ';
        };
        this.state = {
            count: 0,
        };
    }
    render() {
        return (React.createElement(react_console_component_1.default, { ref: ref => this.child.console = ref, handler: this.echo, promptLabel: this.promptLabel, welcomeMessage: 'Welcome to the react-console demo!\nThis is an example of a simple echo console.', autofocus: true }));
    }
}
exports.default = EchoConsole;
//# sourceMappingURL=index.js.map