/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';

import {
  INIT_CONSOLE, HID_CHECK3, CONSOLE_ONE_ACTIVE, CONSOLE_TWO_ACTIVE,
  MODAL_DATA} from '../constants';
import { ConsoleId } from './index';


const initialState = fromJS({
  consoles: {
    [ConsoleId.left]: null,
    [ConsoleId.right]: null,
  },
  hidCheck: false,
  consoleOneActive: false,
  consoleTwoActive: false,
  showModal: false,
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
        .set('consoleTwoActive', action.value);

    case CONSOLE_TWO_ACTIVE:
      return state.
        set('consoleOneActive', action.value);

   case MODAL_DATA:
    return state
      .set('showModal', action.value);

    default:
      return state;
  }
}
