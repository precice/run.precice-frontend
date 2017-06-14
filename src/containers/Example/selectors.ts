import { createSelector } from 'reselect';
const exampleSelector = (state) => {
  return state.get('example');
};

export const exampleFieldSelector = () => createSelector(
  exampleSelector,
  (exampleSubstate) => exampleSubstate.get('exampleField'),
);
