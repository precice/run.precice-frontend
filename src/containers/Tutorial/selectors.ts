import {createSelector} from 'reselect';
import {locationSelector} from '../Router/selectors';

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
        switch (pathname.split('/')[3]) {
          case 'sub1':
            return 10;

          case 'sub2':
            return 20;

          case 'sub3':
            return 30;

          case 'sub4':
            return 40;

          case 'sub5':
            return 50;
        }
      }

      case 'step3':
        return 75;

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
      const stepArray = ['/tutorial/step1', '/tutorial/step2/sub1', '/tutorial/step2/sub2', '/tutorial/step2/sub3', '/tutorial/step2/sub4', '/tutorial/step2/sub5', '/tutorial/step3', '/tutorial/step4'];
      const index = stepArray.indexOf( pathname );
      const buttonLinks = {
        next: stepArray[index + 1],
        current: pathname,
        previous: stepArray [index - 1],
      };

      return buttonLinks;
    },
);
