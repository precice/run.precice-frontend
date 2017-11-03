import {createSelector} from 'reselect';

const step3SubstateSelector = (state) => {
  return state.get('step3');
};

// TODO:
// We added something to reducers so this is
// probably what we need. But let's be sure and
// investigate.
const chartDataSubstateSelector = (state) => {
  return state.get('chartData');
};

export const hidCheckSelector = () => createSelector(
  step3SubstateSelector,
  (step3Substate) => step3Substate.get('hidCheck'));

// TODO:
// chartDataSelector for getting data
// This is just a dummy selector for now
// We need to add functionality
// Think about how we represent data
// arriving from the server. How do we store
// that? Do we have the entire set of data available in
// the redux store or do we have a local representation
// that we update based on new values arriving
// from the server?
export const chartDataSelector = () => createSelector(
  chartDataSubstateSelector,
  (chartDataSubstate) => {
    return chartDataSubstate.data;
  });
