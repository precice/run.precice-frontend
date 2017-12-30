/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FIRST_TASK_COMPLETED, MODAL_CLICK, PARTNUMBER_FLAG,
} from '../constants';
import { Action } from 'redux';


const initialState = fromJS({
  modalClick: false,
  partNumber: 1,
});

function exampleReducer(state = initialState, action: Action) {
  switch (action.type) {
    case MODAL_CLICK:
      return state
        .set('modalClick', true);
    default:
      return state;
  }
}

export default exampleReducer;
