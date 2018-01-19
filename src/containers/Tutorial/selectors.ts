import {createSelector} from 'reselect';
import {locationSelector} from '../Router/selectors';
import {TOTAL_PART} from '../constants';

const tutorialSubstateSelector = (state) => {
  return state.get('tutorial');
};

export const partNumberSelector = () => createSelector(
  pathnameSelector(),
  (pathname) => {
    return Number(pathname.split('/')[2].substring(4, 5));
  },
);

export const modalClickSelector = () => createSelector(
  tutorialSubstateSelector,
  (tutorialSubstate) => tutorialSubstate.get('modalClick'));

export const pathnameSelector = () => createSelector
(
  // This function returns the pathname
  locationSelector,
  (location) => {
    const pathname = location && location.pathname;
    return pathname;
  },
);

export const percentageSelector = () => createSelector
(
  // pathnameSelector returns lambda function
  pathnameSelector(),
  (pathname) => {
    if (pathname.split('/')[2] === 'step1') {
      return 2;
    } else {

      const partNumber = Number(pathname.split('/')[2].substring(4, 5));
      const stepNumber = Number(pathname.split('/')[3].substring(4, 5));
      const partSize = Number((100 / TOTAL_PART).toFixed(0));
      const stepSize = Number((partSize / 3).toFixed(0));

      if (partNumber === TOTAL_PART && stepNumber === 4) {
        return 100;
      } else if (stepNumber === 4) {
        return partNumber * partSize;
      } else {
        return (partNumber - 1) * partSize + (stepNumber - 1) * stepSize;
      }
    }
  },
);

export const buttonLinksSelector = () => createSelector
(
  // Provide paths for buttons
  pathnameSelector(),
    ( pathname ) => {
      const stepArray = [
        '/tutorial/step1',
        '/tutorial/part1/step2',
        '/tutorial/part1/step3',
        '/tutorial/part1/step4',
        '/tutorial/part2/step2',
        '/tutorial/part2/step3',
        '/tutorial/part2/step4',
        '/tutorial/part3/step2',
        '/tutorial/part3/step3',
        '/tutorial/part3/step4',
        '/tutorial/part4/step2',
        '/tutorial/part4/step3',
        '/tutorial/part4/step4',
        '/tutorial/part5/step2',
        '/tutorial/part5/step3',
        '/tutorial/part5/step4',
        '/final',
      ];
      const index = stepArray.indexOf( pathname );
      const buttonLinks = {
        next: stepArray[index + 1],
        previous: stepArray [index - 1],
      };

      return buttonLinks;
    },
);
