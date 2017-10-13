import { connect } from 'react-redux';
import { EXAMPLE_ACTION } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
// import * as styles from './styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub1Props {
}

class Sub1 extends React.Component<Sub1Props, any> {
  constructor() {
    super();
    this.state = {};
  }

  public render() {
    return (
      <div>
        We first need to set up the general setting of the interface.
        <br/><br/>
        <li>
          To set the dimension for the scenario.
          <select id="data type" name="data type">
            <option hidden={true} selected={true}> -- select an option --</option>
            <option value="twoD">2</option>
            <option value="oneD">3</option>
          </select>
          <br/>
        </li>
        <br/>
        <li>
          For coupling, we need data transfer between two solvers.
          We first define the data type:
          <Tooltip
            trigger="click"
            width="100"
            title="Scalar means the communication consists only of unstructured numbers while vector transfers multiple dimensions at once. In scenarios with heavy communication between precice node, vector can lead to a small speed up, but usually this option has not a big performance impact"
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
          <select id="data type" name="data type">
            <option hidden={true} selected={true}> -- select an option --</option>
            <option value="scalar">scalar</option>
            <option value="vector">vector</option>
          </select>
          <br/><br/>
        </li>
        <li>
          For this tutorial, we need to transfer the force and displacement.
          <br/>
          We named it "Forces0" and "DisplacementDeltas0".
          <button>set</button>
        </li>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({ type: EXAMPLE_ACTION }),
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Sub1);

