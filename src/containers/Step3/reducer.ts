import { fromJS, List } from 'immutable';
import {
  ADD_FINAL_TIME,
  CONSOLE_ADD_LINES,
  CONSOLE_CLEAR,
  CONSOLE_ONE_ACTIVE,
  CONSOLE_TOGGLE_BUSY,
  CONSOLE_TOGGLE_LOCK_BOTTOM,
  CONSOLE_TWO_ACTIVE,
  HID_CHECK3,
  IS_SIMULATION_DONE,
  IS_SIMULATION_RUNNING,
  PLOT_MODAL_DATA,
  TIME_MODAL_DATA,
  SIMULATION_CLEAR_DONE,
} from '../constants';
import { ConsoleId } from './index';


const cachedHs = localStorage.getItem('highscoreTimes');
const initialState = fromJS({
  consoles: {
    [ConsoleId.left]: {
      logMessages: [],
      lockBottom: true,
      busy: false,
      done: false,
      oldChunks: [],
    },
    [ConsoleId.right]: {
      logMessages: [],
      lockBottom: true,
      busy: false,
      done: false,
      oldChunks: [],
    },
  },

  finalTime: 0,
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

const MSG_CHUNKSIZE = 200;

export function step3Reducer(state = initialState, action: any) {
  switch (action.type) {
    case CONSOLE_ADD_LINES: {
      const { lines } = action;
      let newChunk = null;
      const newState = state.updateIn(['consoles', action.consoleId, 'logMessages'], (old: List<string>) => {
        if (old.size < MSG_CHUNKSIZE) {
          return old.push(...lines);
        } else {
          newChunk = {
            key: (Math.random() + '').substr(0, 10) + Date.now(),
            content: old.slice(0, MSG_CHUNKSIZE).join('\n'),
          };
          return old.slice(MSG_CHUNKSIZE).push(...lines);
        }
      });
      if (newChunk) {
        return newState.updateIn(['consoles', action.consoleId, 'oldChunks'], (old) => old.push(newChunk));
      }
      return newState;
    }
    case CONSOLE_CLEAR:
      return state
        .updateIn(['consoles', action.consoleId, 'logMessages'], () => fromJS([]))
        .updateIn(['consoles', action.consoleId, 'oldChunks'], () => fromJS([]))
        ;
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
    case ADD_FINAL_TIME: {
      /*const cached = localStorage.getItem('highscoreTimes');
      const newVal = cached ? JSON.parse(cached) : [];
      newVal.push(action.data);
      localStorage.setItem(
        'highscoreTimes',
        JSON.stringify(newVal),
      );*/
      return state
        .set('finalTime', action.data);
    }
    case SIMULATION_CLEAR_DONE: {
      return state
        .setIn(['consoles', action.consoleId, 'done'], false);
    }
    default:
      return state;
  }
}
