
// TODO: Handle dispatch for last iteration
// TODO: Store total simulation time.
// TODO: Automatically show modal when both consoles are active
// TODO: How is "state" being shadowd in middleware
// TODO: Why do selectors with substate.get() not work with Object.assign?
=======


import { connect } from 'react-redux';
import {ADD_FINAL_TIME, INIT_CONSOLE, IS_SIMULATION_RUNNING, PLOT_MODAL_DATA, TIME_MODAL_DATA,  CONSOLE_ADD_LINES, CONSOLE_TOGGLE_BUSY, CONSOLE_TOGGLE_LOCK_BOTTOM} from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import * as styles from './styles.scss';
import Console from 'react-console-component';
import {
  hidCheckSelector, consoleOneStateSelector, consoleTwoStateSelector, modalDisplaySelector, highScoreSelector,
  timeModalDisplaySelector, busySelector,  lockBottomSelector, logMessagesSelector
} from './selectors';
import ConPlot from '../ConvergencePlot';
import { HID_CHECK3 } from '../constants';
import { ADD_CHART_DATA, ADD_PROGRESS_MAX_ITER, CONSOLE_ONE_ACTIVE, CONSOLE_TWO_ACTIVE} from '../constants';
import Modal = require('react-modal');
import ReduxConsole from '../../components/ReduxConsole/index';


interface Step3Props {
  runCmd: any;
  toggleLockBottom: any;
  hidAction: () => void;
  hidCheck: boolean;
  consoleOneActive: boolean;
  consoleTwoActive: boolean;

  showPlotModal: boolean;
  openPlotModal: () => void;
  closePlotModal: () => void;

  showTimeModal: boolean;
  closeTimeModal: () => void;
  highScores: any;

  leftLogMessages: [string];
  rightLogMessages: [string];
  leftBusy: boolean;
  rightBusy: boolean;
  leftLockBottom: boolean;
  rightLockBottom: boolean;
}
//className={styles.timeModal}
//overlayClassName={styles.timeModalOverlay}

// TODO: Put styles for TimeModal in styles.scss

export enum ConsoleId {
  left = 'LEFT_CONSOLE',
  right = 'RIGHT_CONSOLE',
}

