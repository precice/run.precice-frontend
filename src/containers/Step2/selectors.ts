import {createSelector} from 'reselect';
import {locationSelector} from '../Router/selectors';
import * as TextForStep2 from './TextForStep2';

const step2SubstateSelector = (state) => {
  return state.get('step2');
};

export const iveReadSelector = (whichStep) => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('iveRead' + whichStep));

export const initialRelaxationValueSelector = () => createSelector(
  step2SubstateSelector,
  (step2Substate) => step2Substate.get('initialRelaxationValue'));

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
          start: TextForStep2.sec1.start - 1,
          end: TextForStep2.sec1.end + 1,
          section: 'xmlflag1',
        };
        return lineIndex;
    }

      case 'sub2': {
        const lineIndex = {
          start: TextForStep2.sec2.start - 1,
          end: TextForStep2.sec2.end + 1,
          section: 'xmlflag2',
        };
        return lineIndex;
      }

      case 'sub3': {
        const lineIndex = {
          start: TextForStep2.sec3.start - 1,
          end: TextForStep2.sec3.end + 1,
          section: 'xmlflag3',
        };
        return lineIndex;
      }

      case 'sub4': {
        const lineIndex = {
          start: TextForStep2.sec4.start - 1,
          end: TextForStep2.sec4.end + 1,
          section: 'xmlflag4',
        };
        return lineIndex;
      }

      case 'sub5': {
        const lineIndex = {
          start: TextForStep2.sec5.start - 1,
          end: TextForStep2.sec5.end + 1,
          section: 'xmlflag5',
        };
        return lineIndex;
      }

      case 'sub6': {
        const lineIndex = {
          start: TextForStep2.sec6.start - 1,
          end: TextForStep2.sec6.end + 1,
          section: 'xmlflag6',
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

