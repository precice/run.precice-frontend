/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';

import {
  INIT_CONSOLE, HID_CHECK3, ADD_CHART_DATA, ADD_PROGRESS_MAX_ITER, CONSOLE_ONE_ACTIVE, CONSOLE_TWO_ACTIVE
} from '../constants';
import { Action } from 'redux';true
import { ConsoleId } from './index';


const initialState = fromJS({
  consoles: {
    [ConsoleId.left]: null,
    [ConsoleId.right]: null,
  },
  consoleOneActive: false,
  consoleTwoActive: false,
});


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
      return state
        .set('consoleTwoActive', action.value);
    default:
      return state;
  }
}
