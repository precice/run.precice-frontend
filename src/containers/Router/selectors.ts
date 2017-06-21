import { createSelector } from 'reselect';

export const locationSelector = (state) => {
  return state.getIn(['route']).location;
};

