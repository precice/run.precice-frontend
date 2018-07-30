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
  isCouplingRunningSelector,
  isSimulationRunningSelector,
  isFirstDoneSelector,
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
  CONSOLE_UPDATE_TIME,
  CONSOLE_INIT_TIME,
  TOGGLE_COUPLING,
} from '../constants';
import * as styles from './styles.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ConPlot from '../ConvergencePlot';
import { default as ReduxConsole, ConsoleChunk } from '../../components/ReduxConsole/index';
import WhatToDoBlock from '../WhatToDoBlock/index';
import Modal = require('react-modal');
import { getIn } from 'immutable';

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
  isCouplingRunning: boolean;
  isSimulationRunning: boolean;
  isFirstDone: boolean;
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

  public render() {
    const su2FileName = 'Part' + this.props.partNumber + '_Su2.log';
    const calculixFileName = 'Part' + this.props.partNumber + '_Calculix.log';
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
            <div className={styles.subCon} />
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
            <div className={styles.simulationSubtext}>
              You can now download log files for <a href={'../../logs/Part' + this.props.partNumber + '/su2.log'} download={su2FileName}> SU2 </a>
              and  <a href={'../../logs/Part' + this.props.partNumber + '/ccx.log'} download={calculixFileName} > CalculiX </a>
            </div>
          </div>

        </Modal>

        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <SimulationStatus isActive={this.props.isCouplingRunning}
              isSimulationRunning={this.props.isSimulationRunning}
              isFirstDone={this.props.isFirstDone}
              onToggle={() => {
                this.props.dispatch({
                  type: 'socket/' + (this.props.isCouplingRunning ? 'pause_simulation' : 'resume_simulation'),
                  partNumber: this.props.partNumber
                });
                this.props.dispatch({
                  type: TOGGLE_COUPLING
                });
              }} />
            <span className={styles.dummy} />
            <span className={styles.title} />
            <span
              id="hideButton"
              onClick={this.props.hidAction}
              className={styles.hide}
            >
              {this.props.hidCheck ? <span>expand <i className="fa fa-chevron-down" aria-hidden="true" /></span> :
                <span>hide <i className="fa fa-chevron-up" aria-hidden="true" /></span>}
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
                  lines: ['$ ccx_preCICE -i flap -precice-participant Calculix']
                });
                this.props.runCmd(ConsoleId.left, 'ccx_preCICE -i flap -precice-participant Calculix', this.props.partNumber);
              }}
              promptLabel="$ ccx_preCICE -i flap -precice-participant Calculix"
              busy={this.props.leftBusy}
              logMessages={this.props.leftLogMessages}
              lockBottom={this.props.leftLockBottom}
              oldChunks={this.props.leftOldChunks}
            />
            <div> 
              <div className={styles.belowConsoleElm}> 
                *You can also download the <a href={'../../logs/Part' + this.props.partNumber + '/ccx.log'} download={calculixFileName} >log file</a> of this simulation
            </div> 
          </div> 
            {/* Clear console is unused now */}
            {/*
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
              </div> */}
          </div>
          <div className={styles.solR}>
            <ReduxConsole
              handler={(txt: string) => {
                this.props.dispatch({
                  type: CONSOLE_ADD_LINES,
                  consoleId: ConsoleId.right,
                  lines: ['$ SU2_CFD euler_config_coupled.cfg']
                });
                this.props.runCmd(ConsoleId.right, 'SU2_CFD euler_config_coupled.cfg', this.props.partNumber);
              }}
              promptLabel="$ SU2_CFD euler_config_coupled.cfg"
              busy={this.props.rightBusy}
              logMessages={this.props.rightLogMessages}
              lockBottom={this.props.rightLockBottom}
              oldChunks={this.props.rightOldChunks}
            />
            <div> 
              <div className={styles.belowConsoleElm}> 
                *You can also download the <a href={'../../logs/Part' + this.props.partNumber + '/su2.log'} download={su2FileName} >log file</a> of this simulation
            </div> 
          </div> 
            {/*
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

interface SimulationStatusProps {
  onToggle: () => void;
  isActive: boolean;
  isSimulationRunning: boolean;
  isFirstDone: boolean;
}


class SimulationStatus extends React.Component<SimulationStatusProps, null> {
  constructor(props: SimulationStatusProps) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }

  public onToggle() {
    this.props.onToggle();
  }

  public render() {
    return (
      <div className={styles.simulationStatus} >
        {
          (this.props.isActive && this.props.isSimulationRunning) ?
            <span> <i className="fa fa-play" style={{ width: '35px', color: 'green' }} onClick={this.onToggle} ></i> Simulation is running </span>
            : this.props.isSimulationRunning ?
              <span> <i className="fa fa-stop" style={{ width: '35px', color: 'red' }} onClick={this.onToggle} ></i> Simulation is stopped </span> :
              this.props.isFirstDone ?
                < span > <i className="fa fa-play" style={{ width: '35px', color: 'green', visibility: 'hidden' }} onClick={this.onToggle} ></i> Simulation not started   </span> :
                <span> <i className="fa fa-stop" style={{ width: '35px', color: 'grey', visibility: 'hidden' }}  ></i> Simulation is finished </span>
        }
      </div>
    );
  }
};

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
  isCouplingRunning: isCouplingRunningSelector(),
  isSimulationRunning: isSimulationRunningSelector(),
  isFirstDone: isFirstDoneSelector(),
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch: (...args) => dispatch(...args),
    runCmd: (consoleId: ConsoleId, cmd: string, partNumber: number) => {
      dispatch({ type: 'socket/exec_cmd', consoleId, cmd, partNumber });
      dispatch({ type: CONSOLE_TOGGLE_BUSY, consoleId, value: true });
      // clear plot when starting the simulation
      dispatch({ type: PLOT_DELETE_DATA });
      dispatch({ type: CONSOLE_ONE_ACTIVE, value: false });
      dispatch({ type: CONSOLE_TWO_ACTIVE, value: false });
      dispatch({ type: CONSOLE_INIT_TIME} );
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
      store.dispatch({ type: ADD_CHART_DATA, data: { x: store.getState().getIn(['step3', 'dt']), y: store.getState().getIn(['step3', 'it']) }});
      store.dispatch({ type: CONSOLE_ADD_LINES, consoleId, lines: ['returned with exit code ' + action.code] });
      store.dispatch({ type: CONSOLE_TOGGLE_BUSY, consoleId, value: false });
      store.dispatch({ type: IS_SIMULATION_DONE, consoleId, value: true });
      // Variables to hold global information for
    }

  }


  return next(action);
};

function stdout(store, consoleId, data) {
  const maxTimeStep = store.getState().getIn(['chartData', 'maxDt']);
  const lines = data.split('\n');
// detect console activity
// only dispatch action the
// first time
  const consoleOne: boolean  = store.getState().getIn(['step3', 'consoleOneActive']);
  const consoleTwo: boolean  = store.getState().getIn(['step3', 'consoleTwoActive']);

  if (!consoleOne && consoleId === ConsoleId.left) {
    store.dispatch({ type: CONSOLE_ONE_ACTIVE, value: true });
  }

  if (!consoleTwo && consoleId === ConsoleId.right) {
    store.dispatch({ type: CONSOLE_TWO_ACTIVE, value: true });
  }

  const itReg = /it\s(\d+)\sof\s\d+/;
  const dtReg = /dt#\s(\d+)\sof\s(\d+)/;
  const timeReg = /Global\s*runtime\s*=\s*(\d+)ms\s*\/\s*(\d+)s/;
  // Adding our parsing logic here:

  // We want the SU2 console
  if (consoleId === ConsoleId.right) {
    for (const line of lines) {

      let it = store.getState().getIn(['step3', 'it']);
      let dt = store.getState().getIn(['step3', 'dt']);

      const foundIt = line.match(itReg);

      // Check the global runtime once we are done with all the timesteps
      if (( maxTimeStep !== 0 ) && ( dt >= maxTimeStep) ) {
        // we want second capture of regex, since it is in seconds 
        const  foundTime  = line.match(timeReg);

        if (foundTime != null) {
          // foundTIme[2] is time in seconds [1] in ms
          const time = parseInt(foundTime[2], 10);
          store.dispatch({ type: ADD_FINAL_TIME, data: time });
          // Finding "Global time" means simulation has ended
          store.dispatch({ type: IS_SIMULATION_RUNNING, value: false });
          store.dispatch({ type: TOGGLE_COUPLING });
          // TODO: Does it make sense to do the last dispatch here?

        }
      }

      if (foundIt != null) {
        // we one first capture since it contains the timestamp
        const foundDt  = line.match(dtReg);
        const lastDt = store.getState().getIn(['step3', 'dt']);
        const lastIt = store.getState().getIn(['step3', 'it']);
        dt = parseInt(foundDt[1], 10);
        it = parseInt(foundIt[1], 10);
        // if we went to the next timestamps update the plot 
        if ( dt > lastDt ) {
          store.dispatch({ type: ADD_CHART_DATA, data: { x: lastDt, y: lastIt } });
        }

        store.dispatch({ type: CONSOLE_UPDATE_TIME, it, dt});

        // Multiple instances of dt === 1 and it === 1
        // We only want to update the state once
        // so we use dtFlag to make sure of that.
        if ((maxTimeStep === 0 ) && dt === 1 && it === 1) {
          const maxDt = parseInt(foundDt[2], 10);
          // This means simulation is running
          store.dispatch({ type: IS_SIMULATION_RUNNING, value: true });
          store.dispatch({ type: ADD_PROGRESS_MAX_ITER, maxTimeSteps: maxDt });
        }
      }
    }
  }

  store.dispatch({ type: CONSOLE_ADD_LINES, consoleId, lines });
}

// /Global\sruntime\s*=\s*(\d+ms)\s*\/\s*(\d+s)/
