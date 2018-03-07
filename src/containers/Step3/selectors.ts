import {createSelector} from 'reselect';

const step3SubstateSelector = (state) => {
  return state.get('step3');
};

export const hidCheckSelector = () => createSelector (
  step3SubstateSelector,
  (step3Substate) =>
    step3Substate.get('hidCheck'));


export const consoleOneStateSelector = () => createSelector (
  step3SubstateSelector,
  (step3Substate) =>
    step3Substate.get('consoleOneActive'));

export const consoleTwoStateSelector = () => createSelector (
  step3SubstateSelector,
  (step3Substate) =>
    step3Substate.get('consoleTwoActive'));

export const plotDisplaySelector = () => createSelector(
  step3SubstateSelector,
  (step3Substate) =>
  step3Substate.get('showPlot'));


export const timeModalDisplaySelector = () => createSelector (
  step3SubstateSelector,
  (step3Substate) =>
  step3Substate.get('showTimeModal'));



export const finalTimeSelector = () => createSelector (
  step3SubstateSelector,
  (step3Substate) => {
    return step3Substate.get('finalTime');
  });

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

export const oldChunksSelector = (consoleId) => createSelector(
  step3SubstateSelector,
  (substate) => substate.getIn(['consoles', consoleId, 'oldChunks']),
);


