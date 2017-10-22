import {createSelector} from 'reselect';
import {locationSelector} from '../Router/selectors';
import * as TextForStep2 from './TextForStep2';

const step2SubstateSelector = (state) => {
  return state.get('step2');
};

export const hidCheckSelector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('hidCheck2'));

export const xmlFlag1Selector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('xmlflag1'));
export const xmlFlag2Selector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('xmlflag2'));
export const xmlFlag3Selector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('xmlflag3'));
export const xmlFlag4Selector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('xmlflag4'));
export const xmlFlag5Selector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('xmlflag5'));
export const xmlFlag6Selector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('xmlflag6'));
export const pathnameSelector = () => createSelector
(
  // This function returns the pathname
  locationSelector,
  (location) => {
    const pathname = location && location.pathname;
    return pathname;
  },
);

export const lineSelector = () => createSelector
(
  // pathnameSelector returns lambda function
  pathnameSelector(),
  (pathname) => {
    // extract step number from pathname for switch
    switch (pathname.split('/')[3]) {
      case 'sub1': {
        const lineIndex = {
          start: 4,
          end: 10,
        };
        return lineIndex;
    }

      case 'sub2': {
        const lineIndex = {
          start: 11,
          end: 21,
        };
        return lineIndex;
      }

      case 'sub3': {
        const lineIndex = {
          start: 25,
          end: 36,
        };
        return lineIndex;
      }

      case 'sub4': {
        const lineIndex = {
          start: 36,
          end: 42,
        };
        return lineIndex;
      }

      case 'sub5': {
        const lineIndex = {
          start: 43,
          end: 45,
        };
        return lineIndex;
      }

      case 'sub6': {
        const lineIndex = {
          start: 45,
          end: 62,
        };
        return lineIndex;
      }
    }
  },
);

export const titleSelector = () => createSelector
(
  // pathnameSelector returns lambda function
  pathnameSelector(),
  (pathname) => {
    // extract step number from pathname for switch
    switch (pathname.split('/')[3]) {
      case 'sub1':
        return TextForStep2.sub1;

      case 'sub2':
        return TextForStep2.sub2;

      case 'sub3':
        return TextForStep2.sub3;

      case 'sub4':
        return TextForStep2.sub4;

      case 'sub5':
        return TextForStep2.sub5;

      case 'sub6':
        return TextForStep2.sub6;
    }
  },
);

