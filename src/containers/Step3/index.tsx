// TODO: Handle dispatch for last iteration
// TODO: Store total simulation time.
// TODO: Automatically show modal when both consoles are active
// TODO: How is "state" being shadowd in middleware
// TODO: Why do selectors with substate.get() not work with Object.assign?

import {connect} from 'react-redux';
import * as React from 'react';
import {createStructuredSelector} from 'reselect';
import {
  busySelector,
  consoleOneStateSelector,
  consoleTwoStateSelector,
  hidCheckSelector,
  highScoreSelector,
  lockBottomSelector,
  logMessagesSelector,
  modalDisplaySelector, oldChunksSelector,
  timeModalDisplaySelector,
} from './selectors';
import {
  partNumberSelector,
} from '../Tutorial/selectors';
import {
  ADD_CHART_DATA,
  ADD_FINAL_TIME,
  ADD_PROGRESS_MAX_ITER,
  CONSOLE_ADD_LINES,
  CONSOLE_CLEAR,
  CONSOLE_ONE_ACTIVE,
  CONSOLE_TOGGLE_BUSY,
  CONSOLE_TOGGLE_LOCK_BOTTOM,
  CONSOLE_TWO_ACTIVE,
  HID_CHECK3,
  IS_SIMULATION_DONE,
  IS_SIMULATION_RUNNING,
  IVE_READ, PLOT_DELETE_DATA,
  PLOT_MODAL_DATA,
  TIME_MODAL_DATA,
} from '../constants';
import * as styles from './styles.scss';
import * as calculix_1 from '../../static/calculix_1.png';
import * as calculix_2 from '../../static/calculix_2.png';
import * as calculix_3 from '../../static/calculix_3.png';
import * as calculix_4 from '../../static/calculix_4.png';
import * as SU2_1 from '../../static/SU2_1.png';
import * as SU2_2 from '../../static/SU2_2.png';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ConPlot from '../ConvergencePlot';
import { default as ReduxConsole, ConsoleChunk} from '../../components/ReduxConsole/index';
import WhatToDoBlock from '../WhatToDoBlock/index';
import { initialRelaxationValueSelector } from '../Step2/selectors';
import Modal = require('react-modal');
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

interface Step3Props {
  dispatch: any;
  runCmd: any;
  toggleLockBottom: any;
  clearConsole: any;
  hidAction: () => void;
  hidCheck: boolean;
  consoleOneActive: boolean;
  consoleTwoActive: boolean;

  showPlotModal: boolean;
  plotOrOutput: number;
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
  leftOldChunks: [ConsoleChunk];
  rightOldChunks: [ConsoleChunk];
  relax: number;

  partNumber: number;
}

