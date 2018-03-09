/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';


import {
  HID_CHECK2, XML_VISIT_ALL, INITIAL_RELAXATION_CHANGE, CHANGE_BLOCK_NUMBER, XML_VISIT,
} from '../constants';
import { Action } from 'redux';


const initialState = fromJS({
  iveReadStep2: false,
  iveReadStep3: false,
  xmlflag: {
    part1: [false, false, false, false, false, false],
    part2: [true, true, true, true, true, true],
    part3: [true, true, true, true, true, true],
    part4: [true, true, true, true, true, true],
    part5: [true, true, true, true, true, true],
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
    case XML_VISIT_ALL:
      return state
        .updateIn(['xmlflag', 'part' + action.part.toString()], (x) => [true, true, true, true, true, true]);
    case INITIAL_RELAXATION_CHANGE:
      return state
        .set('initialRelaxationValue', action.check);
    case CHANGE_BLOCK_NUMBER:
      return state
        .set('blockNumber', action.blockNumber)
        .updateIn(['xmlflag', 'part' + action.partNumber.toString()], (x) => x.splice(parseInt(action.blockNumber, 10) - 1, 1, true) )
        ;
    default:
      return state;
  }
}

export default step2Reducer;

