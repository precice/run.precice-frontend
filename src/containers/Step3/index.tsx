import { connect } from 'react-redux';
import { CONSOLE_ADD_LINES, CONSOLE_TOGGLE_BUSY, CONSOLE_TOGGLE_LOCK_BOTTOM } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import * as styles from './styles.scss';
import { busySelector, hidCheckSelector, lockBottomSelector, logMessagesSelector } from './selectors';
import { HID_CHECK3 } from '../constants';
import ReduxConsole from '../../components/ReduxConsole/index';
import { List } from 'immutable';


interface Step3Props {
  runCmd: any;
  toggleLockBottom: any;
  hidAction: () => void;
  hidCheck: boolean;
  leftLogMessages: [string];
  rightLogMessages: [string];
  leftBusy: boolean;
  rightBusy: boolean;
  leftLockBottom: boolean;
  rightLockBottom: boolean;
}

export enum ConsoleId {
  left = 'LEFT_CONSOLE',
  right = 'RIGHT_CONSOLE',
}


class Step3 extends React.Component<Step3Props, any> {

  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <span className={styles.hide}/>
            <span className={styles.title}>what to do</span>
            <span onClick={this.props.hidAction} className={styles.hide}>{this.props.hidCheck ? 'expand' : 'hide'}</span>
          </div>
          <div id="hideStep3" className={styles.expContent} hidden={this.props.hidCheck}>
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
            <ReduxConsole
              handler={(txt: string) => { this.props.runCmd(ConsoleId.left, 'ccx_preCICE -i flap -precice-participant Calculix'); }}
              promptLabel="$ "
              busy={this.props.leftBusy}
              logMessages={this.props.leftLogMessages}
              lockBottom={this.props.leftLockBottom}
            />
            <div onClick={() => {this.props.toggleLockBottom(ConsoleId.left, !this.props.leftLockBottom); }}>
              <input type="checkbox" readOnly={true} checked={this.props.leftLockBottom} />&nbsp;
              Scroll with output
            </div>
          </div>
          <div className={styles.solR}>
            <ReduxConsole
              handler={(txt: string) => { this.props.runCmd(ConsoleId.right, '~/Solvers/SU2_fin/bin/SU2_CFD su2-config.cfg'); }}
              promptLabel="$ "
              busy={this.props.rightBusy}
              logMessages={this.props.rightLogMessages}
              lockBottom={this.props.rightLockBottom}
            />
            <div onClick={() => {this.props.toggleLockBottom(ConsoleId.right, !this.props.rightLockBottom); }}>
              <input type="checkbox" readOnly={true} checked={this.props.rightLockBottom} />&nbsp;
              Scroll with output
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  hidCheck: hidCheckSelector(),
  leftLogMessages: logMessagesSelector(ConsoleId.left),
  rightLogMessages: logMessagesSelector(ConsoleId.right),
  leftLockBottom: lockBottomSelector(ConsoleId.left),
  rightLockBottom: lockBottomSelector(ConsoleId.right),
  leftBusy: busySelector(ConsoleId.left),
  rightBusy: busySelector(ConsoleId.right),
});

function mapDispatchToProps(dispatch) {
  return {
    runCmd: (consoleId: ConsoleId, cmd: string) => {
      dispatch({ type: 'socket/exec_cmd', consoleId, cmd });
      dispatch({ type: CONSOLE_TOGGLE_BUSY, consoleId, value: true });
      },
    toggleLockBottom: (consoleId: ConsoleId, value) => dispatch({ type: CONSOLE_TOGGLE_LOCK_BOTTOM, consoleId, value }),
    hidAction: () => { dispatch({ type: HID_CHECK3, check: document.getElementById('hideStep3').hidden}); },
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step3);

export const consoleMiddleware = store => next => action => {

  const consoleAction = action.type === 'socket/stdout' || action.type === 'socket/stderr' || action.type === 'socket/exit';

  if (consoleAction) {

    const { consoleId, data, type } = action;
    if (type === 'socket/stdout' || type === 'socket/stderr') {
      const lines = data.split('\n');
      store.dispatch({type: CONSOLE_ADD_LINES, consoleId, lines});
    } else if (action.type === 'socket/exit') {

      store.dispatch({type: CONSOLE_ADD_LINES, consoleId, lines: ['returned with exit code ' + action.code]});
      store.dispatch({type: CONSOLE_TOGGLE_BUSY, consoleId, value: false});

    }

  }


  return next(action);
};

