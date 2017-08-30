import { routerReducer } from 'react-router-redux';
import { ReducersMapObject } from 'redux';
import exampleReducer from './Example/reducer';
import step1Reducer from './Step1/reducer';
import step3Reducer from './Step3/reducer';
import tutorialReducer from './Tutorial/reducer';

const combined: ReducersMapObject = {
  route: routerReducer,
  example: exampleReducer,
  tutorial: tutorialReducer,
  step1: step1Reducer,
  step3: step3Reducer,
};

export default combined;
