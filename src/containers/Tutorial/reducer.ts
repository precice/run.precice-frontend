/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FIRST_TASK_COMPLETED, MODAL_CLICK,
} from '../constants';
import { Action } from 'redux';


const initialState = fromJS({
  firstTaskCompleted: false,
  modalClick: false,
});

function exampleReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FIRST_TASK_COMPLETED:
      return state
        .set('firstTaskCompleted', true);
    case MODAL_CLICK:
      return state
        .set('modalClick', true);
    default:
      return state;
  }
}

export default exampleReducer;
