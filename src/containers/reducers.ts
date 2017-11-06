import { routerReducer } from 'react-router-redux';
import { ReducersMapObject } from 'redux';
import exampleReducer from './Example/reducer';
import step1Reducer from './Step1/reducer';
import step2Reducer from './Step2/reducer';
import {step3Reducer} from './Step3/reducer';
import tutorialReducer from './Tutorial/reducer';
import chartDataReducer from './ConvergencePlot/reducer';

const combined: ReducersMapObject = {
  route: routerReducer,
  example: exampleReducer,
  tutorial: tutorialReducer,
  step1: step1Reducer,
  step2: step2Reducer,
  step3: step3Reducer,
  chartData: chartDataReducer,
};

export default combined;
