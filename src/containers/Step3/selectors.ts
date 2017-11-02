import {createSelector} from 'reselect';
const step3SubstateSelector = (state) => {
  return state.get('step3');
};

export const hidCheckSelector = () => createSelector(
  step3SubstateSelector,
  (step3Substate) => step3Substate.get('hidCheck'));
