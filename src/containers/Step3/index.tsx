import {connect} from 'react-redux';
import * as React from 'react';
import {createStructuredSelector} from 'reselect';
import {
  busySelector,
  consoleOneStateSelector,
  consoleTwoStateSelector,
  hidCheckSelector,
  finalTimeSelector,
  lockBottomSelector,
  logMessagesSelector,
  plotDisplaySelector, oldChunksSelector,
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
  PLOT_DELETE_DATA,
  PLOT_MODAL_DATA,
  TIME_MODAL_DATA,
  SIMULATION_CLEAR_DONE,
} from '../constants';
import * as styles from './styles.scss';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ConPlot from '../ConvergencePlot';
import { default as ReduxConsole, ConsoleChunk} from '../../components/ReduxConsole/index';
import WhatToDoBlock from '../WhatToDoBlock/index';
import Modal = require('react-modal');

interface Step3Props {
  dispatch: any;
  runCmd: any;
  toggleLockBottom: any;
  clearConsole: any;
  hidAction: () => void;
  hidCheck: boolean;
  consoleOneActive: boolean;
  consoleTwoActive: boolean;

  showPlot: boolean;
  openPlot: () => void;
  closePlot: () => void;

  showTimeModal: boolean;
  closeTimeModal: () => void;
  finalTime: number;

  leftLogMessages: [string];
  rightLogMessages: [string];
  leftBusy: boolean;
  rightBusy: boolean;
  leftLockBottom: boolean;
  rightLockBottom: boolean;
  leftOldChunks: [ConsoleChunk];
  rightOldChunks: [ConsoleChunk];

  clearDone: any;

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
  }

  public componentWillMount() {
    if (!this.props.leftBusy && !this.props.rightBusy) {
      this.props.clearConsole(ConsoleId.right);
      this.props.clearConsole(ConsoleId.left);
      this.props.clearDone(ConsoleId.right);
      this.props.clearDone(ConsoleId.left);
    }
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
              backgroundColor: 'rgba(0,0,0,0.8)',
            },
            content: {
              maxWidth: '80vw',
              maxHeight: '80vw',
              top: '50%',
              left: '50%',
              bottom: 'auto',
              transform: 'translate(-50%, -50%)',
              margin: 'auto',
              backgroundColor: '#dddddd',
            },
          }
          }
        >
          <div className={styles.modalHeader}>
            <div className={styles.subCon}/>
            <div className={styles.subTitle}>
              Simulation Finished
            </div>
            <div className={styles.subCon}>
              <div onClick={this.props.closeTimeModal} className={styles.close}>&times;</div>
            </div>
          </div>
          <div className={styles.tableDiv}>
            <div className={styles.simulationText}>
              Elapsed Time: {this.props.finalTime} s
            </div>
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
              {this.props.hidCheck ? <span>expand <i className="fa fa-chevron-down" aria-hidden="true"/></span> :
                <span>hide <i className="fa fa-chevron-up" aria-hidden="true"/></span>}
            </span>
          </div>
          <div id="hideStep3" hidden={this.props.hidCheck}>
            {(this.props.partNumber === 1 || this.props.partNumber === 3) ?
              <div className={styles.expContentContainer}>
                <TabList className={styles.expContentList}>
                  <Tab className={styles.expContentTab} selected={!this.props.showPlot} onClick={this.props.closePlot} tabfor="tab-to-do">TO DO</Tab>
                  <Tab className={styles.expContentTab} selected={this.props.showPlot} onClick={this.props.openPlot} tabfor="tab-plot">PLOT</Tab>
                </TabList>
                <TabPanel className={styles.expContent} selected={!this.props.showPlot} tabId="tab-to-do">
                  <WhatToDoBlock stepNumber={3} partNumber={this.props.partNumber}/>
                </TabPanel>
                <TabPanel className={styles.expContent} selected={this.props.showPlot} tabId="tab-plot">
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
                this.props.runCmd(ConsoleId.left, 'ccx_preCICE -i flap -precice-participant Calculix', this.props.partNumber);
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
                this.props.runCmd(ConsoleId.right, 'SU2_CFD euler_config_coupled.cfg', this.props.partNumber);
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

const mapStateToProps = createStructuredSelector({
  hidCheck: hidCheckSelector(),
  consoleOneActive: consoleOneStateSelector(),
  consoleTwoActive: consoleTwoStateSelector(),
  showPlot: plotDisplaySelector(),
  showTimeModal: timeModalDisplaySelector(),
  finalTime: finalTimeSelector(),
  leftLogMessages: logMessagesSelector(ConsoleId.left),
  rightLogMessages: logMessagesSelector(ConsoleId.right),
  leftLockBottom: lockBottomSelector(ConsoleId.left),
  rightLockBottom: lockBottomSelector(ConsoleId.right),
  leftBusy: busySelector(ConsoleId.left),
  rightBusy: busySelector(ConsoleId.right),
  partNumber: partNumberSelector(),
  leftOldChunks: oldChunksSelector(ConsoleId.left),
  rightOldChunks: oldChunksSelector(ConsoleId.right),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch: (...args) => dispatch(...args),
    runCmd: (consoleId: ConsoleId, cmd: string, partNumber: number) => {
      dispatch({ type: 'socket/exec_cmd', consoleId, cmd, partNumber });
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
    openPlot: (event) => {
      dispatch({ type: PLOT_MODAL_DATA, value: true });
    },
    closePlot: () => {
      dispatch({ type: PLOT_MODAL_DATA, value: false });
    },
    closeTimeModal: () => {
      dispatch({ type: TIME_MODAL_DATA, value: false });
    },
    clearConsole: (consoleId: ConsoleId) => {
      dispatch({ type: CONSOLE_CLEAR, consoleId });
    },
    clearDone: (consoleId: ConsoleId) => {
      dispatch({type: SIMULATION_CLEAR_DONE, consoleId});
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
      if (Array.isArray(action.consoleId)) {
        action.consoleId.forEach((cId, ind) => stdout(store, cId, action.data[ind]));
      } else {
        stdout(store, action.consoleId, action.data);
      }
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

function stdout(store, consoleId, data) {
  const lines = data.split('\n');

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
}

// /Global\sruntime\s*=\s*(\d+ms)\s*\/\s*(\d+s)/
