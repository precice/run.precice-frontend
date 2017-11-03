import { connect } from 'react-redux';
import { INIT_CONSOLE } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import * as styles from './styles.scss';
import Console from 'react-console-component';
import { hidCheckSelector, chartDataSelector} from './selectors';
import { HID_CHECK3 } from '../constants';
import { ADD_CHART_DATA, ADD_PROGRESS_MAX_ITER } from '../constants';

// VictoryChart is a wrapper
import {VictoryScatter, VictoryChart, VictoryTheme} from 'victory';

// TODO:
// 1. How do I receive data from the server and add it to redux store?

interface Step3Props {
  sendMsg: any;
  initConsole: any;
  hidAction: () => void;
  hidCheck: boolean;
  // data is object array for Victory chart
  data: object[];
}

export enum ConsoleId {
  left = 1,
  right = 2,
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
              <VictoryChart
                theme={VictoryTheme.material}
                domain={{}}
              >
                <VictoryScatter
                  style={{ data: { fill: '#c43a31' } }}
                  data={this.props.data}
                />
              </VictoryChart>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  hidCheck: hidCheckSelector(),
  data: chartDataSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    initConsole: (consoleId: ConsoleId, console: Console) => dispatch({ type: INIT_CONSOLE, consoleId, console }),
    sendMsg: (consoleId: ConsoleId, cmd: string) => dispatch({ type: 'socket/exec_cmd', consoleId, cmd }),
    hidAction: () => { dispatch({ type: HID_CHECK3, check: document.getElementById('hideStep3').hidden}); },
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step3);

  // Variables to hold global information for
  // parsing inside consoleMiddleware
let lastIt = 0;
// lastDt = 1 reflects starting value of dt
// in Calculix output
let lastDt = 1;

// See explanation below in consoleMiddleware
let dtFlag = 1;

export const consoleMiddleware = store => next => action => {

  const consoleAction = action.type === 'socket/stdout' || action.type === 'socket/stderr' || action.type === 'socket/exit';

  if (consoleAction) {
    // replace with selector
    const cons = store.getState().getIn(['step3', 'consoles', action.consoleId]);

    if (action.type === 'socket/stdout' || action.type === 'socket/stderr') {
      const lines = action.data.split('\n');
      const itReg = /it\s(\d+)\sof\s\d+/;
      const dtReg = /dt#\s(\d+)\sof\s(\d+)/;
      // Adding our parsing logic here:

      // We want the Calculix console
      // And we're assuming it's the first one
      // TODO: Determine Calculix console
      if (action.consoleId === 1) {
        for (const line of lines) {
          const foundIt = line.match(itReg);
          if (foundIt != null) {
            const foundDt = line.match(dtReg);

            // foundIt[1] because that contains the
            // matched number. Look up parenthesis in
            // javascript regex.

            const it = parseInt( foundIt[1], 10 );
            const dt = parseInt( foundDt[1], 10 );

            // Multiple instances of dt === 1 and it === 1
            // We only want to update the state once
            // so we use dtFlag to make sure of that.
            if ( dtFlag === 1 && dt === 1 && it === 1 ) {
              const maxDt = parseInt( foundDt[2], 10 );
              store.dispatch( {type: ADD_PROGRESS_MAX_ITER, maxTimeSteps: maxDt} );
              dtFlag = 0;
            }

            // if current 'it' is less than
            // lastIt and 'dt' is greater than lastDt
            // then we have moved to a new time step
            if (dt > lastDt) {
              store.dispatch( {type: ADD_CHART_DATA, data: { x: lastDt, y: lastIt} } );
              lastIt = it;
              lastDt = dt;
            } else {
              lastIt = it;
            }

          }
        }
      }

      cons.log(...lines);
    } else if (action.type === 'socket/exit') {
      cons.log('returned with exit code ' + action.code);
      cons.return();
    }

    cons.scrollToBottom();
  }


  return next(action);
};


