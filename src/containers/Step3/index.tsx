import { connect } from 'react-redux';
import { INIT_CONSOLE } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import * as styles from './styles.scss';
import Console from 'react-console-component';

interface Step3Props {
  sendMsg: any;
  initConsole: any;
}

export enum ConsoleId {
  left = 1,
  right = 2,
}


class Step3 extends React.Component<Step3Props, any> {
  constructor(props: Step3Props) {
    super(props);
    this.state = {
      hid: false,
      hidString: 'hide',
    };
    this.shrinkWhatToDo = this.shrinkWhatToDo.bind(this);
  }

  private shrinkWhatToDo(event) {
    if (this.state.hid === false) {
      this.setState({
        hid: true,
        hidString: 'expand',
      });
    } else {
      this.setState({
        hid: false,
        hidString: 'hide',
      });
    }
  }


  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <span className={styles.hide}/>
            <span className={styles.title}>what to do</span>
            <span onClick={this.shrinkWhatToDo} className={styles.hide}>{this.state.hidString}</span>
          </div>
          <div className={styles.expContent} hidden={this.state.hid}>
            After the setup is complete, we are ready to run the coupled simulation. We need to start two terminals,
            one for each solver that we use.
            <br/>
            In each terminal we start a simulation, the order in which they are started is not important.
            The solver we start first will run until it needs to communicate with the other one and wait until it
            receives the required data.
            <br/>
            For CalculiX, type in command:
            <p className={styles.expCommand}>
              ccx_preCICE -i flap -precice-participant Calculix
            </p>
            For SU2, type in command:
            <p className={styles.expCommand}>
              ~/Solvers/SU2_fin/bin/SU2_CFD su2-config.cfg
            </p>
          </div>
        </div>
        <div className={styles.subsubContainer}>
          <div className={styles.solL}>
            <Console
              ref={(ref: Console) => this.props.initConsole(ConsoleId.left, ref)}
              handler={(txt: string) => this.props.sendMsg(ConsoleId.left, txt)}
              welcomeMessage={'Welcome to Terminal for CalculiX!'}
              autofocus={true}
              promptLabel="$ "
            />
          </div>
          <div className={styles.solR}>
            <Console
              ref={(ref) => this.props.initConsole(ConsoleId.right, ref)}
              handler={(txt: string) => this.props.sendMsg(ConsoleId.right, txt)}
              welcomeMessage={'Welcome to Terminal for SU2!'}
              promptLabel="$ "
            />
          </div>
          <div className={styles.convergePlot}>
            <div className={styles.solHeader}>
              convergence plot for coupling
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    initConsole: (consoleId: ConsoleId, console: Console) => dispatch({ type: INIT_CONSOLE, consoleId, console }),
    sendMsg: (consoleId: ConsoleId, cmd: string) => dispatch({ type: 'socket/exec_cmd', consoleId, cmd }),
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step3);

export const consoleMiddleware = store => next => action => {

  const consoleAction = action.type === 'socket/stdout' || action.type === 'socket/stderr' || action.type === 'socket/exit';

  if (consoleAction) {
    // replace with selector
    const cons = store.getState().getIn(['step3', 'consoles', action.consoleId]);

    if (action.type === 'socket/stdout' || action.type === 'socket/stderr') {
      const lines = action.data.split('\n');
      cons.log(...lines);
    } else if (action.type === 'socket/exit') {
      cons.log('returned with exit code ' + action.code);
      cons.return();
    }

    cons.scrollToBottom();
  }


  return next(action);
};


