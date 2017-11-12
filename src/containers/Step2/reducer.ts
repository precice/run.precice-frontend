/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';


import {
  HID_CHECK2, XML_CLICK, XML_ALL_CLICK, IVE_READ
} from '../constants';
import { Action } from 'redux';


const initialState = fromJS({
  iveRead: false,
  xmlflag1: false,
  xmlflag2: false,
  xmlflag3: false,
  xmlflag4: false,
  xmlflag5: false,
  xmlflag6: false,
});

function step2Reducer(state = initialState, action: any) {
  switch (action.type) {
    case HID_CHECK2:
      return state
        .set('hidCheck2', !action.check);
    case XML_CLICK:
      return state
        .set(action.check, true);
    case XML_ALL_CLICK:
      return state
        .set('xmlflag2', true).set('xmlflag3', true).set('xmlflag4', true).set('xmlflag5', true).set('xmlflag6', true);
    case IVE_READ:
      return state
        .set('iveRead', true);
    default:
      return state;
  }
}

export default step2Reducer;

