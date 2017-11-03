/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';

import {
  INIT_CONSOLE, HID_CHECK3, ADD_CHART_DATA, ADD_PROGRESS_MAX_ITER
} from '../constants';
import { Action } from 'redux';
import { ConsoleId } from './index';


const initialState = fromJS({
  consoles: {
    [ConsoleId.left]: null,
    [ConsoleId.right]: null,
  },
});

export function chartDataReducer(state = {TimeSteps: [0], Iterations: [0], maxDt: 0 }, action) {
  switch (action.type) {
    case ADD_CHART_DATA:
      return Object.assign({}, state, { TimeSteps: [ ...state.TimeSteps, action.TimeSteps[0] ],
        Iterations: [ ...state.Iterations, action.Iterations[0] ]  } );

      case ADD_PROGRESS_MAX_ITER:
      return Object.assign( {}, state, {maxDt: action.maxTimeSteps} );

    default:
      return state;
  }
}

export function step3Reducer(state = initialState, action: any) {
  switch (action.type) {
    case INIT_CONSOLE:
      return state
        .setIn(['consoles', action.consoleId], action.console);
    case HID_CHECK3:
      return state
        .set('hidCheck', !action.check);
    default:
      return state;
  }
}
