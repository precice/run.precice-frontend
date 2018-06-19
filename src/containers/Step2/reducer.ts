/*
 *
 * Example reducer
 *
 */

import { fromJS } from 'immutable';


import {
  HID_CHECK2, CHANGE_BLOCK_NUMBER, 
} from '../constants';
import { Action } from 'redux';


const initialState = fromJS({
  xmlflag: {
    // We start from first block, so it is always "seen"  
    part1: [true, false, false, false, false, false],
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
    case CHANGE_BLOCK_NUMBER:
      {/* Marking that block as visited */} 
      return state
        .set('blockNumber', action.blockNumber)
        // since xml file is shared between the different parts (for now), for all but common part, we update only the common state. 
        // see corresponding bit in Step2/index.tsx 
        .updateIn(['xmlflag', 'part1' /* + action.partNumber.toString() */ ], (x) => x.splice(parseInt(action.blockNumber, 10) - 1, 1, true) )
        ;
    default:
      return state;
  }
}

export default step2Reducer;