// className={styles.timeModal}
// overlayClassName={styles.timeModalOverlay}

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
        return (
          <tr key={index} className={styles.redRow}>
            <td>{index + 1}</td>
            <td>{listValue}</td>
          </tr>);
      } else {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{listValue}</td>
          </tr>);
      }
    });
  }

  public componentWillMount() {
  }

  public componentWillReceiveProps(nextProps) {
  }

  public render() {
    return (
      <div className={styles.subContainer}>
        <Modal
          isOpen={this.props.showTimeModal}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.props.closeTimeModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.8)', /* Black w/ opacity */
            },
            content: {
              minWidth: '10vw',
              minHeight: '20vh',
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
          <div className={styles.modalHeader}>
            <div className={styles.subCon}/>
            <div className={styles.subTitle}>
            </div>
            <div className={styles.subCon}>
              <div onClick={this.props.closeTimeModal} className={styles.close}>&times;</div>
            </div>
          </div>
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
              </tr>
              {this.renderTable(this.props.highScores)}
              </tbody>
            </table>
          </div>

        </Modal>

        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <span className={styles.dummy}/>
            <span className={styles.title}/>
            <span
              id="hideButton"
              onClick={this.props.hidAction}
              className={styles.hide}
            >
              {this.props.hidCheck ? <i className="fa fa-chevron-down" aria-hidden="true"/> : <i className="fa fa-chevron-up" aria-hidden="true"/>}
            </span>
          </div>
          <div id="hideStep3" hidden={this.props.hidCheck}>
            {this.props.partNumber === 1 ?
              <div className={styles.expContentContainer}>
                <TabList className={styles.expContentList}>
                  <Tab className={styles.expContentTab} selected={!this.props.showPlotModal} onClick={this.props.closePlotModal} tabFor="tab-to-do">TO DO</Tab>
                  <Tab className={styles.expContentTab} selected={this.props.showPlotModal} onClick={this.props.openPlotModal} tabFor="tab-plot">PLOT</Tab>
                </TabList>
                <TabPanel className={styles.expContent} selected={!this.props.showPlotModal} tabId="tab-to-do">
                  <WhatToDoBlock stepNumber={3} partNumber={this.props.partNumber}/>
                </TabPanel>
                <TabPanel className={styles.expContent} selected={this.props.showPlotModal} tabId="tab-plot">
                  <ConPlot/>
                </TabPanel>
                <div className={styles.expContentDummy}/>
              </div> :
              <div className={styles.expContentContainer}>
                <div className={styles.expContent}>
                  <ConPlot/>
                </div>
              </div>}
          </div>
          <div className={styles.expContentHide} hidden={!this.props.hidCheck}/>
        </div>
        <div className={styles.subsubContainer}>
          <div className={styles.solL}>
            <ReduxConsole
              handler={(txt: string) => {
                this.props.dispatch({
                  type: CONSOLE_ADD_LINES,
                  consoleId: ConsoleId.left,
                  lines: ['$ ccx_preCICE -i flap -precice-participant Calculix']});
                this.props.runCmd(ConsoleId.left, 'ccx_preCICE -i flap -precice-participant Calculix', this.props.relax);
              }}
              promptLabel="$ ccx_preCICE -i flap -precice-participant Calculix"
              busy={this.props.leftBusy}
              logMessages={this.props.leftLogMessages}
              lockBottom={this.props.leftLockBottom}
              oldChunks={this.props.leftOldChunks}
            />
            <div>
              <div
                className={styles.belowConsoleElm}
                onClick={() => {
                  this.props.toggleLockBottom(ConsoleId.left, !this.props.leftLockBottom);
                }}
              >
                <input type="checkbox" readOnly={true} checked={this.props.leftLockBottom}/>&nbsp;
                Scroll with output
              </div>
              &nbsp;
              <a
                className={`${styles.belowConsoleElm} ${styles.link}`}
                onClick={() => {
                  this.props.clearConsole(ConsoleId.left);
                }}
              >
                Clear Console
              </a>
            </div>
          </div>
          <div className={styles.solR}>
            <ReduxConsole
              handler={(txt: string) => {
                this.props.dispatch({
                  type: CONSOLE_ADD_LINES,
                  consoleId: ConsoleId.right,
                  lines: ['$ SU2_CFD euler_config_coupled.cfg']});
                this.props.runCmd(ConsoleId.right, 'SU2_CFD euler_config_coupled.cfg', this.props.relax);
              }}
              promptLabel="$ SU2_CFD euler_config_coupled.cfg"
              busy={this.props.rightBusy}
              logMessages={this.props.rightLogMessages}
              lockBottom={this.props.rightLockBottom}
              oldChunks={this.props.rightOldChunks}
            />
            <div>
              <div
                className={styles.belowConsoleElm}
                onClick={() => {
                  this.props.toggleLockBottom(ConsoleId.right, !this.props.rightLockBottom);
                }}
              >
                <input type="checkbox" readOnly={true} checked={this.props.rightLockBottom}/>&nbsp;
                Scroll with output
              </div>
              &nbsp;
              <a
                className={`${styles.belowConsoleElm} ${styles.link}`}
                onClick={() => {
                  this.props.clearConsole(ConsoleId.right);
                }}
              >
                Clear Console
              </a>
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
  partNumber: partNumberSelector(),
  leftOldChunks: oldChunksSelector(ConsoleId.left),
  rightOldChunks: oldChunksSelector(ConsoleId.right),
  relax: initialRelaxationValueSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch: (...args) => dispatch(...args),
    runCmd: (consoleId: ConsoleId, cmd: string, relaxParam: number) => {
      dispatch({ type: 'socket/exec_cmd', consoleId, cmd, relaxParam });
      dispatch({ type: CONSOLE_TOGGLE_BUSY, consoleId, value: true });
      // clear plot when starting the simulation
      dispatch({ type: PLOT_DELETE_DATA });
      // parsing inside consoleMiddleware
      lastIt = 0;
// lastDt = 1 reflects starting value of dt
// in Calculix output
      lastDt = 1;
// See explanation below in consoleMiddleware
      dtFlag = 1;

// detect console activity
// only dispatch action the
// first time
      consoleOne = false;
      consoleTwo = false;

      it = undefined;
      dt = undefined;
    },
    toggleLockBottom: (consoleId: ConsoleId, value) => dispatch({ type: CONSOLE_TOGGLE_LOCK_BOTTOM, consoleId, value }),
    hidAction: () => {
      dispatch({ type: HID_CHECK3, check: document.getElementById('hideStep3').hidden } );
    },
    openPlotModal: (event) => {
      dispatch({ type: PLOT_MODAL_DATA, value: true });
    },
    closePlotModal: () => {
      dispatch({ type: PLOT_MODAL_DATA, value: false });
    },
    closeTimeModal: () => {
      dispatch({ type: TIME_MODAL_DATA, value: false });
    },
    clearConsole: (consoleId: ConsoleId) => {
      dispatch({ type: CONSOLE_CLEAR, consoleId });
    },
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

    const { consoleId } = action;
    if (action.type === 'socket/stdout' || action.type === 'socket/stderr') {
      const lines = action.data.split('\n');

      if (!consoleOne && consoleId === ConsoleId.left) {
        store.dispatch({ type: CONSOLE_ONE_ACTIVE, value: true });
        consoleOne = true;
      }

      if (!consoleTwo && consoleId === ConsoleId.right) {
        store.dispatch({ type: CONSOLE_TWO_ACTIVE, value: true });
        consoleTwo = true;
      }

      const itReg = /it\s(\d+)\sof\s\d+/;
      const dtReg = /dt#\s(\d+)\sof\s(\d+)/;
      const timeReg = /Global\s*runtime\s*=\s*(\d+)ms\s*\/\s*(\d+)s/;
      // Adding our parsing logic here:

      // We want the Calculix console
      if (consoleId === ConsoleId.left) {
        for (const line of lines) {
          const foundIt = line.match(itReg);

          // TODO: Don't check for time in every run

          const foundTime = line.match(timeReg);
          if (foundTime != null) {
            // foundTIme[2] is time in seconds [1] in ms
            const time = parseInt(foundTime[2], 10);
            store.dispatch({ type: ADD_FINAL_TIME, data: time });

            // Finding "Global time" means simulation has ended
            store.dispatch({ type: IS_SIMULATION_RUNNING, value: false });

            // TODO: Does it make sense to do the last dispatch here?

          }

          if (foundIt != null) {
            const foundDt = line.match(dtReg);

            // foundIt[1] because that contains the
            // matched number. Look up parenthesis in
            // javascript regex.

            it = parseInt(foundIt[1], 10);
            dt = parseInt(foundDt[1], 10);

            // Multiple instances of dt === 1 and it === 1
            // We only want to update the state once
            // so we use dtFlag to make sure of that.
            if (dtFlag === 1 && dt === 1 && it === 1) {
              const maxDt = parseInt(foundDt[2], 10);
              // This means simulation is running
              store.dispatch({ type: IS_SIMULATION_RUNNING, value: true });
              store.dispatch({ type: ADD_PROGRESS_MAX_ITER, maxTimeSteps: maxDt });
              dtFlag = 0;
            }

            if (dt > lastDt) {
              store.dispatch({ type: ADD_CHART_DATA, data: { x: lastDt, y: lastIt } });
              lastIt = it;
              lastDt = dt;
            } else {
              lastIt = it;
            }

          }
        }
      }

      store.dispatch({ type: CONSOLE_ADD_LINES, consoleId, lines });
    } else if (action.type === 'socket/exit') {
      // Hopefully the last value
      store.dispatch({ type: ADD_CHART_DATA, data: { x: dt, y: it } });
      store.dispatch({ type: CONSOLE_ADD_LINES, consoleId, lines: ['returned with exit code ' + action.code] });
      store.dispatch({ type: CONSOLE_TOGGLE_BUSY, consoleId, value: false });
      store.dispatch({ type: IS_SIMULATION_DONE, consoleId, value: true });
      // Variables to hold global information for
    }

  }


  return next(action);
};

// /Global\sruntime\s*=\s*(\d+ms)\s*\/\s*(\d+s)/
