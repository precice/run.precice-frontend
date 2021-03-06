import {createSelector} from 'reselect';
import {locationSelector} from '../Router/selectors';

const step2SubstateSelector = (state) => {
  return state.get('step2');
};

export const blockNumberSelector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('blockNumber'));


export const hidCheckSelector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('hidCheck2'));

export const xmlflagSelector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => {
    const xmlflag = step2Substate.getIn(['xmlflag']).toJS();
    return xmlflag;
  });
