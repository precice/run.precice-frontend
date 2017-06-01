import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import LandingPage from "./components/LandingPage/index";
import Example from "./containers/Example/index";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/example' component={Example}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app-root')
);
