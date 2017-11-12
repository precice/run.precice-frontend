import {createSelector} from 'reselect';

// TODO:
// We added something to reducers so this is
// probably what we need. But let's be sure and
// investigate.
const chartDataSubstateSelector = (state) => {
  return state.get('chartData');
};

// Returns plot points from state
export const chartDataSelector = () => createSelector(
  chartDataSubstateSelector,
  (chartDataSubstate) => {
    return chartDataSubstate.data;
  });

export const domainXSelector = () => createSelector(
  chartDataSubstateSelector,
  (chartDataSubstate) => {
    return chartDataSubstate.domainX;
  });

export const domainYSelector = () => createSelector(
  chartDataSubstateSelector,
  (chartDataSubstate) => {
    return chartDataSubstate.domainX;
  });

// Returns percentage for progress bar
export const percentProgressSelector = () => createSelector(
  chartDataSubstateSelector,
  (chartDataSubstate) => {
    const currDt = chartDataSubstate.currDt;
    const maxDt = chartDataSubstate.maxDt;

    if ( currDt === 0 ) {
      return 0;
    } else {
      // Round to nearest integer - No fractional progress
      return (Math.round (currDt / maxDt ) ) * 100;
    }

  });


// For showing the total time
export const totalTimeSelector = () => createSelector(
  chartDataSubstateSelector,
  (chartDataSubstate) => {
    return chartDataSubstate.totalTime;
  });
