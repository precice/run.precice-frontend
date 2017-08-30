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
          end: 42,
        };
        return lineIndex;
      }

      case 'sub4': {
        const lineIndex = {
          start: 43,
          end: 45,
        };
        return lineIndex;
      }

      case 'sub5': {
        const lineIndex = {
          start: 45,
          end: 62,
        };
        return lineIndex;
      }
    }
  },
);
