import exampleReducer from './Example/reducer';
import { routerReducer } from 'react-router-redux';
import { ReducersMapObject } from 'redux';

const combined: ReducersMapObject = {
  route: routerReducer,
  example: exampleReducer,
};

export default combined;
