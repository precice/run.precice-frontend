/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';

import {
  INIT_CONSOLE,
} from '../constants';
import { Action } from 'redux';
import { ConsoleId } from './index';


const initialState = fromJS({
  consoles: {
    [ConsoleId.left]: null,
    [ConsoleId.right]: null,
  },
});

function exampleReducer(state = initialState, action: any) {
  switch (action.type) {
    case INIT_CONSOLE:
      return state
        .setIn(['consoles', action.consoleId], action.console);
    default:
      return state;
  }
}

export default exampleReducer;
