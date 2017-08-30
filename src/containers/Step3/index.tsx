import { connect } from 'react-redux';
import { INIT_CONSOLE } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';
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


class Step3 extends React.Component<Step3Props, undefined> {
  constructor(props: Step3Props) {
    super(props);
  }


  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.subsubContainer}>
          <div className={styles.expContainer}>
            <div className={styles.expHeader}>
              what to do
            </div>
          </div>
          <div className={styles.solvers}>
            <div className={styles.solL}>
              <Console
                ref={(ref: Console) => this.props.initConsole(ConsoleId.left, ref)}
                handler={(txt: string) => this.props.sendMsg(ConsoleId.left, txt)}
                welcomeMessage={'Welcome to Solver One!'}
                autofocus={true}
              />
            </div>
            <div className={styles.solR}>
              <Console
                ref={(ref) => this.props.initConsole(ConsoleId.right, ref)}
                handler={(txt: string) => this.props.sendMsg(ConsoleId.right, txt)}
                welcomeMessage={'Welcome to Solver Two!'}
              />
            </div>
          </div>
        </div>
        <div className={styles.convergePlot}>
          <div className={styles.cpU}>
            <div className={styles.solHeader}>
              convergence plot for solver 1
            </div>
          </div>
          <div className={styles.cpD}>
            <div className={styles.solHeader}>
              convergence plot for solver 2
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
      action.data.split('\n').forEach((t) => cons.log(t));
    } else if (action.type === 'socket/exit') {
      cons.log('returned with exit code ' + action.code);
      cons.return();
    }
  }


  return next(action);
};

