import { ADD_CHART_DATA, ADD_PROGRESS_MAX_ITER, PLOT_DELETE_DATA } from '../constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
  data: [ {x: 0, y: 0 } ],
  maxDt: 0,
  currDt : 0,
  domainX: 5,
  domainY: 5,
});

// TODO: Handle totalTime update
export function chartDataReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHART_DATA:
      // Check whether we need to update domain
      let domainXCurr = state.get('domainX');
      let domainYCurr = state.get('domainY');
      if (domainXCurr < action.data.x ) {
        domainXCurr = action.data.x;
      }
      if (domainYCurr < action.data.y ) {
        domainYCurr = action.data.y;
      }

      return state
        .update('data', data => data.push( action.data) ).set('domainX', domainXCurr).set('domainY', domainYCurr)
        .set('currDt', action.data.x);

    case ADD_PROGRESS_MAX_ITER:
      return state
        .set('maxDt', action.maxTimeSteps);

    case PLOT_DELETE_DATA:
      return state
        .set('data', fromJS([ {x: 0, y: 0 } ]))
        .set('currDt', 0);
      ;
    default:
      return state;
  }
}

export default chartDataReducer;
