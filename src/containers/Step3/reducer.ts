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
  CONSOLE_INIT_TIME,
  CONSOLE_UPDATE_TIME,
  TOGGLE_COUPLING,
  SIMULATION_ERRORED,
} from '../constants';
import { ConsoleId } from './index';

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
  showPlot: false,
  showTimeModal: false,
  isSimulationRunning: false,
  isCouplingRunning: false,
  isErrored: false, 
  dt: 1,
  it: 0,
});

// ISSIMULATION_RUNNING IS IMPORTANT PRIMARILY BECAUSE
// WE CHANGE MULTIPLE FIELDS IN THE STATE

// NOTE: MSG_CHUNKSIZE ideally should not be smaller than maximum messages send from the backend
const MSG_CHUNKSIZE = 200;

export function step3Reducer(state = initialState, action: any) {
  switch (action.type) {
    case CONSOLE_UPDATE_TIME: {
      const dt = state.get('dt');
      if (action.dt > dt) {
        return state.set('it', action.it).set('dt', action.dt);
      } else {
        return state.set('it', action.it);
      }
    }
    case CONSOLE_INIT_TIME: {
      return state.set('it', 0).set('dt', 1);
    }
    case CONSOLE_ADD_LINES: {
      const { lines } = action;
      console.log("Adding new lines"); 
      const msg_length = lines.length;
      let newChunk = null;
      const newState = state.updateIn(['consoles', action.consoleId, 'logMessages'], (old: List<string>) => {
        if (old.size + lines.length <= MSG_CHUNKSIZE) {
          return old.push(...lines);
        } else {
          const extraLines = old.size + lines.length - MSG_CHUNKSIZE;
          console.log(`Size of extra lines is ${extraLines}`); 
          // we need to truncate the received as well
          if ( lines.length >= MSG_CHUNKSIZE) { 
            newChunk = {
              key: (Math.random() + '').substr(0, 10) + Date.now(),
              content: old.push(lines.slice(0, extraLines - MSG_CHUNKSIZE)),
            };
            return List(lines.slice(lines.length - MSG_CHUNKSIZE)) ; 
          }
          newChunk = {
            key: (Math.random() + '').substr(0, 10) + Date.now(),
            content: old.slice(0, extraLines).join('\n'),
          };
          return old.slice(extraLines).push(...lines);
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
        .set('showPlot', action.value);

    case TIME_MODAL_DATA:
      return state
        .set('showTimeModal', action.value);
    case IS_SIMULATION_DONE:
      return state
        .setIn(['consoles', action.consoleId, 'done'], action.value);

    case IS_SIMULATION_RUNNING: {
      return state.set('isSimulationRunning', action.value); 
    }
    case TOGGLE_COUPLING: {
      console.log(`Toggling coupling to ${action.value} from the reducers`); 
      return state.set('isCouplingRunning', action.value);
    }
    case ADD_FINAL_TIME: {
      return state
        .set('finalTime', action.data);
    }
    case SIMULATION_CLEAR_DONE: {
      return state
        .setIn(['consoles', action.consoleId, 'done'], false);
    }
    case SIMULATION_ERRORED: {
      return state.
        set('isErrored', action.value); 
    }
    default:
      return state;
  }
}
