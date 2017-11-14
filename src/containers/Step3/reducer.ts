/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';

import {
  CONSOLE_ADD_LINES,
  CONSOLE_TOGGLE_BUSY,
  CONSOLE_TOGGLE_LOCK_BOTTOM,
  HID_CHECK3,
} from '../constants';
import { ConsoleId } from './index';


const initialState = fromJS({
  consoles: {
    [ConsoleId.left]: {
      logMessages: ['$ ccx_preCICE -i flap -precice-participant Calculix'],
      lockBottom: true,
      busy: false,
    },
    [ConsoleId.right]: {
      logMessages: ['$ ~/Solvers/SU2_fin/bin/SU2_CFD su2-config.cfg'],
      lockBottom: true,
      busy: false,
    },
  },
});

function exampleReducer(state = initialState, action: any) {
  switch (action.type) {
    case CONSOLE_ADD_LINES: {
      const { lines } = action;
      return state.updateIn(['consoles', action.consoleId, 'logMessages'], (old) => {
        if (old.size < 10000) {
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
    default:
      return state;
  }
}

export default exampleReducer;
