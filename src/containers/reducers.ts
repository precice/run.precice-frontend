import { routerReducer } from 'react-router-redux';
import { ReducersMapObject } from 'redux';
import step2Reducer from './Step2/reducer';
import {step3Reducer} from './Step3/reducer';
import tutorialReducer from './Tutorial/reducer';
import chartDataReducer from './ConvergencePlot/reducer';

const combined: ReducersMapObject = {
  route: routerReducer,
  tutorial: tutorialReducer,
  step2: step2Reducer,
  step3: step3Reducer,
  chartData: chartDataReducer,
};

export default combined;
