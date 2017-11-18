import { fromJS } from 'immutable';
import {
  ADD_FINAL_TIME,
  CONSOLE_ADD_LINES,
  CONSOLE_ONE_ACTIVE,
  CONSOLE_TOGGLE_BUSY,
  CONSOLE_TOGGLE_LOCK_BOTTOM,
  CONSOLE_TWO_ACTIVE,
  HID_CHECK3,
  IS_SIMULATION_RUNNING,
  IS_SIMULATION_DONE,
  PLOT_MODAL_DATA,
  TIME_MODAL_DATA,
} from '../constants';
import { ConsoleId } from './index';

const initialState = fromJS({
  consoles: {
    [ConsoleId.left]: {
      logMessages: ['$ ccx_preCICE -i flap -precice-participant Calculix'],
      lockBottom: true,
      busy: false,
      done: false,
    },
    [ConsoleId.right]: {
      logMessages: ['$ SU2_CFD euler_config_coupled.cfg'],
      lockBottom: true,
      busy: false,
      done: false,
    },
  },

  finalTime: [],
  hidCheck: false,
  consoleOneActive: false,
  consoleTwoActive: false,
  showPlotModal: false,
  showTimeModal: false,
  isSimulationRunning: false,
  isSimulationDone: false,
});

// IS_SIMULATION_RUNNING IS IMPORTANT PRIMARILY BECAUSE
// WE CHANGE MULTIPLE FIELDS IN THE STATE

export function step3Reducer(state = initialState, action: any) {
  switch (action.type) {
    case CONSOLE_ADD_LINES: {
      const { lines } = action;
      return state.updateIn(['consoles', action.consoleId, 'logMessages'], (old) => {
        if (old.size < 5000) {
          return old.push(...lines);
        } else {
          return old.slice(lines.length).push(...lines);
        }
      });
    }
    case CONSOLE_TOGGLE_BUSY:
      return state
        .setIn(['consoles', action.consoleId, 'busy'], action.value);
    case CONSOLE_TOGGLE_LOCK_BOTTOM:
      return state
        .setIn(['consoles', action.consoleId, 'lockBottom'], action.value);
    case HID_CHECK3:
      return state
        .set('hidCheck', !action.check);

    case CONSOLE_ONE_ACTIVE:
      return state
        .set('consoleOneActive', action.value);

    case CONSOLE_TWO_ACTIVE:
      return state.set('consoleTwoActive', action.value);

    case PLOT_MODAL_DATA:
      return state
        .set('showPlotModal', action.value);

    case TIME_MODAL_DATA:
      return state
        .set('showTimeModal', action.value);
    case IS_SIMULATION_DONE:
      return state
        .setIn(['consoles', action.consoleId, 'done'], action.value);

    case IS_SIMULATION_RUNNING: {
      const preVal = state.get('isSimulationRunning');

      // TODO: Think of a better way to achieve the following
      if (preVal === false && action.value === true) {

        return state
          .set('isSimulationRunning', action.value).set('showPlotModal', true);
      } else if (preVal === true && action.value === false) {

        return state
          .set('isSimulationRunning', action.value).set('showTimeModal', true);
      } else {

        return state
          .set('isSimulationRunning', action.value);
      }
    }
    case ADD_FINAL_TIME:
      return state
        .update('finalTime', finalTime => finalTime.push(action.data));

    default:
      return state;
  }
}
