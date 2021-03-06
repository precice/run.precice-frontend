/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';

import {
  EXAMPLE_ACTION,
} from '../constants';
import { Action } from 'redux';


const initialState = fromJS({
  example: '123',
});

function exampleReducer(state = initialState, action: any) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return state
        .set('exampleField', action.newText);
    default:
      return state;
  }
}

export default exampleReducer;
