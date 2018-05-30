import {createSelector} from 'reselect';
import {locationSelector} from '../Router/selectors';

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


export const buttonLinksSelector = () => createSelector
(
  // Provide paths for buttons
  pathnameSelector(),
    ( pathname ) => {
      const stepArray = [
        '/tutorial/part1/step1',
        '/tutorial/part1/step2',
        '/tutorial/part1/step3',
        '/tutorial/part1/step4',
        '/tutorial/part2/step1',
        '/tutorial/part2/step2',
        '/tutorial/part2/step3',
        '/tutorial/part2/step4',
        '/tutorial/part3/step1',
        '/tutorial/part3/step2',
        '/tutorial/part3/step3',
        '/tutorial/part3/step4',
        '/tutorial/part4/step1',
        '/tutorial/part4/step2',
        '/tutorial/part4/step3',
        '/tutorial/part4/step4',
        '/tutorial/part5/step1',
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

      // we hit -1 index (path part was not found) 
      if (index == -1)  
          buttonLinks.next = undefined; 

      return buttonLinks;
    },
);
