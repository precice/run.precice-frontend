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
    const data = chartDataSubstate.get('data').toJSON();
    return data;
  });

export const domainXSelector = () => createSelector(
  chartDataSubstateSelector,
  (chartDataSubstate) => chartDataSubstate.get('domainX'));

export const domainYSelector = () => createSelector(
  chartDataSubstateSelector,
  (chartDataSubstate) => chartDataSubstate.get('domainY'));

// Returns percentage for progress bar
export const percentProgressSelector = () => createSelector(
  chartDataSubstateSelector,
  (chartDataSubstate) => {
    const currDt = chartDataSubstate.get('currDt');
    const maxDt = chartDataSubstate.get('maxDt');

    if ( maxDt === 0 ) {
      return 0;
    } else {
      // Round to nearest integer - No fractional progress
      return (Math.round ( (currDt * 100 / maxDt) * 100  ) ) ;
    }

  });

export const highScoreSelector = () => createSelector (
  chartDataSubstateSelector,
  (chartDataSubstate) => {
    return chartDataSubstate.get('time').toJSON();
  });
