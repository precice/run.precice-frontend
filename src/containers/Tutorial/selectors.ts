import {createSelector} from 'reselect';
import {locationSelector} from '../Router/selectors';

const tutorialSubstateSelector = (state) => {
  return state.get('tutorial');
};
export const completedTaskSelector = () => createSelector(
  tutorialSubstateSelector,
  (tutorialSubstate) => tutorialSubstate.get('firstTaskCompleted'));
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
    // extract step number from pathname for switch
    switch ( pathname.split('/')[2] ) {
      case 'step1':
        return 2;

      case 'step2': {
        return 34;
      }

      case 'step3':
        return 67;

      case 'step4':
        return 100;

      default:
        return 2;

    }
  },
);

export const buttonLinksSelector = () => createSelector
(
  // Provide paths for buttons
  pathnameSelector(),
    ( pathname ) => {
      const stepArray = ['/tutorial/step1', '/tutorial/step2/sub1', '/tutorial/step2/sub2', '/tutorial/step2/sub3', '/tutorial/step2/sub4', '/tutorial/step2/sub5', '/tutorial/step2/sub6', '/tutorial/step3', '/tutorial/step4'];
      const index = stepArray.indexOf( pathname );
      const buttonLinks = {
        next: stepArray[index + 1],
        goback: stepArray[-1],
        previous: stepArray [index - 1],
      };
      if (index === 1) {
        buttonLinks.next = stepArray[7];
      } else if (index === 2 || index === 3 || index === 4 || index === 5 || index === 6) {
        buttonLinks.next = stepArray[7];
        buttonLinks.previous = stepArray[0];
      } else if (index === 7) {
        buttonLinks.previous = stepArray[6];
      } else if (index === 8) {
        buttonLinks.goback = stepArray[6];
      }

      return buttonLinks;
    },
);
