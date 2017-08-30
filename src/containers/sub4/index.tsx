import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
// import * as styles from './styles.scss';
// import * as TextForStep2 from './TextForStep2';

interface Sub4Props {
}

class Sub4 extends React.Component<Sub4Props, any> {
  constructor() {
    super();
    this.state = {
    };
  }
  public render() {
    return (
      <div>
        Now, we can set the way to communicate the two solvers to each other.
        <br/><br/>
        <li>
          "From" indicates the solver that initiates communication, "To" indicate the other.
          <br/>
          However, for most of the cases, it makes no difference
          which solver initiates the communication.
          <br/><br/>
          Here, we set from "SU2_CFD" to "Calculix".
          <button>set</button>
        </li>
        <br/>
        <li>
          We now set distribution-type:
          <select id="distribution-type" name="distribution-type">
            <option value="gather-scatter">gather-scatter</option>
            <option value="point-to-point">point-to-point</option>
          </select>
        </li>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({type: EXAMPLE_ACTION}),
  };
}

export default connect < any, any, any > (
  mapStateToProps,
  mapDispatchToProps
)(Sub4);

