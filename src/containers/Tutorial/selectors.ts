import {createSelector} from 'reselect';
import {locationSelector} from '../Router/selectors';
export const percentageSelector = () => createSelector
(
  locationSelector,
  (location) => {
    const pathname = location && location.pathname
    switch (pathname.split('/')[2]) {
      case 'step1':
        return 25;

      case 'step2':
        return 50;

      case 'step3':
        return 75;

      case 'step4':
        return 100;

      default:
        return 2;

    }
  },
)
