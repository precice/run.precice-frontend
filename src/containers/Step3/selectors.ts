import {createSelector} from 'reselect';
const step3SubstateSelector = (state) => {
  return state.get('step3');
};

export const hidCheckSelector = () => createSelector(
  step3SubstateSelector,
  (step3Substate) => step3Substate.get('hidCheck'));

export const logMessagesSelector = (consoleId) => createSelector(
  step3SubstateSelector,
  (substate) => substate.getIn(['consoles', consoleId, 'logMessages']),
);


export const lockBottomSelector = (consoleId) => createSelector(
  step3SubstateSelector,
  (substate) => substate.getIn(['consoles', consoleId, 'lockBottom']),
);

export const busySelector = (consoleId) => createSelector(
  step3SubstateSelector,
  (substate) => substate.getIn(['consoles', consoleId, 'busy']),
);
