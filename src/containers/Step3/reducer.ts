import { fromJS } from 'immutable';
import {
  INIT_CONSOLE, HID_CHECK3, CONSOLE_ONE_ACTIVE, CONSOLE_TWO_ACTIVE,
  PLOT_MODAL_DATA, TIME_MODAL_DATA, IS_SIMULATION_RUNNING, ADD_FINAL_TIME,
} from '../constants';
import { ConsoleId } from './index';

const initialState = fromJS({
  consoles: {
    [ConsoleId.left]: null,
    [ConsoleId.right]: null,
  },

  finalTime: [ ],
  hidCheck: false,
  consoleOneActive: false,
  consoleTwoActive: false,
  showPlotModal: false,
  showTimeModal: false,
  isSimulationRunning: false,
});

// IS_SIMULATION_RUNNING IS IMPORTANT PRIMARILY BECAUSE
// WE CHANGE MULTIPLE FIELDS IN THE STATE

export function step3Reducer(state = initialState, action: any) {
  switch (action.type) {

    case INIT_CONSOLE:
      return state
        .setIn(['consoles', action.consoleId], action.console);

    case HID_CHECK3:
      return state
        .set('hidCheck', !action.check);

    case CONSOLE_ONE_ACTIVE:
      return state
        .set('consoleOneActive', action.value);

    case CONSOLE_TWO_ACTIVE:
      return state.
        set('consoleTwoActive', action.value);

   case PLOT_MODAL_DATA:
    return state
      .set('showPlotModal', action.value);

    case TIME_MODAL_DATA:
      return state
        .set('showTimeModal', action.value);

    case IS_SIMULATION_RUNNING:

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

    case ADD_FINAL_TIME:
      return state
        .update('finalTime', finalTime => finalTime.push(action.data));

    default:
      return state;
  }
}
