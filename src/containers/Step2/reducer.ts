/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';


import {
  HID_CHECK2,
} from '../constants';
import { Action } from 'redux';


const initialState = fromJS({
  hidAction: '123',
  hidCheck: false,
});

function step2Reducer(state = initialState, action: any) {
  switch (action.type) {
    case HID_CHECK2:
      return state
        .set('hidCheck2', !action.check);
    default:
      return state;
  }
}

export default step2Reducer;

