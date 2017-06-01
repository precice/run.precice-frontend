/*
 *
 * Example reducer
 *
 */

import {fromJS} from 'immutable';

import {
  EXAMPLE_ACTION
} from '../constants';
import {Action} from "redux";


const initialState = fromJS({
  example: '123',
});

function exampleReducer(state = initialState, action: Action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return state
        .set('example', '234');
    default:
      return state;
  }
}

export default exampleReducer;