// this.props.consoleOneActive && this.props.consoleTwoActive}
class Step3 extends React.Component<Step3Props, any> {
  constructor(props: Step3Props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  // Renders part of table
  private renderTable(timeArr) {
    const list = timeArr.toJSON();
    // current time is lastItem
    const lastItem = list[list.length - 1];
    list.sort((a, b) => a - b);
    const ind = list.indexOf(lastItem);
    return list.map((listValue, index) => {
      if (index === ind) {
        return(
          <tr key={index} className={styles.redRow}>
          <td>{index + 1}</td>
          <td>{listValue}</td>
        </tr>);
      } else {
        return(
          <tr key={index}>
          <td>{index + 1}</td>
          <td>{listValue}</td>
        </tr>);
      }
    });
  }

  public render() {
    return (
      <div className={styles.subContainer}>
        <Modal
          isOpen={this.props.showPlotModal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.props.closePlotModal}
        >
          <ConPlot/>

        </Modal>

        <Modal
          isOpen={this.props.showTimeModal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.props.closeTimeModal}
          style={{
            overlay: {

            },
          content: {
            minWidth : '10vw',
            minHeight : '20vh',
            maxWidth: '80vw',
            maxHeight: '80vw',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: 'auto',
          },
          }
          }
        >
          <div className={styles.tableDiv}>
            <div className={styles.simulationHeader}>
              Simulation Finished
            </div>
            <table className={styles.timeTable}>
              <caption className={styles.tableCaption}>Highscore List</caption>
              <tbody>
              <tr>
                <th> No.</th>
                <th>Time (s)</th>
              </tr>{this.renderTable(this.props.highScores)}
                </tbody>
            </table>
          </div>

        </Modal>

        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <span className={styles.hide}/>
            <span onClick={this.props.openPlotModal} className={styles.modalBtn}> Plot </span>
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
/*
 (
 () => {
 const one = this.props.consoleOneActive;
 const two = this.props.consoleTwoActive;
 if (one && two) {
 return <ConPlot/>;
 }
 }
 )()
 */

// domain={{ x: [ 0, 2 ] , y: [ 0, 3] }}
const mapStateToProps = createStructuredSelector({
  hidCheck: hidCheckSelector(),
  consoleOneActive: consoleOneStateSelector(),
  consoleTwoActive: consoleTwoStateSelector(),
  showPlotModal: modalDisplaySelector(),
  showTimeModal: timeModalDisplaySelector(),
  highScores: highScoreSelector(),
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
    openPlotModal: () => { dispatch ({type: PLOT_MODAL_DATA, value: true}); },
    closePlotModal: () => { dispatch({type: PLOT_MODAL_DATA, value: false}); },
    closeTimeModal: () => { dispatch({ type: TIME_MODAL_DATA, value: false }); },
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

// detect console activity
// only dispatch action the
// first time
let consoleOne = false;
let consoleTwo = false;

let it;
let dt;
export const consoleMiddleware = store => next => action => {

  const consoleAction = action.type === 'socket/stdout' || action.type === 'socket/stderr' || action.type === 'socket/exit';

  if (consoleAction) {

    if (action.type === 'socket/stdout' || action.type === 'socket/stderr') {
      const lines = action.data.split('\n');

      if (!consoleOne && action.consoleId === 1) {
        store.dispatch({type: CONSOLE_ONE_ACTIVE, value: true});
        consoleOne = true;
      }

      if (!consoleTwo && action.consoleId === 2) {
        store.dispatch({type: CONSOLE_TWO_ACTIVE, value: true});
        consoleTwo = true;
      }

      const itReg = /it\s(\d+)\sof\s\d+/;
      const dtReg = /dt#\s(\d+)\sof\s(\d+)/;
      const timeReg = /Global\s*runtime\s*=\s*(\d+)ms\s*\/\s*(\d+)s/;
      // Adding our parsing logic here:

      // We want the Calculix console
      if (action.consoleId === 1) {
        for (const line of lines) {
          const foundIt = line.match(itReg);

          // TODO: Don't check for time in every run

          const foundTime = line.match(timeReg);
          if (foundTime != null) {
            // foundTIme[2] is time in seconds [1] in ms
            const time = parseInt (foundTime[2], 10);
            store.dispatch( {type: ADD_FINAL_TIME, data: time });

            // Finding "Global time" means simulation has ended
            store.dispatch( {type: IS_SIMULATION_RUNNING, value: false});

            // TODO: Does it make sense to do the last dispatch here?

          }

          if (foundIt != null) {
            const foundDt = line.match(dtReg);

            // foundIt[1] because that contains the
            // matched number. Look up parenthesis in
            // javascript regex.

            it = parseInt( foundIt[1], 10 );
            dt = parseInt( foundDt[1], 10 );

            // Multiple instances of dt === 1 and it === 1
            // We only want to update the state once
            // so we use dtFlag to make sure of that.
            if ( dtFlag === 1 && dt === 1 && it === 1 ) {
              const maxDt = parseInt( foundDt[2], 10 );
              // This means simulation is running
              store.dispatch( {type: IS_SIMULATION_RUNNING, value: true } );
              store.dispatch( {type: ADD_PROGRESS_MAX_ITER, maxTimeSteps: maxDt} );
              dtFlag = 0;
            }

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

      store.dispatch({type: CONSOLE_ADD_LINES, consoleId, lines});
    } else if (action.type === 'socket/exit') {
    store.dispatch({type: CONSOLE_ADD_LINES, consoleId, lines: ['returned with exit code ' + action.code]});
    store.dispatch({type: CONSOLE_TOGGLE_BUSY, consoleId, value: false});
      // Hopefully the last value
      store.dispatch( { type: ADD_CHART_DATA, data: {x: dt, y: it} } );
      cons.return();
    }

  }


  return next(action);
};

// /Global\sruntime\s*=\s*(\d+ms)\s*\/\s*(\d+s)/
