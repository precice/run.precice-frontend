import {ADD_CHART_DATA, ADD_PROGRESS_MAX_ITER} from '../constants';
// import {fromJS} from 'immutable';

// TODO: Handle totalTime update
export function chartDataReducer(state = { data: [ {x: 0, y: 0 } ], maxDt: 0, currDt : 0, domainX: 5,
  domainY: 5, totalTime: 0 }, action) {
  switch (action.type) {
    case ADD_CHART_DATA:
      // Check whether we need to update domain
      let domainXCurr = state.domainX;
      let domainYCurr = state.domainY;
      if (domainXCurr < action.data.x ) {
        domainXCurr = action.data.x;
      }
      if (domainYCurr < action.data.y ) {
        domainYCurr = action.data.y;
      }

      return Object.assign({}, state, {
        // data is array of objects
        data: [ ...state.data, action.data ]  }, {domainX: domainXCurr, domainY: domainYCurr,
      currDt: action.data.x });

    case ADD_PROGRESS_MAX_ITER:
      return Object.assign( {}, state, {maxDt: action.maxTimeSteps} );

    default:
      return state;
  }
}

export default chartDataReducer;
