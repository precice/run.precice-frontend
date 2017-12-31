/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';


import {
  HID_CHECK2, XML_CLICK, XML_ALL_CLICK, IVE_READ, INITIAL_RELAXATION_CHANGE, BLOCKNUMBER_FLAG, XML_VISIT,
} from '../constants';
import { Action } from 'redux';


const initialState = fromJS({
  iveReadStep2: false,
  iveReadStep3: false,
  xmlflag: {
    part1: [false, false, false, false, false, false],
    part2: [false, false, false, false, false, false],
  },
  initialRelaxationValue: 0.9,
  blockNumber: '1',
});

function step2Reducer(state = initialState, action: any) {
  switch (action.type) {
    case HID_CHECK2:
      return state
        .set('hidCheck2', !action.check);
    case XML_VISIT: {
      const trueize = (x) => (x.splice(Number(action.block) - 1, 1, true));
      return state
        .updateIn(['xmlflag', 'part' + action.part.toString()], trueize );
    }
    case XML_ALL_CLICK:
      return state
        .updateIn(['xmlflag', 'part' + action.part.toString()], (x) => (x.splice(0, 1, true)) )
        .updateIn(['xmlflag', 'part' + action.part.toString()], (x) => (x.splice(1, 1, true)) )
        .updateIn(['xmlflag', 'part' + action.part.toString()], (x) => (x.splice(2, 1, true)) )
        .updateIn(['xmlflag', 'part' + action.part.toString()], (x) => (x.splice(3, 1, true)) )
        .updateIn(['xmlflag', 'part' + action.part.toString()], (x) => (x.splice(4, 1, true)) )
        .updateIn(['xmlflag', 'part' + action.part.toString()], (x) => (x.splice(5, 1, true)) );
    case IVE_READ:
      return state
        .set('iveRead' + action.whichStep, true);
    case INITIAL_RELAXATION_CHANGE:
      return state
        .set('initialRelaxationValue', action.check);
    case BLOCKNUMBER_FLAG:
      return state
        .set('blockNumber', action.check);
    default:
      return state;
  }
}

export default step2Reducer;

