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
